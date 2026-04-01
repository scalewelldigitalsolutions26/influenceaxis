"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-ink/60 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4 md:items-center md:px-6 md:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative my-auto flex w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#08111f] text-white shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[32px] md:my-0 md:max-h-[min(88dvh,840px)]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[#08111f]/95 px-5 pb-5 pt-5 backdrop-blur sm:px-6 md:px-8 md:pb-6 md:pt-6">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:right-6 md:top-5"
                aria-label="Close quote form"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-w-xl pr-14">
                <p className="eyebrow border-white/15 bg-white/5 text-white/70">
                  Project Inquiry
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:mt-5 md:text-4xl">
                  {title}
                </h2>
                {description ? (
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="overflow-y-auto px-5 pb-5 pt-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 md:pt-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
