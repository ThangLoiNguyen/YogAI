import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
      {children}
    </span>
  );
}

