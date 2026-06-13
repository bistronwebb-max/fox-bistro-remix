import { Smile, ChefHat, Soup, Star } from "lucide-react";

export type StatItem = { value: string; label: string; icon: "smile" | "chef" | "soup" | "star" };

const iconMap = {
  smile: Smile,
  chef: ChefHat,
  soup: Soup,
  star: Star,
};

/**
 * Stat-rad i mörk svart sektion — speglar den scrapade originalvarianten:
 * tunn linje-ikon till vänster, stor röd siffra, vit etikett under.
 */
export function StatsRow({ items }: { items: StatItem[] }) {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <div key={s.label} className="flex items-center gap-5">
              <Icon className="h-16 w-16 shrink-0 text-white/25" strokeWidth={1} />
              <div>
                <p className="font-script text-5xl text-primary leading-none">{s.value}</p>
                <p className="mt-2 text-sm text-white/75">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
