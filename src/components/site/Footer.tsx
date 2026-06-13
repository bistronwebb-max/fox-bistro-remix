import { Link } from "@tanstack/react-router";
import logo from "@/assets/scraped/logo.png";
import { Marquee } from "./Marquee";
import { useActiveLocation, otherLocation, LOCATIONS } from "@/lib/locations";

const defaultPhrases = [
  "Rävens Bistro i Väse · Molkoms Pizzeria i Molkom",
  "Samma kök · Två orter",
  "Pizza · À la carte · Kebab · Catering",
  "Bra mat · Goda vibbar",
];

export function Footer() {
  const loc = useActiveLocation();
  const other = otherLocation(loc.id);

  return (
    <footer className="mt-20 text-background">
      <Marquee phrases={defaultPhrases} />
      <div className="bg-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logo} alt="Rävens Bistro & Molkoms Pizzeria" className="h-16 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-sm text-sm opacity-80">
              En familj, samma kök — två orter i Värmland. Molkoms Pizzeria sedan 2016 och
              Rävens Bistro i Väse sedan 2018. Bra mat och goda vibbar, oavsett vilken dörr du går in genom.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to={loc.homePath} className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary">
                Du är hos {loc.name}
              </Link>
              <Link to={other.homePath} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary">
                Besök {other.name} →
              </Link>
            </div>
          </div>

          {/* Båda orterna visas alltid i footern — det är platsen där cross-länkningen lever */}
          {(Object.values(LOCATIONS)).map((l) => (
            <div key={l.id}>
              <h3 className="text-base font-semibold">{l.name}</h3>
              <ul className="mt-3 space-y-1 text-sm opacity-80">
                <li>
                  <a className="hover:text-primary" href={l.mapsUrl} target="_blank" rel="noreferrer">
                    {l.address}
                  </a>
                </li>
                <li><a className="hover:text-primary" href={l.phone.href}>{l.phone.label}</a></li>
                <li><a className="hover:text-primary" href={`mailto:${l.email}`}>{l.email}</a></li>
                <li className="pt-2 text-xs opacity-70">{l.hours}{!l.confirmed.hours && " (bekräftas)"}</li>
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-semibold">Snabblänkar</h3>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              <li><Link to="/meny" className="hover:text-primary">Meny</Link></li>
              {loc.features.catering && (
                <li><Link to="/catering" className="hover:text-primary">Catering</Link></li>
              )}
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
            <span>© {new Date().getFullYear()} Rävens Bistro & Molkoms Pizzeria — Alla rättigheter förbehållna.</span>
            <span>Uppgifter bekräftas löpande med Roney.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
