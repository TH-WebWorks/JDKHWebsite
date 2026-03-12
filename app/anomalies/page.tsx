import Link from "next/link";

export const metadata = {
  title: "Surveillance and Camera System Anomalies | Epstein Investigation",
  description:
    "Camera outages, missing footage, DVR failures, and documentation gaps at MCC that limited investigators' ability to reconstruct events surrounding Epstein's death.",
};

export default function AnomaliesPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:gap-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
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
              Surveillance and Camera System Anomalies
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-relaxed text-zinc-400">
              Camera outages, missing footage, DVR failures, and documentation gaps that limited the investigation.
            </p>
          </div>
        </section>

        <div className="border-t border-white/[0.08]" aria-hidden />
        <div className="py-12" aria-hidden />

        <section className="px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="space-y-8">
              <section id="why-camera-evidence-matters">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Why the Camera Evidence Matters
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    The surveillance system inside the Metropolitan Correctional Center (MCC) should have provided the
                    most reliable record of events surrounding Jeffrey Epstein&apos;s death on August 10, 2019.
                  </p>
                  <p className="leading-relaxed">
                    Federal detention facilities rely heavily on camera systems to monitor inmate housing areas, confirm
                    staff compliance with required rounds, and document incidents. In situations involving inmate injury
                    or death, surveillance footage typically becomes the central piece of objective evidence used to
                    reconstruct the timeline of events.
                  </p>
                  <p className="leading-relaxed">
                    In Epstein&apos;s case, however, the surveillance record contains a series of anomalies involving
                    camera outages, missing footage, recording system failures, unclear documentation of handheld
                    recordings, and conflicting statements from staff regarding when technical problems were discovered.
                  </p>
                  <p className="leading-relaxed">
                    Taken together, these issues significantly limited investigators&apos; ability to reconstruct events
                    using video evidence.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="camera-coverage-shu">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Camera Coverage Inside the Special Housing Unit
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    To understand the surveillance issues, it is important to understand how cameras were positioned in
                    the Special Housing Unit (SHU) at MCC.
                  </p>
                  <p className="leading-relaxed">
                    Correctional facilities typically install cameras in hallways, stairwells, and common areas rather
                    than inside individual inmate cells.
                  </p>
                  <p className="leading-relaxed">At MCC:</p>
                  <p className="leading-relaxed">Cameras monitored:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>the L-tier hallway where Epstein&apos;s cell was located</li>
                    <li>the entrance to the housing tier</li>
                    <li>connecting corridors and stairwells</li>
                    <li>movement of staff and inmates through the unit</li>
                  </ul>
                  <p className="leading-relaxed">However:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>no fixed surveillance camera recorded inside Epstein&apos;s cell</li>
                  </ul>
                  <p className="leading-relaxed">
                    This means the official surveillance system could only document activity outside the cell, such as:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>staff conducting security rounds</li>
                    <li>individuals entering or exiting the tier</li>
                    <li>movement through the hallway</li>
                  </ul>
                  <p className="leading-relaxed">
                    The system could not record events occurring inside the cell itself. Because of this limitation, the
                    hallway cameras were critical to reconstructing the timeline. Yet those cameras are precisely where
                    the major technical problems occurred.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="camera-outages-failures">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Camera Outages and Equipment Failures
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Investigative records indicate that several surveillance cameras connected to the housing area were
                    experiencing technical issues around the time of the incident.
                  </p>
                  <p className="leading-relaxed">
                    Maintenance documentation and investigative findings describe:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>cameras that were not functioning properly</li>
                    <li>equipment failures affecting portions of the surveillance system</li>
                    <li>repair requests or maintenance activity associated with the cameras</li>
                  </ul>
                  <p className="leading-relaxed">
                    In a secure detention environment, camera outages are treated as serious operational issues because
                    they reduce the ability to monitor inmate safety and staff activity. Despite this, available
                    documentation indicates that some surveillance problems persisted prior to Epstein&apos;s death.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="missing-footage">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Missing and Unavailable Footage
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Following the discovery of Epstein on the morning of August 10, investigators attempted to obtain
                    surveillance footage covering the previous night.
                  </p>
                  <p className="leading-relaxed">However, the expected recordings were not available.</p>
                  <p className="leading-relaxed">Investigative explanations for the missing footage included:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>video files that had been overwritten</li>
                    <li>recordings that were not captured due to system malfunction</li>
                    <li>storage systems that did not retain the relevant data</li>
                  </ul>
                  <p className="leading-relaxed">
                    Because of these issues, investigators were unable to obtain continuous surveillance footage
                    covering the critical time period between Epstein&apos;s last confirmed check and the discovery of
                    his body.
                  </p>
                  <p className="leading-relaxed">
                    Without this footage, investigators were forced to rely primarily on written incident reports and
                    staff interviews to reconstruct the timeline.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="dvr-malfunction">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  DVR Recording System Malfunction
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    A central technical issue involved the failure of a surveillance recording system identified as DVR2.
                  </p>
                  <p className="leading-relaxed">
                    Digital Video Recorders (DVRs) capture and store video feeds from multiple cameras. Investigative
                    records indicate that:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>DVR2 was experiencing technical malfunction</li>
                    <li>certain camera feeds connected to the system were not properly recorded</li>
                    <li>maintenance activity had been associated with the equipment</li>
                  </ul>
                  <p className="leading-relaxed">
                    If cameras covering Epstein&apos;s housing tier were connected to this system, a DVR malfunction
                    would explain why video from the critical period was not preserved.
                  </p>
                  <p className="leading-relaxed">However, questions remain regarding:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>when the DVR malfunction began</li>
                    <li>which cameras were affected</li>
                    <li>why the failure had not been fully addressed prior to the incident</li>
                  </ul>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="hard-drive-replacement">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Hard Drive Replacement Before Evidence Preservation
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    DOJ documentation also references the replacement of hard drives used by the surveillance recording
                    system.
                  </p>
                  <p className="leading-relaxed">
                    DVR units store footage on internal hard drives. If those drives are replaced before the data is
                    preserved, the stored recordings may be permanently lost.
                  </p>
                  <p className="leading-relaxed">Internal communications indicate that:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>hard drives associated with the recording system were replaced</li>
                    <li>the replacement occurred before a formal preservation order was entered</li>
                  </ul>
                  <p className="leading-relaxed">
                    A preservation order normally requires that all potential evidence be secured immediately after an
                    incident.
                  </p>
                  <p className="leading-relaxed">
                    Because the hardware replacement occurred before this order, investigators later determined that
                    some relevant recordings may already have been lost.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="conflicting-accounts">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Conflicting Accounts of When Camera Failures Were Discovered
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Interviews conducted with correctional staff following the incident reveal inconsistencies regarding
                    when surveillance problems were first recognized.
                  </p>
                  <p className="leading-relaxed">
                    Some accounts suggest that camera issues in the housing unit were already known before
                    Epstein&apos;s death.
                  </p>
                  <p className="leading-relaxed">
                    Other statements indicate that the failures were discovered only when investigators attempted to
                    review surveillance footage after the incident.
                  </p>
                  <p className="leading-relaxed">These conflicting accounts create uncertainty regarding:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>how long the system had been compromised</li>
                    <li>whether supervisors were aware of the failures</li>
                    <li>whether additional monitoring measures were implemented</li>
                  </ul>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="later-footage">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Later Footage Appearing From Cameras Previously Reported as Inoperative
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Additional confusion arose when later document releases referenced surveillance footage from
                    cameras associated with the same system that had earlier been described as malfunctioning.
                  </p>
                  <p className="leading-relaxed">These later references included:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>video clips from hallway cameras</li>
                    <li>footage showing movement in nearby areas</li>
                  </ul>
                  <p className="leading-relaxed">
                    The existence of this footage created apparent contradictions with earlier explanations that cameras
                    covering the tier were not recording.
                  </p>
                  <p className="leading-relaxed">Possible explanations include:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>only certain cameras were affected by the DVR malfunction</li>
                    <li>different recording systems captured portions of the footage</li>
                    <li>early descriptions oversimplified the scope of the outage</li>
                  </ul>
                  <p className="leading-relaxed">
                    However, the lack of a clear public record identifying exactly which cameras were functional has
                    contributed to ongoing uncertainty.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="handheld-camera">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Handheld Camera Recording Inside the Cell
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Because fixed surveillance cameras did not record inside inmate cells, correctional staff used a
                    handheld video camera to document the scene inside Epstein&apos;s cell after he was discovered.
                  </p>
                  <p className="leading-relaxed">This recording may be the only video that captured:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>the interior of the cell</li>
                    <li>Epstein&apos;s body position</li>
                    <li>the ligature material and bed structure</li>
                    <li>the condition of the surrounding area</li>
                  </ul>
                  <p className="leading-relaxed">
                    However, publicly available records contain limited documentation regarding the recording.
                  </p>
                  <p className="leading-relaxed">Key details remain unclear, including:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>when the handheld recording began</li>
                    <li>who operated the camera</li>
                    <li>how long the recording lasted</li>
                    <li>where the footage was stored</li>
                  </ul>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="chain-of-custody">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Lack of Chain-of-Custody Documentation
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    In normal investigative procedures, video recordings are accompanied by documentation establishing a
                    chain of custody.
                  </p>
                  <p className="leading-relaxed">This documentation records:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>who created the recording</li>
                    <li>when it was recorded</li>
                    <li>how it was transferred or stored</li>
                    <li>who had access to it afterward</li>
                  </ul>
                  <p className="leading-relaxed">
                    In the publicly available materials related to Epstein&apos;s death, there is no clearly documented
                    chain of custody for the handheld recording.
                  </p>
                  <p className="leading-relaxed">
                    Because the handheld camera may represent the only video evidence showing the inside of the cell, the
                    absence of clear documentation regarding its handling creates an additional evidentiary gap.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="timeline-uncertainty">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Timeline Uncertainty
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    The surveillance issues also complicate the reconstruction of the morning&apos;s events.
                  </p>
                  <p className="leading-relaxed">Reported events include:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>Epstein being discovered unresponsive around 6:30 a.m.</li>
                    <li>staff initiating CPR</li>
                    <li>emergency medical personnel arriving</li>
                    <li>Epstein being transported to a hospital</li>
                  </ul>
                  <p className="leading-relaxed">
                    Without the surveillance footage that should have documented the hallway and tier activity,
                    investigators cannot independently verify the exact timing of:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>when staff first entered the cell</li>
                    <li>when additional personnel arrived</li>
                    <li>when the handheld camera recording began</li>
                  </ul>
                  <p className="leading-relaxed">
                    As a result, the timeline relies largely on written reports and staff recollections.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="repeated-failures">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Repeated Surveillance Failures During Key Events
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    One of the more striking aspects of the surveillance record is that camera failures or missing
                    footage appear to coincide with multiple significant events involving Jeffrey Epstein, not just the
                    night of his death.
                  </p>
                  <p className="leading-relaxed">
                    This pattern includes incidents occurring weeks earlier inside the same housing unit.
                  </p>
                  <p className="leading-relaxed">
                    The most notable example involves the July 23, 2019 incident, when Epstein was found injured in his
                    cell.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="july-23-incident">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  July 23 Incident and Missing Footage
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    On July 23, Epstein was discovered with injuries to his neck while housed in the Special Housing
                    Unit.
                  </p>
                  <p className="leading-relaxed">Accounts of the event differed:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>Epstein initially suggested his cellmate may have attacked him</li>
                    <li>his cellmate denied the allegation</li>
                    <li>Epstein later indicated he did not recall exactly what happened</li>
                  </ul>
                  <p className="leading-relaxed">
                    The incident resulted in Epstein being placed on suicide watch, where inmates are normally subject
                    to heightened monitoring and additional security measures.
                  </p>
                  <p className="leading-relaxed">
                    However, when investigators later attempted to review the surveillance footage associated with this
                    event, they encountered problems similar to those seen after Epstein&apos;s death.
                  </p>
                  <p className="leading-relaxed">
                    According to reporting and legal filings connected to the case:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>surveillance footage from the relevant cameras could not be located</li>
                    <li>backup footage that should have existed was also missing</li>
                  </ul>
                  <p className="leading-relaxed">
                    This meant investigators were unable to visually confirm what occurred during the July 23 incident.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="missing-primary-backup">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Missing Primary and Backup Video
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">Normally, surveillance systems are designed with redundancy.</p>
                  <p className="leading-relaxed">This means that:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>primary recordings are stored on a DVR or server</li>
                    <li>backup copies may be preserved on separate storage systems</li>
                  </ul>
                  <p className="leading-relaxed">In the July 23 incident, both types of recordings were reportedly unavailable.</p>
                  <p className="leading-relaxed">This left investigators without video documentation of:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>activity in the hallway near the cell</li>
                    <li>movement of staff during the incident</li>
                    <li>any interactions between Epstein and his cellmate</li>
                  </ul>
                  <p className="leading-relaxed">
                    The absence of both primary and backup footage removed the most objective source of evidence for the
                    event.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="aug-9-10-problems">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Similar Surveillance Problems on August 9–10
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    The same general problem occurred during the far more consequential incident weeks later.
                  </p>
                  <p className="leading-relaxed">
                    When Epstein died on August 10, investigators again attempted to obtain surveillance footage from
                    cameras covering the housing tier.
                  </p>
                  <p className="leading-relaxed">But as described earlier, they encountered multiple problems:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>cameras connected to the area were reportedly malfunctioning</li>
                    <li>recordings from the relevant period were missing</li>
                    <li>DVR equipment experienced technical failures</li>
                    <li>hard drives were replaced before preservation orders were issued</li>
                  </ul>
                  <p className="leading-relaxed">
                    The result was the same outcome as the earlier incident: investigators could not rely on the
                    surveillance system to reconstruct the timeline.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="pattern-surveillance-gaps">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Pattern of Surveillance Gaps
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">When viewed together, the two incidents reveal a troubling pattern.</p>
                  <p className="leading-relaxed">
                    Two major events involving the same inmate occurred within weeks of each other:
                  </p>
                  <ol className="list-decimal space-y-1.5 pl-6">
                    <li>July 23 – Epstein found injured in his cell</li>
                    <li>August 10 – Epstein found unresponsive</li>
                  </ol>
                  <p className="leading-relaxed">In both cases:</p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>investigators attempted to obtain surveillance footage</li>
                    <li>footage from relevant cameras was unavailable</li>
                    <li>backup recordings were also missing or incomplete</li>
                  </ul>
                  <p className="leading-relaxed">
                    This means that the surveillance system failed to provide usable video evidence for two of the most
                    important events in Epstein&apos;s final weeks at MCC.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />
              <hr className="border-white/[0.08] my-8" />

              <section id="impact-investigation">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Impact on the Investigation
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    Because surveillance footage was unavailable for both the July 23 incident and the August 10 death,
                    investigators had to rely on:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>staff incident reports</li>
                    <li>inmate statements</li>
                    <li>interviews conducted after the fact</li>
                  </ul>
                  <p className="leading-relaxed">
                    Video evidence, which normally provides the most objective record of events in custodial
                    environments, was largely absent.
                  </p>
                  <p className="leading-relaxed">
                    This significantly limited the ability of investigators to independently verify what occurred during
                    these incidents.
                  </p>
                </div>
              </section>

              <hr className="border-white/[0.08] my-8" />

              <section id="conclusion">
                <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                  Conclusion
                </h2>
                <div className="mt-4 space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    The surveillance system at MCC should have provided the most reliable and objective evidence
                    surrounding Jeffrey Epstein&apos;s death.
                  </p>
                  <p className="leading-relaxed">
                    Instead, the record is marked by a combination of technical failures and documentation gaps,
                    including:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-6">
                    <li>malfunctioning surveillance cameras</li>
                    <li>missing or overwritten footage</li>
                    <li>DVR recording system failures</li>
                    <li>replacement of storage hardware before evidence preservation</li>
                    <li>conflicting statements regarding when failures were discovered</li>
                    <li>unclear documentation of handheld video recordings</li>
                    <li>absence of chain-of-custody records for the only footage inside the cell</li>
                  </ul>
                  <p className="leading-relaxed">
                    Footage associated with the July 23 injury incident and the August 10 death was missing or
                    unavailable, including recordings that should have existed on backup systems.
                  </p>
                  <p className="leading-relaxed">
                    These repeated gaps prevented investigators from using surveillance video to reconstruct the
                    timeline of events and confirm staff activity in the housing unit.
                  </p>
                  <p className="leading-relaxed">
                    Together, these issues resulted in the loss of what should have been the most definitive evidence in
                    the case: continuous video documentation of the housing area during the critical hours.
                  </p>
                  <p className="leading-relaxed">
                    Without that visual record, investigators were left reconstructing events using incomplete technical
                    data, written logs, and staff interviews.
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
          <Link href="/timeline-conflicts" className="hover:text-zinc-400">
            Timeline Conflicts
          </Link>
        </footer>
      </main>
    </>
  );
}
