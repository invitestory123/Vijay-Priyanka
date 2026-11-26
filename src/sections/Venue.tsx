import { MapPin, Navigation } from "lucide-react"
import config from "@/config"
import SectionHeading from "@/components/SectionHeading"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import Magnetic from "@/components/Magnetic"

/**
 * SECTION · Venue — embedded map, venue details, and direct Google Maps link.
 */
export default function Venue() {
  const v = config.venue
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(v.mapQuery)}&output=embed`
  const openUrl = v.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Celebration Location" title="Find Your Way to Us" />

      {/* animated route line */}
      <Reveal className="mx-auto mb-8 max-w-sm">
        <svg viewBox="0 0 320 44" className="w-full" aria-hidden>
          <path
            d="M10,30 C80,6 240,6 310,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="route-line text-gold"
          />
          <circle cx="10" cy="30" r="4" fill="currentColor" className="text-gold/70" />
          <g transform="translate(302,20)">
            <path
              d="M8,0 C12.4,0 16,3.6 16,8 C16,14 8,22 8,22 C8,22 0,14 0,8 C0,3.6 3.6,0 8,0 Z"
              fill="currentColor"
              className="text-gold"
            />
            <circle cx="8" cy="8" r="3" fill="#fffdf8" />
          </g>
        </svg>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="photo-frame overflow-hidden rounded-2xl bg-ivory/85 shadow-md">
          <div className="relative">
            <iframe
              title={`Map to ${v.name}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 sm:h-80"
            />
            <div className="pointer-events-none absolute inset-0 rounded-t-lg shadow-[inset_0_0_40px_rgba(70,57,44,0.12)]" />
          </div>

          <div className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left sm:p-7">
            <div>
              <span className="eyebrow !text-[0.6rem] text-gold">Wedding Hall</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold">{v.name}</h3>
              <p className="mt-1 flex items-center justify-center gap-1.5 font-body text-sm font-normal text-ink/75 sm:justify-start">
                <MapPin className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
                {v.address}
              </p>
            </div>
            <Magnetic>
              <Button
                asChild
                className="rounded-full bg-gold px-7 py-5 font-body text-xs uppercase tracking-[0.2em] text-ivory shadow-md transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                <a href={openUrl} target="_blank" rel="noreferrer">
                  <Navigation className="mr-2 h-4 w-4" />
                  Open in Maps
                </a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
