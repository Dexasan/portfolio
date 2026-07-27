export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <p className="text-muted font-mono text-sm">{slug} — coming soon</p>
    </div>
  );
}
