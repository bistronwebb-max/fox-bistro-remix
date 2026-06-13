/**
 * Central plats-konfig — en enda fil att uppdatera när Roney bekräftar fakta.
 *
 * Flagga `confirmed: false` på allt vi gissat. När Roney svarar i mötet:
 *   1) ändra värdet
 *   2) sätt confirmed: true
 *   3) eventuell "unknown"-feature flippas av sig själv på sajten.
 */

import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export type LocationId = "vase" | "molkom";

export interface LocationConfig {
  id: LocationId;
  name: string;          // Det publika varumärkesnamnet
  shortName: string;     // Använd i nav
  city: string;
  since: number;
  address: string;
  mapsUrl: string;
  phone: { label: string; href: string };
  email: string;
  hours: string;
  homePath: "/" | "/molkoms-pizzeria";
  /** Mat-/sidofunktioner — sätt true först när Roney bekräftat. */
  features: {
    meny: boolean;          // Vi vet att båda har meny
    lunch: boolean;         // Väse: ja. Molkom: gissning – inväntar Roney.
    catering: boolean;      // Väse: ja. Molkom: okänt – döljs tills vidare.
    evenemang: boolean;     // Väse: ja. Molkom: okänt.
    bordsbokning: boolean;  // Båda: ja (telefon räcker).
  };
  /** Sätt false för fält vi gissat — så vi kan visa "uppdateras"-indikator om vi vill. */
  confirmed: {
    address: boolean;
    phone: boolean;
    hours: boolean;
    since: boolean;
  };
}

export const LOCATIONS: Record<LocationId, LocationConfig> = {
  vase: {
    id: "vase",
    name: "Rävens Bistro",
    shortName: "Väse",
    city: "Väse",
    since: 2018,
    address: "Storgatan 38, 660 57 Väse",
    mapsUrl: "https://maps.app.goo.gl/ZSQdoCZpMxv4BanG8",
    phone: { label: "054-18 18 20", href: "tel:+46541818200" },
    email: "Kontakt@ravensbistro.se",
    hours: "Mån–Tor 11–21 · Fre–Lör 11–22 · Sön 11–21",
    homePath: "/",
    features: {
      meny: true,
      lunch: true,
      catering: true,
      evenemang: true,
      bordsbokning: true,
    },
    confirmed: { address: true, phone: true, hours: true, since: true },
  },
  molkom: {
    id: "molkom",
    name: "Molkoms Pizzeria",
    shortName: "Molkom",
    city: "Molkom",
    since: 2016,
    address: "Mejerivägen 15, 655 60 Molkom",
    mapsUrl: "https://maps.app.goo.gl/T7Bmk9pQzR61Gr9z7",
    phone: { label: "0553-101 07", href: "tel:+46055310107" },
    email: "Kontakt@ravensbistro.se",
    hours: "Mån–Ons 12–22 · Tor–Lör 11–22 · Sön 11–22",
    homePath: "/molkoms-pizzeria",
    features: {
      meny: true,
      lunch: false,        // gissning — Roney bekräftar
      catering: false,     // okänt — döljs tills vidare
      evenemang: false,    // okänt — döljs tills vidare
      bordsbokning: true,
    },
    confirmed: { address: true, phone: true, hours: false, since: false },
  },
};

const STORAGE_KEY = "rb:location";

/** Räknar ut vilken ort användaren är "inne hos" just nu. */
export function useActiveLocation(): LocationConfig {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  let id: LocationId;
  if (pathname === "/" || pathname.startsWith("/molkoms-pizzeria") === false && pathname === "/") {
    id = "vase";
  } else if (pathname.startsWith("/molkoms-pizzeria")) {
    id = "molkom";
  } else {
    // Delade sidor (meny, om-oss, kontakta-oss, catering, faq…) — använd senast valda ort
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem(STORAGE_KEY) as LocationId | null;
      id = stored === "molkom" ? "molkom" : "vase";
    } else {
      id = "vase";
    }
  }

  // Persistera valet när vi är på en orts-startsida
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname === "/") window.sessionStorage.setItem(STORAGE_KEY, "vase");
    if (pathname.startsWith("/molkoms-pizzeria")) window.sessionStorage.setItem(STORAGE_KEY, "molkom");
  }, [pathname]);

  return LOCATIONS[id];
}

/** Den "andra" orten — för "besök även…"-länkar. */
export function otherLocation(id: LocationId): LocationConfig {
  return LOCATIONS[id === "vase" ? "molkom" : "vase"];
}
