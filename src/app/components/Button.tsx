import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function Button({ href, className, children }: ButtonProps) {
  return (
    <div className="w-full rounded-md md:w-auto">
      <Link
        href={href}
        className={`flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium no-underline transition-colors duration-200 md:px-10 md:py-3 md:text-lg md:leading-6 ${
          className ?? ""
        }`}
      >
        {children}
      </Link>
    </div>
  );
}
