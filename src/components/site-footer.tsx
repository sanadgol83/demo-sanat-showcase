import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useDemoModal } from "./demo-modal";

const quick = [
  { label: "صفحه اصلی", to: "/" },
  { label: "محصولات", to: "/products" },
  { label: "درباره ما", to: null },
  { label: "صنایع", to: null },
  { label: "تماس با ما", to: "/contact" },
] as const;

export function SiteFooter() {
  const { open } = useDemoModal();

  return (
    <footer className="relative overflow-hidden bg-charcoal text-primary-foreground">
      <span
        className="grid-dots absolute bottom-0 left-0 h-40 w-40 opacity-25"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid h-9 w-9 rotate-45 place-items-center border border-gold"
              aria-hidden="true"
            >
              <span className="h-2 w-2 bg-gold" />
            </span>
            <span className="text-lg font-bold">دمو صنعت</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-8 text-primary-foreground/60">
            راهکارهای مهندسی و ماشین‌آلات تخصصی برای خطوط بسته‌بندی صنایع مختلف.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Send].map((Icon, i) => (
              <button
                key={i}
                aria-label="شبکه اجتماعی"
                onClick={open}
                className="grid h-9 w-9 place-items-center border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">دسترسی سریع</h3>
          <span className="gold-rule mt-4" aria-hidden="true" />
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">
            {quick.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link to={item.to} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={open} className="transition-colors hover:text-gold">
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">اطلاعات تماس</h3>
          <span className="gold-rule mt-4" aria-hidden="true" />
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>تلفن: ۰۲۱-۴۶۸۲۴۲۴۰</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span dir="ltr">info@demo-sanat.ir</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 text-center text-xs text-primary-foreground/50">
          © ۱۴۰۴ دمو صنعت. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
