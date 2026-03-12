import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <span className="text-sm font-medium text-zinc-400">
            jeffrey-didnt-kill-himself.com
          </span>
          <div className="flex gap-6">
            <Link
              href="#what-we-know"
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              What We Know
            </Link>
            <Link
              href="#timeline"
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              Timeline
            </Link>
            <Link
              href="#archive"
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              Archive
            </Link>
            <Link
              href="#email-signup"
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              Updates
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative border-b border-dark-border bg-black px-6 py-28 md:py-40"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Jeffrey Epstein&apos;s Death
            </h1>
            <p className="mt-5 text-2xl font-medium text-zinc-300 md:text-3xl lg:text-4xl">
              Still Raises Unanswered Questions
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
              We are building a public evidence archive—documents, timelines, and records—so anyone can examine what happened and why so much remains unexplained.
            </p>
            <div className="mt-12">
              <Link
                href="#what-we-know"
                className="inline-block rounded-md bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore the Evidence
              </Link>
            </div>
          </div>
        </section>

        {/* What We Know */}
        <section
          id="what-we-know"
          className="border-b border-dark-border bg-dark-surface px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              What We Know
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
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
          className="border-b border-dark-border bg-black px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Timeline
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
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
          className="border-b border-dark-border bg-dark-surface px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Evidence Archive
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
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
          className="border-b border-dark-border bg-black px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-zinc-400">
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
