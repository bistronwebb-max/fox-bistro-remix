import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/site/MarkdownPage";
import scraped from "@/data/scraped.json";

export const Route = createFileRoute("/meny")({
  head: () => ({
    meta: [
      { title: "Meny — Rävens Bistro" },
      { name: "description", content: "Hela menyn hos Rävens Bistro i Väse: inbakade pizzor, klassiska pizzor, kebab, pita, husmanskost, sallader, à la carte, hamburgare, barnmeny, desserter och drycker." },
      { property: "og:title", content: "Meny — Rävens Bistro" },
      { property: "og:description", content: "Pizza, à la carte, kebab, husman och mycket mer." },
      { property: "og:url", content: "/meny" },
    ],
    links: [{ rel: "canonical", href: "/meny" }],
  }),
  component: () => (
    <MarkdownPage
      title="Vår meny"
      intro="Allt vi serverar i bistron — från inbakade pizzor och kebab till husmanskost, sallader och desserter. Tveka inte att fråga personalen om allergier eller önskemål."
      markdown={scraped.meny}
    />
  ),
});
