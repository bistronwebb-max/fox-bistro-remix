import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  title: string;
  intro?: string;
  markdown: string;
}

/**
 * Renderar scrapad markdown med Rävens Bistro-ramen.
 * Speglar alltid båda systerrestaurangerna: Väse Bistro (2018) och Molkoms Pizzeria (2016).
 * Det som heter "Väse special" i Väse heter "Molkoms special" i Molkom — annars samma utbud.
 */
export function MarkdownPage({ title, intro, markdown }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
            <p className="font-script text-3xl text-primary">Rävens Bistro & Molkoms Pizzeria</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">{title}</h1>
            {intro && <p className="mt-4 max-w-2xl text-base opacity-80">{intro}</p>}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/20 px-3 py-1 opacity-80">Väse sedan 2018</span>
              <span className="rounded-full border border-white/20 px-3 py-1 opacity-80">Molkom sedan 2016</span>
              <span className="rounded-full border border-white/20 px-3 py-1 opacity-80">Samma meny · speglade specialer</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10 prose-bistro">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>

        {/* Dubbel-info: samma meny, två orter — ingen ska gå vilse */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-12 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-script text-2xl text-primary">Väse Bistro</p>
              <h3 className="mt-1 text-xl font-bold">Storgatan 38, 660 57 Väse</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mån–Tor 11–21 · Fre–Lör 11–22 · Sön 11–21</p>
              <p className="mt-3 text-sm">
                Här hittar du <strong>Väse special</strong> på menyn. Vid evenemang öppet till 01.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a href="tel:+46541818200" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">054-18 18 20</a>
                <Link to="/" className="rounded-full border border-input px-4 py-2 font-semibold hover:bg-secondary">Till Väse →</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-script text-2xl text-primary">Molkoms Pizzeria</p>
              <h3 className="mt-1 text-xl font-bold">Mejerivägen 15, 655 60 Molkom</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mån–Ons 12–22 · Tor–Lör 11–22 · Sön 11–22</p>
              <p className="mt-3 text-sm">
                Här hittar du <strong>Molkoms special</strong> — speglar Väses special men med ortens favoriter.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a href="tel:+46055310107" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">0553-101 07</a>
                <Link to="/molkoms-pizzeria" className="rounded-full border border-input px-4 py-2 font-semibold hover:bg-secondary">Till Molkom →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
