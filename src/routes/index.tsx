import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simulasi TKA SD" },
      { name: "description", content: "Simulasi Tes Kemampuan Akademik SD online: bank soal, ujian siswa, dan pemantauan nilai oleh guru." },
      { property: "og:title", content: "Simulasi TKA SD" },
      { property: "og:description", content: "Latihan ujian TKA SD online dengan pemantauan hasil siswa oleh guru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/simulasi.html"
      title="Simulasi TKA SD"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
