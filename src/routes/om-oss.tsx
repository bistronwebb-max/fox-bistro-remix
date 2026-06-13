import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/site/MarkdownPage";
import scraped from "@/data/scraped.json";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Rävens Bistro" },
      { name: "description", content: "Rävens Bistro grundades 2018 av Roney Saad i Väse strax utanför Karlstad. Lokal mötesplats för matälskare, evenemang och festligheter." },
      { property: "og:title", content: "Om oss — Rävens Bistro" },
      { property: "og:description", content: "Tradition och kvalitet i Karlstad sedan 2018." },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: () => (
    <MarkdownPage
      title="Om oss"
      intro="Roney Saad driver Rävens Bistro i Väse (sedan 2018) och Molkoms Pizzeria i Molkom (sedan 2016) — samma familj, samma kök, två orter i Värmland."
      markdown={scraped["om-oss"]}
    />
  ),
});
