import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/site/MarkdownPage";
import scraped from "@/data/scraped.json";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering i Karlstad & Värmland — Rävens Bistro" },
      { name: "description", content: "Rävens Bistro erbjuder skräddarsydd catering i Karlstad och hela Värmland. Smörgåstårta, buffé, kallskuret, varmrätter och desserter." },
      { property: "og:title", content: "Catering — Rävens Bistro" },
      { property: "og:description", content: "Vi serverar i hela Värmland — buffé, smörgåstårta, kallskuret och mer." },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: () => (
    <MarkdownPage
      title="Catering"
      intro="Vi utgår från Väse strax utanför Karlstad och serverar i hela Värmland. Välj mellan varm och kall buffé, förrätter, kött, vegetariskt, fisk och desserter."
      markdown={scraped.catering}
    />
  ),
});
