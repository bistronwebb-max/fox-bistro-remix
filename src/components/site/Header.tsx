import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/scraped/logo.png";
import { Menu, X } from "lucide-react";
import { useActiveLocation, otherLocation } from "@/lib/locations";

export function Header() {
  const [open, setOpen] = useState(false);
  const loc = useActiveLocation();
  const other = otherLocation(loc.id);

  // Bygg nav dynamiskt utifrån aktiv ort + dess feature-flaggor.
  // Allt vi inte vet om Molkom (catering, evenemang) visas inte förrän Roney bekräftat.
  const navItems: { to: string; label: string }[] = [
    { to: loc.homePath, label: loc.name },
    { to: "/meny", label: "Meny" },
  ];
  if (loc.features.catering) navItems.push({ to: "/catering", label: "Catering" });
  navItems.push({ to: "/om-oss", label: "Om oss" });
  navItems.push({ to: "/kontakta-oss", label: "Kontakt" });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to={loc.homePath} className="flex items-center gap-2">
          <img src={logo} alt={loc.name} className="h-12 w-auto" />
          <span className="sr-only">{loc.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((n) => (
            <Link
              key={n.to + n.label}
              to={n.to}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to={other.homePath}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
            title={`Byt till ${other.name}`}
          >
            ↔ {other.shortName}
          </Link>
          <a
            href={loc.phone.href}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            {loc.phone.label}
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
                key={n.to + n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to={other.homePath}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
            >
              ↔ Byt till {other.name}
            </Link>
            <a
              href={loc.phone.href}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Ring {loc.phone.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
