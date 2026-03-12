import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <span className="text-xs font-bold tracking-widest text-zinc-500">
            jeffrey-didnt-kill-himself.com
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <Link href="#what-we-know" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              What We Know
            </Link>
            <Link href="#timeline" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Timeline
            </Link>
            <Link href="#archive" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Archive
            </Link>
            <Link href="#email-signup" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Updates
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative border-b border-dark-border bg-black px-4 py-28 sm:px-6 md:py-40"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Jeffrey Epstein&apos;s Death
            </h1>
            <p className="mt-6 text-xl font-normal tracking-tight text-zinc-400 sm:text-2xl md:text-3xl">
              An Independent Public Archive of Evidence
            </p>
            <div className="mt-12">
              <Link
                href="#about"
                className="inline-block rounded-md bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore the Archive
              </Link>
            </div>
          </div>
        </section>

        {/* About This Archive — editorial introduction */}
        <section
          id="about"
          className="border-b border-dark-border bg-black px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px]">
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
              About This Archive
            </p>
            <div className="space-y-6 text-center text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-loose">
              <p>
                On August 10, 2019, Jeffrey Epstein died while in federal custody at the Metropolitan Correctional Center in New York. His death was quickly ruled a suicide.
              </p>
              <p>
                Yet many of the underlying facts surrounding that night remain unclear, inconsistent, or poorly explained in official reporting.
              </p>
              <p>
                Important documents, witness interviews, timelines, and institutional records exist across thousands of pages of government files, court records, and investigative materials. Much of this information has never been widely reported or compiled in a single place.
              </p>
              <p>
                This site was created to change that.
              </p>
              <p>
                Our goal is to assemble the most complete public archive of primary material related to Epstein&apos;s death — including official reports, investigative records, forensic findings, and documented inconsistencies — so that journalists, researchers, policymakers, and the public can examine the evidence directly.
              </p>
              <p className="font-medium text-zinc-200">
                This is not speculation.
              </p>
              <p className="font-medium text-zinc-200">
                It is a documented record.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Archive Exists */}
        <section
          id="why-archive"
          className="border-b border-dark-border border-t border-dark-border/80 bg-dark-featured px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px]">
            <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
              Why This Archive Exists
            </h2>
            <div className="space-y-6 text-center text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-loose">
              <p>
                Deaths in federal custody demand transparency and scrutiny.
              </p>
              <p>
                The public record surrounding Jeffrey Epstein&apos;s death remains fragmented and difficult to navigate.
              </p>
              <p>
                By compiling these materials in one place, this archive allows the evidence to be examined openly and independently.
              </p>
              <p>
                Readers are encouraged to review the documents and draw their own conclusions.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Source Archive */}
        <section
          id="primary-source"
          className="border-b border-dark-border bg-dark-surface px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px]">
            <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
              Primary Source Archive
            </h2>
            <p className="mx-auto mb-12 text-center text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-loose">
              This archive brings together primary source material related to Jeffrey Epstein&apos;s detention and death, including official government reports, investigative records, forensic findings, court filings, and documented timelines. The goal is to make these materials accessible in one place so they can be reviewed directly rather than interpreted through secondary reporting.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="group rounded-lg border border-dark-border bg-black/50 p-5 transition hover:border-zinc-600 hover:bg-black/70">
                <h3 className="text-base font-semibold text-white">Official Reports</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  DOJ, BOP, and OIG reports on Epstein&apos;s detention, death, and related investigations.
                </p>
              </article>
              <article className="group rounded-lg border border-dark-border bg-black/50 p-5 transition hover:border-zinc-600 hover:bg-black/70">
                <h3 className="text-base font-semibold text-white">Government Investigations</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Congressional and agency findings, witness statements, and institutional records.
                </p>
              </article>
              <article className="group rounded-lg border border-dark-border bg-black/50 p-5 transition hover:border-zinc-600 hover:bg-black/70">
                <h3 className="text-base font-semibold text-white">Timeline of Events</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Chronological documentation of the night of August 9–10 and related events.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Analysis */}
        <section
          id="featured"
          className="border-b border-dark-border bg-dark-featured px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px]">
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Featured Analysis
            </h2>
            <article className="rounded border border-dark-border bg-dark-surface/80 p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                What We Actually Know About Epstein&apos;s Final Hours
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:leading-loose">
                Official reports describe a sequence of unusual failures on the night of Epstein&apos;s death—from missing camera footage to falsified guard logs. We reviewed the publicly available records to understand what happened and what questions remain unanswered.
              </p>
              <Link
                href="#what-we-know"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-300 transition hover:text-white"
              >
                Read the Analysis →
              </Link>
            </article>
          </div>
        </section>

        {/* What We Know */}
        <section
          id="what-we-know"
          className="border-b border-dark-border bg-dark-surface px-4 py-28 sm:px-6 md:py-36"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              What We Know
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg">
              Established facts that raise serious questions about the official narrative.
            </p>
            <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-lg border border-dark-border bg-black p-6">
                <h3 className="text-lg font-semibold text-white">
                  Guards falsified records
                </h3>
                <p className="mt-2 text-zinc-400">
                  MCC staff failed to perform required checks and falsified log entries the night of Epstein&apos;s death.
                </p>
              </article>
              <article className="rounded-lg border border-dark-border bg-black p-6">
                <h3 className="text-lg font-semibold text-white">
                  Surveillance cameras malfunctioned
                </h3>
                <p className="mt-2 text-zinc-400">
                  Critical footage from the unit where Epstein was held was reportedly not captured due to camera malfunction.
                </p>
              </article>
              <article className="rounded-lg border border-dark-border bg-black p-6">
                <h3 className="text-lg font-semibold text-white">
                  Cellmate removed before the incident
                </h3>
                <p className="mt-2 text-zinc-400">
                  Epstein was left alone in his cell after his cellmate was transferred, contrary to protocol for high-profile inmates.
                </p>
              </article>
              <article className="rounded-lg border border-dark-border bg-black p-6">
                <h3 className="text-lg font-semibold text-white">
                  No accountability to date
                </h3>
                <p className="mt-2 text-zinc-400">
                  Despite documented failures and ongoing investigations, no one has been held responsible for the conditions that led to his death.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          id="timeline"
          className="border-b border-dark-border bg-black px-4 py-28 sm:px-6 md:py-36"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Timeline
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg">
              Key events in the lead-up to and aftermath of Epstein&apos;s death.
            </p>
            <div className="relative mt-16">
              {/* vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-border md:left-1/2 md:-translate-x-px" />
              <ul className="space-y-12">
                {[
                  {
                    date: "July 2019",
                    title: "Arrest and detention",
                    body: "Epstein is arrested and held at the Metropolitan Correctional Center (MCC) in Manhattan on federal sex trafficking charges.",
                  },
                  {
                    date: "August 9–10, 2019",
                    title: "Failed checks and falsified logs",
                    body: "Guards are alleged to have skipped required rounds and falsified log entries showing they had checked on Epstein.",
                  },
                  {
                    date: "August 10, 2019",
                    title: "Death in custody",
                    body: "Epstein is found unresponsive in his cell. He is pronounced dead. Official cause of death is reported as suicide by hanging.",
                  },
                  {
                    date: "Ongoing",
                    title: "Investigations and unanswered questions",
                    body: "DOJ and BOP investigations continue. Multiple reports document camera failures, protocol violations, and the removal of Epstein&apos;s cellmate. No one has been criminally charged in connection with his death.",
                  },
                ].map((event, i) => (
                  <li key={i} className="relative pl-14 md:pl-[calc(50%+2rem)]">
                    <div className="absolute left-0 top-0 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-black md:left-1/2 md:-translate-x-1/2">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="min-w-0 pb-2">
                      <p className="text-sm font-medium text-zinc-500">{event.date}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{event.title}</h3>
                      <p className="mt-2 text-zinc-400">{event.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Archive */}
        <section
          id="archive"
          className="border-b border-dark-border bg-dark-surface px-4 py-28 sm:px-6 md:py-36"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Evidence Archive
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-loose">
              We are organizing documents, timelines, and official records into a searchable archive. The goal is to support independent scrutiny and investigative work—so the public can see the evidence and draw its own conclusions about what happened and what has been left unanswered.
            </p>
            <p className="mt-8 inline-block rounded-full border border-amber-500/50 bg-amber-500/10 px-5 py-2.5 text-sm font-medium text-amber-200">
              Coming soon
            </p>
          </div>
        </section>

        {/* Email Signup */}
        <section
          id="email-signup"
          className="border-b border-dark-border bg-black px-4 py-28 sm:px-6 md:py-36"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Get notified when new evidence is added and the archive goes live.
            </p>
            <EmailSignup />
          </div>
        </section>
      </main>

      <footer className="bg-black px-6 py-8 text-center text-sm text-zinc-500">
        <p>jeffrey-didnt-kill-himself.com</p>
      </footer>
    </>
  );
}
