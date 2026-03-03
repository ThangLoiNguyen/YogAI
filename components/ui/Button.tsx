import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({ children, variant = "primary", className = "", ...rest }: Props) {
  const base =
    "inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-sky-50 sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-sky-500 text-white shadow-md shadow-sky-200 hover:bg-sky-400"
      : "border border-sky-200 bg-white text-sky-700 hover:bg-sky-50";

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

