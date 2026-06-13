import { Link } from "@tanstack/react-router";
import logo from "@/assets/scraped/logo.png";
import { Marquee } from "./Marquee";
import { RAVEN } from "@/lib/locations";

const defaultPhrases = [
  "Rävens Bistro · Väse",
  "Pizza · À la carte · Kebab · Catering",
  "Bra mat · Goda vibbar",
  "Sedan 2018",
];

export function Footer() {
  return (
    <footer className="mt-20 text-background">
      <Marquee phrases={defaultPhrases} />
      <div className="bg-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src={logo} alt={RAVEN.name} className="h-16 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-sm text-sm text-background/90">
              Värmlands mysiga bistro i Väse, strax utanför Karlstad. Pizza, à la carte,
              kebab, catering och evenemang sedan {RAVEN.since}.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">{RAVEN.name}</h3>
            <ul className="mt-3 space-y-2 text-sm text-background/90">
              <li>
                <a className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline" href={RAVEN.mapsUrl} target="_blank" rel="noreferrer">
                  {RAVEN.address}
                </a>
              </li>
              <li><a className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline" href={RAVEN.phone.href}>{RAVEN.phone.label}</a></li>
              <li><a className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline" href={`mailto:${RAVEN.email}`}>{RAVEN.email}</a></li>
              <li><a className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline" href={`mailto:${RAVEN.bookingEmail}`}>{RAVEN.bookingEmail}</a></li>
              <li className="pt-2 text-xs text-background/80">{RAVEN.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Snabblänkar</h3>
            <ul className="mt-3 space-y-2 text-sm text-background/90">
              <li><Link to="/meny" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Meny</Link></li>
              <li><Link to="/catering" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Catering</Link></li>
              <li><Link to="/galleri" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Galleri</Link></li>
              <li><Link to="/om-oss" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Om oss</Link></li>
              <li><Link to="/kontakta-oss" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Kontakt</Link></li>
              <li className="pt-2"><Link to="/faq" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">FAQ</Link></li>
              <li><Link to="/villkor" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Allmänna villkor</Link></li>
              <li><Link to="/integritetspolicy" className="hover:text-[var(--color-honey)] underline-offset-4 hover:underline">Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-background/85 flex flex-col sm:flex-row gap-2 sm:justify-between">
            <span>© {new Date().getFullYear()} {RAVEN.name} — Alla rättigheter förbehållna.</span>
            <span>Storgatan 38, 660 57 Väse · 054-18 18 20</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
