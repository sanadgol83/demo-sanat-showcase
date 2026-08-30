import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDemoModal } from "./demo-modal";

const nav = [
  { label: "صفحه اصلی", to: "/" },
  { label: "درباره ما", to: null },
  { label: "محصولات", to: "/products" },
  { label: "صنایع", to: null },
  { label: "ماشین آلات", to: null },
  { label: "تماس با ما", to: "/contact" },
] as const;

export function SiteHeader() {
  const { open } = useDemoModal();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const linkClass =
    "relative py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <span
            className="grid h-9 w-9 shrink-0 rotate-45 place-items-center border border-gold"
            aria-hidden="true"
          >
            <span className="h-2 w-2 bg-gold" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-bold text-foreground">دمو صنعت</span>
            <span className="block text-[10px] tracking-[0.3em] text-muted-foreground">
              ماشین سازی
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={linkClass}
                activeProps={{
                  className:
                    "text-foreground font-medium after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-gold",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button key={item.label} onClick={open} className={linkClass}>
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="تغییر زبان"
            onClick={open}
            className="grid h-10 w-10 place-items-center text-muted-foreground transition-colors hover:text-gold"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            aria-label={menuOpen ? "بستن منو" : "منو"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile drawer: physically anchored to the LEFT edge, content stays RTL */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          aria-label="بستن منو"
          tabIndex={menuOpen ? 0 : -1}
          className={`absolute inset-0 bg-charcoal/60 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 right-auto flex w-[80vw] max-w-[420px] flex-col bg-surface p-6 shadow-lift transition-transform duration-300 ease-out sm:w-[380px] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-foreground">دمو صنعت</span>
            <button aria-label="بستن" onClick={() => setMenuOpen(false)}>
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
          <span className="gold-rule my-6" aria-hidden="true" />
          <nav className="flex flex-col text-right">
            {nav.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-4 text-right text-sm text-foreground"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => {
                    setMenuOpen(false);
                    open();
                  }}
                  className="border-b border-border py-4 text-right text-sm text-muted-foreground"
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>
        </div>
      </div>

    </header>
  );
}
