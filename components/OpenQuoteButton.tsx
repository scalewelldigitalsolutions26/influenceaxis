"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { useQuoteModal } from "@/components/QuoteModalProvider";

type OpenQuoteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  service?: string;
  variant?: "primary" | "secondary";
};

export function OpenQuoteButton({
  children,
  className = "",
  service,
  type = "button",
  variant = "primary",
  onClick,
  ...props
}: OpenQuoteButtonProps) {
  const { openQuote } = useQuoteModal();
  const variantClass =
    variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <button
      type={type}
      className={`${variantClass} ${className}`.trim()}
      onClick={(event) => {
        onClick?.(event);
        openQuote(service);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
