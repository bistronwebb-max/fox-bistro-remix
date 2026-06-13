import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/scraped/logo.png";
import { Menu, X } from "lucide-react";
import { RAVEN } from "@/lib/locations";

const navItems = [
  { to: "/", label: "Hem" },
  { to: "/meny", label: "Meny" },
  { to: "/catering", label: "Catering" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakta-oss", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt={RAVEN.name} className="h-11 w-auto" />
          <span className="sr-only">{RAVEN.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.8rem] uppercase tracking-[0.18em] font-medium text-foreground/75 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={RAVEN.phone.href}
            className="rounded-full bg-foreground px-5 py-2.5 text-[0.75rem] tracking-[0.12em] font-medium text-background hover:bg-primary transition-colors"
          >
            {RAVEN.phone.label}
          </a>
        </nav>
        <button
          aria-label="Öppna meny"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={RAVEN.phone.href}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Ring {RAVEN.phone.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
