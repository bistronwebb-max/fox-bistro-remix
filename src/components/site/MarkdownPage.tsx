import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RAVEN } from "@/lib/locations";

interface Props {
  title: string;
  intro?: string;
  markdown: string;
}

/** Standardram för innehållssidor som renderar scrapad markdown. */
export function MarkdownPage({ title, intro, markdown }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
            <p className="font-script text-3xl text-primary">{RAVEN.name}</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">{title}</h1>
            {intro && <p className="mt-4 max-w-2xl text-base opacity-80">{intro}</p>}
            <p className="mt-6 text-xs uppercase tracking-[0.18em] opacity-70">
              {RAVEN.address} · Sedan {RAVEN.since}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10 prose-bistro">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
