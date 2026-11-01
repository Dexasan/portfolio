export const LIVE_API =
  process.env.NEXT_PUBLIC_LIVE_API_URL ||
  "https://sandesh-portfolio-live.adhikariaadarsha7.chatgpt.site";
export type LiveMessage = {
  id: number;
  alias: string;
  body: string;
  created: number;
  mine?: boolean;
};
type Visitor = { token: string; alias: string };
let visitor: Promise<Visitor> | undefined;
async function fetchJSON(path: string, options: RequestInit = {}) {
  const res = await fetch(`${LIVE_API}/api/${path}`, {
    ...options,
    cache: "no-store",
  }).catch(() => {
    throw new Error("Couldn’t reach the live service. Please try again.");
  });
  const data = await res
    .json()
    .catch(() => ({ error: "The live service is temporarily unavailable." }));
  if (!res.ok)
    throw Object.assign(
      new Error(data.error || "Unable to connect. Try again."),
      { status: res.status },
    );
  return data;
}
export function getVisitor(): Promise<Visitor> {
  if (!visitor)
    visitor = (async () => {
      try {
        const stored = localStorage.getItem("sandesh-visitor-v1");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (
            /^[a-f0-9]{64}$/.test(parsed.token) &&
            typeof parsed.alias === "string"
          )
            return parsed;
        }
      } catch {}
      const next = await fetchJSON("session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });
      try {
        localStorage.setItem("sandesh-visitor-v1", JSON.stringify(next));
      } catch {}
      return next;
    })().catch((error) => {
      visitor = undefined;
      throw error;
    });
  return visitor;
}
export async function liveRequest(
  path: string,
  body?: unknown,
  retry = true,
): Promise<any> {
  const current = await getVisitor();
  try {
    return await fetchJSON(path, {
      method: body === undefined ? "GET" : "POST",
      headers: {
        Authorization: `Bearer ${current.token}`,
        ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
  } catch (error) {
    if (retry && (error as { status?: number }).status === 401) {
      visitor = undefined;
      try {
        localStorage.removeItem("sandesh-visitor-v1");
      } catch {}
      return liveRequest(path, body, false);
    }
    throw error;
  }
}
export const readFeed = (before?: number) =>
  fetchJSON(`feed${before ? `?before=${before}` : ""}`);
