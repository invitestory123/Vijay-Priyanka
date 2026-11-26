import config from "@/config"
import SectionHeading from "@/components/SectionHeading"
import Reveal from "@/components/Reveal"
import { Heart, Sparkles, BookOpen } from "lucide-react"

/**
 * SECTION · Family & Wedding Invitations
 * Distinct cards for Miriyala Family & Yarajarla Family, each featuring
 * their authentic family stage photograph, scripture, parents & inviters.
 */
export default function Family() {
  const { groom, bride } = config.families

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="With Love & Blessings"
        title="Our Families Invite You"
      />

      {/* Dual Invitation Cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Groom's Family Card · Miriyala Family */}
        <Reveal delay={0.1}>
          <div className="photo-frame flex h-full flex-col justify-between rounded-2xl bg-ivory/85 p-6 sm:p-8 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <div>
              {/* Groom's Family Stage Photo */}
              <div className="overflow-hidden rounded-xl mb-5 photo-frame !p-1.5 shadow-sm bg-ivory">
                <img
                  src={groom.photo}
                  alt="Miriyala Family Stage Photo"
                  className="aspect-[16/10] w-full object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <p className="py-1 text-center font-body text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Vijay with Beloved Parents
                </p>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-gold mb-2">
                <BookOpen className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-body text-[0.62rem] uppercase tracking-[0.25em] font-semibold text-gold">
                  Holy Scripture
                </span>
              </div>
              <p className="text-center font-serif text-base italic text-ink/85 sm:text-lg">
                {groom.scripture?.verse}
              </p>
              <p className="text-center font-body text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase mt-0.5">
                {groom.scripture?.ref}
              </p>

              <div className="gold-hairline mx-auto my-5 w-24" />

              <div className="text-center">
                <span className="eyebrow !text-[0.62rem] text-gold">{groom.label}</span>
                <h3 className="mt-1 font-script text-3xl sm:text-4xl text-ink">
                  {groom.title}
                </h3>
              </div>

              <div className="mt-5 space-y-3.5 text-center font-body text-sm text-ink/80 leading-relaxed">
                <div className="rounded-xl border border-gold/20 bg-cream/30 p-3.5">
                  <p className="font-serif text-base font-medium text-ink">
                    Mr. Tirrey Bhaskara Rao <span className="text-xs font-normal italic text-muted-foreground">(late)</span>, Retd. Audit Officer
                  </p>
                  <p className="font-serif text-base font-medium text-ink">
                    Mrs. Santha Kumari, Retd. H.M.
                  </p>
                  <p className="mt-1 font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold font-medium">
                    Paternal Grandparents
                  </p>
                </div>

                <p className="font-body text-xs text-ink/75 px-2">
                  Request the Honour of your presence at the wedding celebrations of our Grandson
                </p>

                <div className="py-1">
                  <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    Vijay
                  </p>
                  <p className="font-body text-xs text-ink/70">
                    Son of <strong className="font-medium text-ink">Mr. M.V. Prasad</strong> & <strong className="font-medium text-ink">Mrs. Bhagya Lakshmi</strong>
                  </p>
                </div>

                <p className="font-script text-2xl text-gold">With</p>

                <div className="py-1">
                  <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    Priyanka
                  </p>
                  <p className="font-body text-xs text-ink/70">
                    D/o <strong className="font-medium text-ink">Mr. Yarajarla Babu Rao</strong> & <strong className="font-medium text-ink">Mrs. Santhi</strong>, Rajahmundry
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gold/25 pt-4 text-center">
              <span className="font-body text-[0.65rem] uppercase tracking-[0.24em] text-gold font-medium block mb-2">
                Lovingly Invited By
              </span>
              <ul className="space-y-1">
                {groom.invitedBy.map((inviter, idx) => (
                  <li key={idx} className="font-serif text-base text-ink/90">
                    {inviter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Bride's Family Card · Yarajarla Family */}
        <Reveal delay={0.2}>
          <div className="photo-frame flex h-full flex-col justify-between rounded-2xl bg-ivory/85 p-6 sm:p-8 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <div>
              {/* Bride's Family Stage Photo */}
              <div className="overflow-hidden rounded-xl mb-5 photo-frame !p-1.5 shadow-sm bg-ivory">
                <img
                  src={bride.photo}
                  alt="Yarajarla Family Stage Photo"
                  className="aspect-[16/10] w-full object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <p className="py-1 text-center font-body text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Priyanka with Beloved Parents
                </p>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-gold mb-2">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-body text-[0.62rem] uppercase tracking-[0.25em] font-semibold text-gold">
                  In Jesus&apos; Name
                </span>
              </div>
              <p className="text-center font-serif text-sm font-medium text-ink/80 sm:text-base">
                {bride.greeting}
              </p>
              <p className="text-center font-serif text-base italic text-ink/85 mt-2 sm:text-lg">
                {bride.scripture?.verse}
              </p>
              <p className="text-center font-body text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase mt-0.5">
                {bride.scripture?.ref}
              </p>

              <div className="gold-hairline mx-auto my-5 w-24" />

              <div className="text-center">
                <span className="eyebrow !text-[0.62rem] text-gold">{bride.label}</span>
                <h3 className="mt-1 font-script text-3xl sm:text-4xl text-ink">
                  {bride.title}
                </h3>
              </div>

              <div className="mt-5 space-y-3.5 text-center font-body text-sm text-ink/80 leading-relaxed">
                <div className="rounded-xl border border-gold/20 bg-cream/30 p-3.5">
                  <p className="font-serif text-lg font-medium text-ink">
                    Mr. Y. Babu Rao & Mrs. Y. Santhi
                  </p>
                  <p className="mt-1 font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold font-medium">
                    Parents of the Bride · Rajahmundry
                  </p>
                </div>

                <p className="font-body text-xs text-ink/75 px-2">
                  Request the Honour of your presence at the wedding celebrations of our Daughter
                </p>

                <div className="py-1">
                  <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    Priyanka
                  </p>
                </div>

                <p className="font-script text-2xl text-gold">With</p>

                <div className="py-1">
                  <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    Vijay
                  </p>
                  <p className="font-body text-xs text-ink/70">
                    S/O <strong className="font-medium text-ink">Mr. Miriyala Vara Prasad</strong> & <strong className="font-medium text-ink">Smt. Bhagya Lakshmi</strong>
                  </p>
                </div>

                <p className="font-serif text-sm italic text-ink/75 pt-1">
                  “As they begin their beautiful journey of love, faith and togetherness”
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-gold/25 pt-4 text-center">
              <span className="font-body text-[0.65rem] uppercase tracking-[0.24em] text-gold font-medium block mb-2">
                Lovingly Invited By
              </span>
              <ul className="space-y-1">
                {bride.invitedBy.map((inviter, idx) => (
                  <li key={idx} className="font-serif text-base text-ink/90">
                    {inviter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Near and Dear Banner */}
      <Reveal delay={0.3} className="mt-10">
        <div className="mx-auto max-w-xl rounded-full border border-gold/30 bg-ivory/80 px-6 py-3.5 text-center shadow-sm">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-ink/80 flex items-center justify-center gap-2">
            <Heart className="h-3.5 w-3.5 text-gold fill-gold/50" />
            With love and warm regards from Near and Dear
            <Heart className="h-3.5 w-3.5 text-gold fill-gold/50" />
          </p>
        </div>
      </Reveal>
    </section>
  )
}
