import { Church, Clock, Utensils, Shirt, Award } from "lucide-react"
import config from "@/config"
import SectionHeading from "@/components/SectionHeading"
import Reveal from "@/components/Reveal"

/**
 * SECTION · Wedding Details & Clergy
 * Ceremony schedule, dinner reception, and honoring presiding officiants & reverends.
 */
export default function Details() {
  const d = config.details

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Wedding Program" title="Sacred Ceremony & Celebrations" />

      {/* Ceremony & Dinner cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Holy Matrimony */}
        <Reveal delay={0.05}>
          <div className="group photo-frame flex h-full flex-col justify-between rounded-2xl bg-ivory/85 p-7 text-center transition-transform duration-500 hover:-translate-y-1.5 shadow-sm">
            <div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream transition-transform duration-500 group-hover:scale-110">
                <Church className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <span className="eyebrow !text-[0.6rem] text-gold">Sacred Service</span>
              <h3 className="mt-1 font-serif text-2xl text-ink font-medium">{d.ceremony.title}</h3>
              <p className="mt-1 font-body text-sm font-medium text-ink/80">{d.ceremony.venue}</p>

              <div className="mx-auto my-3 flex items-center justify-center gap-2 text-gold">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold">{d.ceremony.time}</span>
              </div>
            </div>

            <div className="mt-4 border-t border-gold/20 pt-3">
              <p className="font-body text-xs italic text-ink/70">
                {d.ceremony.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Dinner Follows */}
        <Reveal delay={0.15}>
          <div className="group photo-frame flex h-full flex-col justify-between rounded-2xl bg-ivory/85 p-7 text-center transition-transform duration-500 hover:-translate-y-1.5 shadow-sm">
            <div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream transition-transform duration-500 group-hover:scale-110">
                <Utensils className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <span className="eyebrow !text-[0.6rem] text-gold">Celebration & Fellowship</span>
              <h3 className="mt-1 font-serif text-2xl text-ink font-medium">{d.reception.title}</h3>
              <p className="mt-1 font-body text-sm font-medium text-ink/80">{d.reception.venue}</p>

              <div className="mx-auto my-3 flex items-center justify-center gap-2 text-gold">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold">{d.reception.time}</span>
              </div>
            </div>

            <div className="mt-4 border-t border-gold/20 pt-3">
              <p className="font-serif text-sm italic text-ink/80 font-medium">
                “{d.blessingNote}”
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Officiants & Clergy Section */}
      <Reveal delay={0.25} className="mt-12">
        <div className="photo-frame overflow-hidden rounded-2xl bg-ivory/85 p-7 sm:p-9 shadow-sm">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/40 px-4 py-1.5 mb-3">
              <Award className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-gold">
                Officiants & Honored Ministers
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink">
              Officiated in Sacred Fellowship
            </h3>
            <p className="mx-auto mt-2 max-w-lg font-body text-xs text-ink/70">
              The holy marriage ceremony will be presided over by respected church leaders and clergy.
            </p>
          </div>

          <div className="gold-hairline mx-auto my-6 w-28" />

          {/* Presiding Pastor */}
          <div className="mb-6 rounded-xl border border-gold/25 bg-cream/35 p-5 text-center">
            <span className="font-body text-[0.6rem] uppercase tracking-[0.25em] text-gold font-bold">
              Presiding Minister
            </span>
            <p className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-ink">
              {d.officiants.presiding.name}
              {d.officiants.presiding.degrees && (
                <span className="ml-1 text-sm font-normal text-ink/75 sm:text-base">
                  , {d.officiants.presiding.degrees}
                </span>
              )}
            </p>
            <p className="font-body text-xs font-medium text-ink/75 mt-0.5">
              {d.officiants.presiding.church}
            </p>
          </div>

          {/* Reverends & Clergy Grid */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {d.officiants.clergy.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-gold/15 bg-ivory/60 p-4 transition-colors hover:border-gold/40"
              >
                <p className="font-serif text-lg font-medium text-ink">{c.name}</p>
                {c.role && (
                  <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    {c.role}
                  </p>
                )}
                <p className="mt-0.5 font-body text-xs text-ink/70 leading-relaxed">{c.church}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Dress Code */}
      <Reveal delay={0.3} className="mt-8">
        <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-gold/25 bg-ivory/75 px-6 py-3 shadow-sm">
          <Shirt className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
          <p className="text-center font-body text-xs uppercase tracking-[0.18em] text-ink/80 font-medium">
            {d.dressCode}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
