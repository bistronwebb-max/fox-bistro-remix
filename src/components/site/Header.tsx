import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/scraped/logo.png";
import { Menu, X } from "lucide-react";
import { RAVEN } from "@/lib/locations";

const navItems = [
  { to: "/", label: "Hem" },
  { to: "/meny", label: "Meny" },
  { to: "/catering", label: "Catering" },
  { to: "/galleri", label: "Galleri" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakta-oss", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" aria-label={`${RAVEN.name} — hem`} className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-xl bg-foreground p-2">
            <img src={logo} alt="" className="h-9 w-auto" />
          </span>
          <span className="sr-only">{RAVEN.name}</span>
        </Link>
        <nav aria-label="Primär navigation" className="hidden lg:flex items-center gap-9">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.85rem] uppercase tracking-[0.18em] font-semibold text-foreground hover:text-primary transition-colors min-h-11 inline-flex items-center"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={RAVEN.phone.href}
            aria-label={`Ring ${RAVEN.name} — ${RAVEN.phone.label}`}
            className="rounded-full bg-foreground px-5 py-3 text-[0.85rem] tracking-[0.08em] font-semibold text-background hover:bg-primary transition-colors min-h-11 inline-flex items-center"
          >
            {RAVEN.phone.label}
          </a>
        </nav>
        <button
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="lg:hidden p-3 text-foreground min-h-11 min-w-11"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobilmeny" className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary min-h-11 inline-flex items-center"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={RAVEN.phone.href}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground min-h-11"
            >
              Ring {RAVEN.phone.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
