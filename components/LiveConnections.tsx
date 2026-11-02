"use client";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  getVisitor,
  liveRequest,
  readFeed,
  type LiveMessage,
} from "@/lib/live-client";

function WindowBar({ name, status }: { name: string; status: string }) {
  return (
    <div className="window-bar">
      <span className="window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{name}</span>
      <span className="window-status">{status}</span>
    </div>
  );
}
const errorText = (e: unknown) =>
  e instanceof Error ? e.message : "Couldn’t connect. Try again.";

export function YappieMatch() {
  const [state, setState] = useState("idle");
  const [alias, setAlias] = useState("");
  const [partner, setPartner] = useState("");
  const [messages, setMessages] = useState<LiveMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sending, setSending] = useState(false);
  const active = state === "waiting" || state === "matched";
  const alive = useRef(true);
  const operation = useRef(0);
  const bottom = useRef<HTMLDivElement>(null);
  const sync = useCallback(
    (data: {
      state: string;
      alias: string;
      partner?: string;
      messages: LiveMessage[];
    }) => {
      if (!alive.current) return;
      setState(data.state);
      setAlias(data.alias);
      setPartner(data.partner || "");
      setMessages(data.messages);
    },
    [],
  );
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);
  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      const generation = operation.current;
      try {
        const data = await liveRequest("match");
        if (!cancelled && generation === operation.current) {
          sync(data);
          setError("");
        }
      } catch (e) {
        if (!cancelled) setError(errorText(e));
      }
      if (!cancelled) timer = setTimeout(poll, 3000);
    };
    timer = setTimeout(poll, 1500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [active, sync]);
  useEffect(() => {
    const container = bottom.current?.parentElement;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages[messages.length - 1]?.id]);
  async function join() {
    operation.current += 1;
    setBusy(true);
    setError("");
    try {
      sync(await liveRequest("match", { action: "join" }));
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }
  async function leave() {
    operation.current += 1;
    setBusy(true);
    setError("");
    try {
      sync(await liveRequest("match", { action: "leave" }));
      setDraft("");
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }
  async function send(e: FormEvent) {
    e.preventDefault();
    if (!draft.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      await liveRequest("messages", { message: draft });
      setDraft("");
      sync(await liveRequest("match"));
    } catch (e) {
      setError(errorText(e));
    } finally {
      setSending(false);
    }
  }
  return (
    <div className="live-window match-window">
      <WindowBar
        name="yappie / quick chat"
        status={
          state === "matched"
            ? "CONNECTED"
            : state === "waiting"
              ? "SEARCHING"
              : "ANONYMOUS"
        }
      />
      <div className="match-body">
        {state === "matched" ? (
          <>
            <div className="pair-status">
              <span className="status-light" />
              You + {partner}
              <span>TEXT ONLY</span>
            </div>
            <div
              className="private-messages"
              aria-live="polite"
              aria-label="Your conversation"
            >
              {messages.length ? (
                messages.map((m) => (
                  <div
                    className={`private-message ${m.mine ? "mine" : ""}`}
                    key={m.id}
                  >
                    <span>{m.mine ? "YOU" : partner}</span>
                    <p>{m.body}</p>
                  </div>
                ))
              ) : (
                <p className="chat-empty">You’re connected. Say hello.</p>
              )}
              <div ref={bottom} />
            </div>
            <form className="chat-compose" onSubmit={send}>
              <label className="sr-only" htmlFor="private-message">
                Message your match
              </label>
              <input
                id="private-message"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={500}
                placeholder="Say something…"
                autoComplete="off"
              />
              <button
                disabled={sending || !draft.trim()}
                aria-label="Send message to your match"
              >
                ↗
              </button>
            </form>
          </>
        ) : (
          <div className="match-splash">
            <img
              src="/art/conversation-blue.webp"
              alt="Two illustrated strangers starting a conversation"
            />
            <span
              className={`match-symbol ${state === "waiting" ? "is-searching" : ""}`}
              aria-hidden="true"
            >
              ✳
            </span>
            <h3>
              {state === "waiting"
                ? "LOOKING FOR A VISITOR."
                : state === "ended"
                  ? "THEY LEFT. GO AGAIN?"
                  : "SAY HELLO TO SOMEONE NEW."}
            </h3>
            <p>
              {state === "waiting"
                ? "You’re in the queue. Keep this tab open; another visitor can join you here."
                : state === "ended"
                  ? "Your stranger left the chat. There’s always another conversation."
                  : "Match with another person visiting this website. No profile. Just a conversation."}
            </p>
          </div>
        )}
      </div>
      {error && (
        <p role="alert" className="live-error">
          {error}
        </p>
      )}
      <div className="match-actions">
        {active ? (
          <button onClick={leave} disabled={busy} className="outline-button">
            {busy
              ? "Leaving…"
              : state === "matched"
                ? "Leave conversation"
                : "Cancel search"}
            <span>×</span>
          </button>
        ) : (
          <button onClick={join} disabled={busy} className="red-button">
            {busy ? "Connecting…" : "Meet a stranger"}
            <span>↗</span>
          </button>
        )}
        <p>{alias ? `YOU’RE ${alias} · ` : ""}VISITOR-TO-VISITOR CHAT.</p>
      </div>
      <p className="live-footnote">
        Anonymous text chat. Leave anytime. Don’t share personal details. Chats
        end after one hour.
      </p>
    </div>
  );
}

export function DitchWall() {
  const [messages, setMessages] = useState<LiveMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [sending, setSending] = useState(false);
  const [earlier, setEarlier] = useState(false);
  const [loadingEarlier, setLoadingEarlier] = useState(false);
  const [reported, setReported] = useState<number[]>([]);
  const [connected, setConnected] = useState(false);
  const [alias, setAlias] = useState("");
  const list = useRef<HTMLDivElement>(null);
  const count = useRef(0);
  const nearBottom = useRef(true);
  const refresh = useCallback(async () => {
    const data = await readFeed();
    setMessages((previous) => {
      const map = new Map<number, LiveMessage>(previous.map((m) => [m.id, m]));
      for (const message of data.messages) map.set(message.id, message);
      return [...map.values()].sort((a, b) => a.id - b.id);
    });
    setEarlier((previous) => (count.current > 60 ? previous : data.hasEarlier));
    setLoaded(true);
    setConnected(true);
  }, []);
  useEffect(() => {
    let stop = false;
    const poll = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        await refresh();
      } catch (e) {
        if (!stop) {
          setError(errorText(e));
          setConnected(false);
          setLoaded(true);
        }
      }
    };
    void poll();
    const timer = setInterval(() => void poll(), 5000);
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [refresh]);
  useEffect(() => {
    if (messages.length !== count.current && nearBottom.current && list.current)
      list.current.scrollTop = list.current.scrollHeight;
    count.current = messages.length;
  }, [messages]);
  async function send(e: FormEvent) {
    e.preventDefault();
    if (!draft.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      const visitor = await getVisitor();
      setAlias(visitor.alias);
      await liveRequest("feed", { message: draft });
      setDraft("");
      nearBottom.current = true;
      await refresh();
    } catch (e) {
      setError(errorText(e));
    } finally {
      setSending(false);
    }
  }
  async function loadEarlier() {
    setLoadingEarlier(true);
    try {
      const data = await readFeed(messages[0]?.id);
      setMessages((old) => [...data.messages, ...old]);
      setEarlier(data.hasEarlier);
    } catch (e) {
      setError(errorText(e));
    } finally {
      setLoadingEarlier(false);
    }
  }
  async function report(id: number) {
    try {
      await liveRequest("report", { id });
      setReported((old) => [...old, id]);
    } catch (e) {
      setError(errorText(e));
    }
  }
  return (
    <div className="live-window ditch-wall">
      <WindowBar
        name="ditch / visitor stream"
        status={connected ? "LIVE" : "CONNECTING"}
      />
      <div className="wall-heading">
        <span className={connected ? "status-light" : "status-light dim"} />
        <strong>who's been here?</strong>
        <span>PUBLIC CHAT</span>
      </div>
      <div
        className="wall-messages"
        ref={list}
        onScroll={() => {
          if (list.current)
            nearBottom.current =
              list.current.scrollHeight -
                list.current.scrollTop -
                list.current.clientHeight <
              70;
        }}
        aria-live="polite"
        aria-label="Public visitor messages"
      >
        {earlier && (
          <button
            className="earlier-button"
            onClick={loadEarlier}
            disabled={loadingEarlier}
          >
            {loadingEarlier ? "Loading…" : "↑ Earlier messages"}
          </button>
        )}
        {!loaded ? (
          <p className="chat-empty">Connecting to the stream…</p>
        ) : !messages.length ? (
          <div className="wall-empty">
            <span aria-hidden="true">↗</span>
            <h3>nothing here yet.</h3>
            <p>
              Leave the first message.
              <br />
              The next visitor will see it.
            </p>
          </div>
        ) : (
          messages.map((m) => (
            <article className="wall-message" key={m.id}>
              <span className="guest-avatar" aria-hidden="true">
                {m.alias.slice(-2)}
              </span>
              <div>
                <header>
                  <strong>{m.alias}</strong>
                  <time dateTime={new Date(m.created).toISOString()}>
                    {new Date(m.created).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                  <button
                    onClick={() => void report(m.id)}
                    disabled={reported.includes(m.id)}
                    aria-label={`Report message from ${m.alias}`}
                  >
                    {reported.includes(m.id) ? "Reported" : "Report"}
                  </button>
                </header>
                <p>{m.body}</p>
              </div>
            </article>
          ))
        )}
      </div>
      {error && (
        <p role="alert" className="live-error">
          {error}
        </p>
      )}
      <form className="wall-compose" onSubmit={send}>
        <label className="sr-only" htmlFor="public-message">
          Write a public message
        </label>
        <input
          id="public-message"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={280}
          placeholder="Leave something on the wall…"
          autoComplete="off"
        />
        <button className="red-button" disabled={sending || !draft.trim()}>
          {sending ? "Sending…" : "Send"}
          <span>↗</span>
        </button>
      </form>
      <div className="wall-footnote">
        <span>{alias || "NO ACCOUNT NEEDED"}</span>
        <span>{draft.length}/280</span>
      </div>
      <p className="live-footnote">
        Public and saved for future visitors. Keep it respectful; don’t post
        personal details.
      </p>
    </div>
  );
}
