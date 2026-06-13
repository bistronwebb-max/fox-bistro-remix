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
            <p className="mt-4 max-w-sm text-sm opacity-80">
              Värmlands mysiga bistro i Väse, strax utanför Karlstad. Pizza, à la carte,
              kebab, catering och evenemang sedan {RAVEN.since}.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">{RAVEN.name}</h3>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              <li>
                <a className="hover:text-primary" href={RAVEN.mapsUrl} target="_blank" rel="noreferrer">
                  {RAVEN.address}
                </a>
              </li>
              <li><a className="hover:text-primary" href={RAVEN.phone.href}>{RAVEN.phone.label}</a></li>
              <li><a className="hover:text-primary" href={`mailto:${RAVEN.email}`}>{RAVEN.email}</a></li>
              <li><a className="hover:text-primary" href={`mailto:${RAVEN.bookingEmail}`}>{RAVEN.bookingEmail}</a></li>
              <li className="pt-2 text-xs opacity-70">{RAVEN.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Snabblänkar</h3>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              <li><Link to="/meny" className="hover:text-primary">Meny</Link></li>
              <li><Link to="/catering" className="hover:text-primary">Catering</Link></li>
              <li><Link to="/om-oss" className="hover:text-primary">Om oss</Link></li>
              <li><Link to="/kontakta-oss" className="hover:text-primary">Kontakt</Link></li>
              <li className="pt-2"><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="/villkor" className="hover:text-primary">Allmänna villkor</Link></li>
              <li><Link to="/integritetspolicy" className="hover:text-primary">Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-70 flex flex-col sm:flex-row gap-2 sm:justify-between">
            <span>© {new Date().getFullYear()} {RAVEN.name} — Alla rättigheter förbehållna.</span>
            <span>Storgatan 38, 660 57 Väse · 054-18 18 20</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
