import Link from "next/link";

export const metadata = {
  title: "Anomalies Archive | Epstein Investigation",
  description:
    "Structured taxonomy of investigative issues: surveillance, timeline, personnel, forensic findings, evidence handling, and documentation conflicts.",
};

const CATEGORIES = [
  {
    id: "surveillance-video",
    title: "Surveillance and Video Evidence",
    description:
      "Issues involving camera coverage, recording failures, DVR systems, and missing or unusable footage related to the Special Housing Unit tier where Epstein was held.",
    subsections: [
      { id: "mcc-camera-coverage", title: "MCC camera coverage map" },
      { id: "dvr2-failure", title: "DVR2 failure explanation" },
      { id: "handheld-footage", title: "Handheld camera footage issue" },
    ],
  },
  {
    id: "timeline-conflicts",
    title: "Timeline Conflicts",
    description:
      "Discrepancies and gaps in the documented sequence of events on the night of August 9–10, 2019.",
    subsections: [
      { id: "aug-9-evening", title: "Aug 9 evening timeline" },
      { id: "overnight-gaps", title: "Overnight observation gaps" },
      { id: "discovery-response", title: "Discovery and response timeline" },
    ],
  },
  {
    id: "personnel-staffing",
    title: "Personnel and Staffing Irregularities",
    description:
      "Documented differences between SHU staffing policy, actual staffing the night of Epstein's death, and personnel not initially disclosed in reporting.",
    subsections: [
      { id: "shu-staffing-policy", title: "SHU staffing policy vs actual staffing" },
      { id: "undisclosed-personnel", title: "Undisclosed personnel" },
      { id: "officer-statements-logs", title: "Officer statements vs logs" },
    ],
  },
  {
    id: "scene-handling",
    title: "Scene Handling and Evidence Documentation",
    description:
      "Questions surrounding how the cell and scene were documented, including ligature evidence, body position, and photography or video of the scene.",
    subsections: [
      { id: "ligature-evidence", title: "Ligature evidence" },
      { id: "body-position", title: "Body position documentation" },
      { id: "scene-photography", title: "Scene photography/video" },
    ],
  },
  {
    id: "forensic-medical",
    title: "Forensic Findings and Medical Evidence",
    description:
      "Medical examiner findings, independent forensic reviews, and disputes over the interpretation of injuries and cause of death.",
    subsections: [
      { id: "ocme-report", title: "OCME report" },
      { id: "independent-forensic", title: "Independent forensic review" },
      { id: "injury-disputes", title: "Injury interpretation disputes" },
    ],
  },
  {
    id: "institutional-actions",
    title: "Institutional Actions and Decisions",
    description:
      "Protocols and decisions related to suicide watch, SHU monitoring requirements, and procedures for high-risk inmates.",
    subsections: [
      { id: "suicide-watch", title: "Suicide watch protocol" },
      { id: "shu-monitoring", title: "SHU monitoring requirements" },
      { id: "high-risk-procedures", title: "High-risk inmate procedures" },
    ],
  },
  {
    id: "investigative-scope",
    title: "Investigative Scope Limitations",
    description:
      "What the Office of the Inspector General and other investigations did and did not examine.",
    subsections: [
      { id: "oig-examined", title: "What OIG examined" },
      { id: "oig-not-examined", title: "What OIG did not examine" },
    ],
  },
  {
    id: "evidence-handling",
    title: "Evidence Handling and Chain of Custody",
    description:
      "Communications and actions regarding autopsy evidence, chain of custody, and requests related to evidence.",
    subsections: [
      { id: "sdny-ocme", title: "SDNY communication to OCME" },
      { id: "autopsy-evidence", title: "Autopsy evidence handling" },
    ],
  },
  {
    id: "documentation-conflicts",
    title: "Documentation Conflicts",
    description:
      "Discrepancies between incident reports, logs, and interview accounts.",
    subsections: [
      { id: "incident-discrepancies", title: "Incident report discrepancies" },
      { id: "interview-inconsistencies", title: "Interview inconsistencies" },
    ],
  },
] as const;

export default function AnomaliesPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-xs font-bold tracking-widest text-zinc-500 transition hover:text-zinc-400"
          >
            jeffreydidntkillhimself.com
          </Link>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <Link href="/" className="nav-link text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Home
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
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Anomalies Archive
            </p>
            <h1 className="mt-4 text-center text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl">
              Investigative Issues by Category
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-relaxed text-zinc-400">
              A structured taxonomy of documented anomalies, conflicts, and open questions. Each category can be expanded into deeper investigative pages and source documents.
            </p>
          </div>
        </section>

        <div className="border-t border-white/[0.08]" aria-hidden />
        <div className="py-12" aria-hidden />

        <section className="px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {CATEGORIES.map((category) => (
                <article
                  key={category.id}
                  id={category.id}
                  className="rounded-md border border-white/[0.08] bg-dark-surface/80 p-6"
                >
                  <h2 className="text-lg font-semibold tracking-wide text-white sm:text-xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {category.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {category.subsections.map((sub) => (
                      <li key={sub.id} id={sub.id}>
                        <Link
                          href={`/anomalies#${sub.id}`}
                          className="text-xs text-zinc-500 transition hover:text-zinc-300 sm:text-sm"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.08] px-4 py-8 text-center text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-400">
            Back to home
          </Link>
        </footer>
      </main>
    </>
  );
}
