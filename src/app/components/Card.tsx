import { Icon as IconType } from "@tabler/icons-react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: IconType;
  footer?: ReactNode;
}

export default function Card({
  title,
  children,
  icon: Icon,
  footer,
}: CardProps) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 hover:dark:bg-white/10">
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="shrink-0">
            <div className="flex size-16 transform items-center justify-center rounded-xl bg-blue-50 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-slate-950 dark:shadow-lg">
              <Icon className="size-8 text-blue-500 dark:text-blue-800" />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-medium text-black/90 dark:text-white/90 leading-none">
            {title}
          </h3>
          <div className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
            {children}
          </div>
        </div>
      </div>
      {footer && (
        <div className="mt-auto flex flex-col items-center justify-end gap-2 pt-4 md:flex-row">
          {footer}
        </div>
      )}
    </div>
  );
}
