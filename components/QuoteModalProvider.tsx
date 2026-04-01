"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";

import Modal from "@/components/Modal";
import QuoteForm from "@/components/QuoteForm";

type QuoteModalContextValue = {
  openQuote: (service?: string) => void;
  closeQuote: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [instanceKey, setInstanceKey] = useState(0);

  const value = useMemo(
    () => ({
      openQuote: (service?: string) => {
        setSelectedService(service);
        setInstanceKey((current) => current + 1);
        setIsOpen(true);
      },
      closeQuote: () => {
        setIsOpen(false);
      }
    }),
    []
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={value.closeQuote}
        title="Let's scope your next growth move"
        description="Share a few project details and we'll recommend the right mix of strategy, execution, and timeline."
      >
        <QuoteForm
          key={`${selectedService ?? "general-quote"}-${instanceKey}`}
          defaultService={selectedService}
        />
      </Modal>
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }

  return context;
}
