import Link from "next/link";

export const metadata = {
  title: "Timeline Conflicts in the Epstein Death Record | Epstein Investigation",
  description:
    "Reconstructing the final known movements and the overnight observation gap preceding Jeffrey Epstein's death on August 10, 2019.",
};

const EMS_TIMELINE = [
  { time: "06:35", event: "CPR in progress" },
  { time: "06:39", event: "cardiac monitor attached" },
  { time: "06:47", event: "oxygen administered" },
  { time: "06:48", event: "IV access established" },
  { time: "06:56", event: "EMS arrives" },
  { time: "07:08", event: "endotracheal intubation performed" },
  { time: "07:10–07:16", event: "multiple doses of epinephrine administered" },
];

const KEY_CONFLICTS = [
  {
    title: "Unknown Time of Death",
    description:
      "The exact time of death could not be determined. Without surveillance footage or confirmed observation rounds, the window during which Epstein died remains unresolved.",
  },
  {
    title: "Lack of Observation Confirmation",
    description:
      "Required 30-minute rounds were not conducted through the night. No staff member can independently confirm Epstein's condition between approximately 10:30 PM and 6:30 AM.",
  },
  {
    title: "Cellmate Timing Questions",
    description:
      "The timing of when Epstein's cellmate Reyes was moved, and whether Epstein was left alone in violation of protocol, is disputed or poorly documented.",
  },
  {
    title: "Discovery Sequence Uncertainty",
    description:
      "Conflicting accounts exist regarding who discovered Epstein, in what order staff responded, and the exact sequence of events from discovery through the start of CPR.",
  },
  {
    title: "Scene Documentation After Disturbance",
    description:
      "The scene was altered by life-saving efforts before full documentation. Questions remain about the condition of the cell and ligature evidence when first observed.",
  },
];

function Personnel({ name, children }: { name: string; children?: React.ReactNode }) {
  return (
    <span className="font-medium text-zinc-300">
      {name}
      {children}
    </span>
  );
}

export default function TimelineConflictsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:gap-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <Link href="/" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Home
            </Link>
            <Link href="/anomalies" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Anomalies
            </Link>
            <Link href="/#what-we-know" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              What We Know
            </Link>
            <Link href="/#timeline" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Timeline
            </Link>
            <Link href="/#archive" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Archive
            </Link>
            <Link href="/#email-signup" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Updates
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-black">
        <section className="border-b border-white/[0.08] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
              Timeline Conflicts in the Epstein Death Record
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-relaxed text-zinc-400">
              Reconstructing the final known movements and the overnight observation gap preceding Jeffrey
              Epstein&apos;s death on August 10, 2019.
            </p>
          </div>
        </section>

        <div className="border-t border-white/[0.08]" aria-hidden />
        <div className="py-12" aria-hidden />

        <section className="px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="space-y-10">
              <section id="aug-9-evening">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  August 9 Evening Timeline
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Documented activity on the evening of August 9, 2019, establishes the last confirmed movements and
                    checks before the overnight period. Staff including <Personnel name="Tova Noel" /> and{" "}
                    <Personnel name="Michael Thomas" /> were assigned to the Special Housing Unit. The sequence of
                    rounds, log entries, and any interaction with Epstein or his cellmate{" "}
                    <Personnel name="Reyes (cellmate)" /> during this window is central to reconstructing what occurred
                    before discovery the following morning.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="overnight-gaps">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Overnight Observation Gaps
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    SHU policy required 30-minute observation rounds. Investigative findings indicate that required
                    rounds were not conducted through the night of August 9–10. Logs were falsified to show checks that
                    did not occur, creating a gap during which no staff member can confirm Epstein&apos;s condition or
                    the activity on the tier.
                  </p>
                </div>

                <div
                  className="mt-6 rounded-md border border-amber-500/30 bg-amber-500/5 px-5 py-4"
                  aria-label="Observation Gap callout"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">
                    Observation Gap
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    Required 30‑minute observation rounds were not conducted between approximately:
                  </p>
                  <p className="mt-2 font-mono text-base font-medium text-white">
                    10:30 PM – 6:30 AM
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    This created an 8‑hour window during which no staff member can confirm Epstein&apos;s condition.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="discovery-response">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Discovery and Response Timeline
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Epstein was discovered unresponsive in his cell on the morning of August 10. The exact time of
                    discovery and the order in which staff responded—including who first entered the cell and who
                    initiated CPR—have been the subject of conflicting accounts. Without surveillance footage, the
                    discovery and response sequence relies on incident reports and staff interviews.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="medical-condition">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Medical Condition at Discovery
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    When Epstein was found, he was unresponsive. Staff initiated CPR. The reported condition of the body,
                    the presence of ligature material, and the state of the cell at discovery are documented in
                    incident and medical records, but full scene documentation was limited by the urgency of
                    life-saving efforts.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="ems-arrival">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  EMS Arrival
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Emergency medical personnel were called. The following timeline is derived from EMS and medical
                    records and reflects key interventions from the time CPR was in progress through intubation and
                    medication administration.
                  </p>
                  <div className="mt-6 overflow-hidden rounded-md border border-white/[0.08]">
                    <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.08] bg-white/[0.04]">
                          <th className="px-4 py-3 font-semibold uppercase tracking-wider text-zinc-400">
                            Time
                          </th>
                          <th className="px-4 py-3 font-semibold uppercase tracking-wider text-zinc-400">
                            Event
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-zinc-300">
                        {EMS_TIMELINE.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/[0.06] last:border-b-0"
                          >
                            <td className="font-mono px-4 py-3 text-zinc-200">{row.time}</td>
                            <td className="px-4 py-3">{row.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="transport">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Transport to Hospital
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Epstein was transported to a hospital where he was pronounced dead. The timing of transport and
                    pronouncement of death are recorded in medical and custodial records. The gap between discovery,
                    ongoing resuscitation efforts, and official time of death contributes to the difficulty of
                    establishing a precise timeline.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="key-conflicts">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Key Timeline Conflicts
                </h2>
                <div className="mt-6 space-y-4">
                  {KEY_CONFLICTS.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-white/[0.08] bg-dark-surface/80 p-5"
                    >
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex flex-col items-center py-6">
                <div className="h-px w-full max-w-xl border-t border-white/[0.08]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  FINDINGS
                </p>
              </div>

              <section id="conclusion">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Conclusion
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    The timeline of events surrounding Epstein&apos;s death is marked by gaps in observation,
                    conflicting accounts of the discovery and response sequence, and the absence of surveillance
                    footage that could have independently verified the order of events. The overnight observation gap,
                    falsified logs, and unresolved questions about the exact time of death and the condition of the
                    scene at discovery leave significant uncertainty in the record.
                  </p>
                  <p className="leading-relaxed">
                    Together, these conflicts limit the ability to reconstruct the final hours with confidence and
                    underscore the importance of preserved evidence and accurate documentation in custodial death
                    investigations.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>

        <footer className="border-t border-white/[0.08] px-4 py-8 text-center text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-400">
            Back to home
          </Link>
          <span className="mx-2 text-zinc-600">|</span>
          <Link href="/anomalies" className="hover:text-zinc-400">
            Anomalies Archive
          </Link>
        </footer>
      </main>
    </>
  );
}
