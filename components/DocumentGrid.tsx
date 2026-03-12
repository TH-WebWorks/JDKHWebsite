"use client";

import { useState, useCallback, useEffect } from "react";

const DOCUMENTS = [
  { id: "oig", title: "OIG Report Excerpt", description: "Excerpt from Office of Inspector General findings on MCC operations and Epstein's death." },
  { id: "surveillance", title: "Surveillance Failure Record", description: "Documentation of camera and monitoring failures the night of August 9–10, 2019." },
  { id: "guard", title: "Guard Interview Transcript", description: "Transcript of interviews with correctional staff regarding rounds and log entries." },
  { id: "medical", title: "Medical Examiner Documentation", description: "Medical examiner reports and related forensic documentation." },
  { id: "timeline", title: "Timeline Record", description: "Chronological record of events from detention through death in custody." },
] as const;

export function DocumentGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openDoc = useCallback((id: string) => setOpenId(id), []);
  const closeDoc = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDoc();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [openId, closeDoc]);

  return (
    <>
      <h3 className="mb-6 mt-14 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Document Previews
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCUMENTS.map((doc, i) => (
          <button
            key={doc.id}
            type="button"
            onClick={() => openDoc(doc.id)}
            className="group relative flex flex-col rounded border border-zinc-300/40 bg-[#fafaf9] p-5 text-left shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-dark-surface"
            style={{
              transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
            }}
          >
            <span className="font-serif text-base font-medium text-zinc-800">
              {doc.title}
            </span>
            <span className="mt-2 font-serif text-sm leading-relaxed text-zinc-600">
              {doc.description}
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
              View document →
            </span>
          </button>
        ))}
      </div>

      {/* Document viewer modal */}
      {openId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="document-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80"
            onClick={closeDoc}
            aria-label="Close"
          />
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-dark-border bg-[#fafaf9] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-zinc-200 bg-[#fafaf9] px-6 py-4">
              <h2 id="document-modal-title" className="font-serif text-lg font-semibold text-zinc-800">
                {DOCUMENTS.find((d) => d.id === openId)?.title ?? "Document"}
              </h2>
              <button
                type="button"
                onClick={closeDoc}
                className="rounded p-2 text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 font-serif text-zinc-700">
              <p className="leading-relaxed">
                Full document content will be available when the archive is complete. This viewer will display primary source material—reports, transcripts, and records—for direct review.
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                Check back for updates as we continue to compile and publish materials.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
