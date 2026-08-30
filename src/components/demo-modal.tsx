import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

const DemoModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useDemoModal() {
  return useContext(DemoModalContext);
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  return (
    <DemoModalContext.Provider value={{ open }}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center px-5"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="بستن"
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md animate-[reveal-up_0.35s_cubic-bezier(0.22,1,0.36,1)] border border-border bg-surface p-9 text-center shadow-lift">
            <span className="mx-auto mb-6 block h-10 w-10 rotate-45 border border-gold" />
            <p className="text-lg leading-9 font-semibold text-foreground">
              این صفحه در نسخه دمو طراحی نشده است.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-7 inline-flex h-11 min-w-32 items-center justify-center bg-charcoal px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold"
            >
              بازگشت
            </button>
          </div>
        </div>
      ) : null}
    </DemoModalContext.Provider>
  );
}
