"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function TopBanner() {
  const [show, setShow] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && window.localStorage.getItem("runtipi_top_banner_dismissed") === "true";
    if (dismissed) return;
    const el = contentRef.current;
    const h = el?.scrollHeight ?? 0;
    setMeasuredHeight(h);
    const id = requestAnimationFrame(() => setShow(true));

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && el) {
      ro = new ResizeObserver(() => {
        const newH = el.scrollHeight;
        setMeasuredHeight(newH);
      });
      ro.observe(el);
    }
    return () => {
      cancelAnimationFrame(id);
      ro?.disconnect();
    };
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem("runtipi_top_banner_dismissed", "true");
    } catch {}
    setShow(false);
  };

  return (
    <div aria-live="polite">
      <div
        className="overflow-hidden"
        style={{
          maxHeight: show ? `${measuredHeight}px` : "0px",
          opacity: show ? 1 : 0,
          transition: "max-height 450ms ease, opacity 350ms ease",
        }}
      >
        <div
          ref={contentRef}
          className="relative isolate z-[100] w-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 text-white shadow-md shadow-black/10 dark:shadow-black/30"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2 sm:pr-14">
            <div className="flex items-start gap-2 pr-10 sm:items-center sm:pr-0 sm:flex-1">
              <span className="inline-flex h-6 w-6 shrink-0 aspect-square items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </span>
              <p className="leading-snug line-clamp-2 sm:line-clamp-none">
                Runtipi is looking for a designer to help with brand, UX, and visuals. Passionate about OSS? We'd love your touch.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-none">
              <div className="grid grid-cols-1 gap-2 w-full sm:flex sm:gap-2">
                <Link
                  href="https://discord.gg/Bu9qEPnHsc"
                  className="block w-full rounded-md bg-white/90 px-3 py-2 text-center font-medium text-indigo-700 shadow-sm ring-1 ring-inset ring-black/10 transition-colors hover:bg-white sm:inline-block sm:w-auto sm:px-2.5 sm:py-1.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on Discord
                </Link>
                <Link
                  href="https://github.com/runtipi/runtipi/discussions"
                  className="block w-full rounded-md bg-white/0 px-3 py-2 text-center font-medium text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/10 sm:inline-block sm:w-auto sm:px-2.5 sm:py-1.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start a discussion
                </Link>
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={dismiss}
            className="absolute right-2 top-2 sm:right-3 sm:top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-white ring-1 ring-inset ring-white/25 transition hover:bg-white/25"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
