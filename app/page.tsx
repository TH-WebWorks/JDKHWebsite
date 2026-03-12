import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";
import { DocumentGrid } from "@/components/DocumentGrid";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <span className="text-xs font-bold tracking-widest text-zinc-500">
            jeffreydidntkillhimself.com
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
          className="relative overflow-hidden border-b border-dark-border bg-black px-4 py-28 sm:px-6 md:py-40"
        >
          {/* Background collage — document layers */}
          <div
            id="hero-background"
            className="hero-background absolute inset-0 z-0"
            aria-hidden
          >
            <div className="hero-doc-layer hero-doc-layer--1 left-[8%] top-[12%] h-32 w-24 sm:h-40 sm:w-28 md:h-44 md:w-32" />
            <div className="hero-doc-layer hero-doc-layer--2 right-[10%] top-[18%] h-28 w-36 sm:h-36 sm:w-44 md:h-40 md:w-52" />
            <div className="hero-doc-layer hero-doc-layer--3 left-[15%] bottom-[25%] h-36 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36" />
            <div className="hero-doc-layer hero-doc-layer--4 right-[12%] bottom-[20%] h-24 w-32 sm:h-28 sm:w-40 md:h-32 md:w-48" />
            <div className="hero-doc-layer hero-doc-layer--5 left-[50%] top-[35%] h-28 w-20 sm:h-32 sm:w-24 md:h-36 md:w-28 -translate-x-1/2" />
            <div className="hero-doc-layer hero-doc-layer--1 right-[25%] top-[45%] h-20 w-28 sm:h-24 sm:w-32 md:h-28 md:w-36" />
          </div>
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 z-[1] bg-black/70"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              The Death of Jeffrey Epstein
            </h1>
            <p className="mt-6 text-base font-normal text-zinc-500 sm:text-lg md:text-xl">
              A public record examination of events at the Metropolitan Correctional Center — August 9–10, 2019
            </p>
            <div className="mx-auto mt-10 max-w-[600px] text-left">
              <dl className="space-y-2.5 text-sm text-zinc-400 sm:text-base">
                <div>
                  <dt className="font-bold text-zinc-300">Official determination:</dt>
                  <dd className="mt-0.5">Suicide</dd>
                </div>
                <div>
                  <dt className="font-bold text-zinc-300">Location:</dt>
                  <dd className="mt-0.5">MCC New York, Special Housing Unit</dd>
                </div>
                <div>
                  <dt className="font-bold text-zinc-300">Date:</dt>
                  <dd className="mt-0.5">August 10, 2019</dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <div className="h-px w-32 bg-zinc-600" />
              <p className="mt-4 max-w-[520px] text-center font-serif text-sm italic text-zinc-400 sm:text-base">
                Multiple documented inconsistencies remain unresolved in official reporting.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="#why-archive"
                className="inline-block rounded-md bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore the Archive
              </Link>
            </div>
          </div>
        </section>

        {/* Why This Archive Exists — single consolidated briefing */}
        <section
          id="why-archive"
          className="border-b border-dark-border border-t border-dark-border/80 bg-dark-featured px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[700px]">
            <h2 className="mb-12 text-center text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl">
              Why This Archive Exists
            </h2>
            <div className="space-y-6 rounded-lg border border-dark-border/60 bg-black/30 px-6 py-8 text-zinc-300 sm:px-8 sm:py-10 sm:text-lg sm:leading-loose">
              <p className="leading-relaxed">
                Epstein died in federal custody on August 10, 2019 at the Metropolitan Correctional Center in New York. His death was quickly ruled a suicide.
              </p>
              <p className="leading-relaxed">
                Yet many of the documented facts surrounding that night remain inconsistent, unexplained, or absent from official reporting.
              </p>
              <p className="leading-relaxed">
                Thousands of pages of government records, witness interviews, investigative reports, and forensic findings exist across multiple agencies and court filings. Much of this material has never been compiled or presented in a single public resource.
              </p>
              <p className="leading-relaxed">
                This archive assembles those records in one place so journalists, researchers, policymakers, and the public can examine the evidence directly.
              </p>
            </div>
          </div>
        </section>

        {/* Key Unresolved Issues */}
        <section
          id="key-issues"
          className="border-b border-dark-border bg-black px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-4 text-center text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl">
              Key Unresolved Issues
            </h2>
            <p className="mx-auto mb-12 max-w-[640px] text-center text-base leading-relaxed text-zinc-400">
              Several documented issues surrounding Epstein&apos;s death remain unresolved or disputed in official reporting.
            </p>
            <ul className="grid gap-5 sm:grid-cols-2">
              <li id="surveillance-failures">
                <Link
                  href="#surveillance-failures"
                  className="block rounded-lg border border-dark-border bg-dark-surface/80 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <h3 className="font-semibold text-white">Surveillance failures</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Multiple cameras covering the tier and common areas reportedly malfunctioned or produced unusable footage.
                  </p>
                </Link>
              </li>
              <li id="unreported-personnel">
                <Link
                  href="#unreported-personnel"
                  className="block rounded-lg border border-dark-border bg-dark-surface/80 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <h3 className="font-semibold text-white">Unreported personnel</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Records indicate the presence of a third correctional officer not initially disclosed in public reporting.
                  </p>
                </Link>
              </li>
              <li id="scene-documentation">
                <Link
                  href="#scene-documentation"
                  className="block rounded-lg border border-dark-border bg-dark-surface/80 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <h3 className="font-semibold text-white">Scene documentation gaps</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    The only footage of the cell interior was reportedly recorded with a handheld camera after discovery.
                  </p>
                </Link>
              </li>
              <li id="forensic-review">
                <Link
                  href="#forensic-review"
                  className="block rounded-lg border border-dark-border bg-dark-surface/80 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <h3 className="font-semibold text-white">Forensic disagreement</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Independent forensic review questioned whether injuries were consistent with suicide.
                  </p>
                </Link>
              </li>
              <li id="evidence-handling">
                <Link
                  href="#evidence-handling"
                  className="block rounded-lg border border-dark-border bg-dark-surface/80 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <h3 className="font-semibold text-white">Evidence handling concerns</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Communications indicate requests regarding destruction of FBI evidence collected during the autopsy process.
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Primary Source Archive */}
        <section
          id="primary-source"
          className="border-b border-dark-border bg-dark-surface px-4 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
              Primary Source Archive
            </h2>
            <p className="mx-auto mb-12 max-w-[700px] text-center text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-loose">
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
            <DocumentGrid />
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
        <p>jeffreydidntkillhimself.com</p>
      </footer>
    </>
  );
}
