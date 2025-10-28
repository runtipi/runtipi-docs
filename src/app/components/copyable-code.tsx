"use client";

import { useState } from "react";

export default function CopyableCode({ children }: { children: string }) {
  const [success, setSuccess] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(children);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };
  return (
    <div className="relative rounded-md xl:w-auto">
      <button
        className="betterhover:hover:bg-black/10 betterhover:dark:hover:bg-black/60 flex w-full items-center justify-center gap-4 rounded-md border border-black/10 bg-black/5 px-8 py-3 font-mono text-sm font-medium text-black/70 transition-colors duration-200 md:px-10 md:py-3 md:text-base md:leading-6 dark:border-white/15 dark:bg-black dark:text-gray-300"
        onClick={handleClick}
      >
        {children}
        {success ? <IconCopyCheck /> : <IconCopy />}
      </button>
    </div>
  );
}

function IconCopy() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-black/40 dark:stroke-white/50"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  );
}

function IconCopyCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-black/40 dark:stroke-white/50"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
      <path d="M11 14l2 2l4 -4" />
    </svg>
  );
}
