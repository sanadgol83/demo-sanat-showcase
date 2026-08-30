import { Link } from "@tanstack/react-router";

export function AboutCTA() {
  return (
    <section className="container-x py-16 sm:py-20 lg:py-24">
      <div className="relative overflow-hidden border border-primary-foreground/10 bg-charcoal px-6 py-14 sm:px-12">
        <span
          className="grid-dots absolute bottom-0 left-0 h-36 w-36 opacity-25"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-xl leading-[1.7] font-bold text-primary-foreground sm:text-2xl">
              بیایید درباره راهکار مناسب خط تولید شما صحبت کنیم
            </h2>
            <span className="gold-rule mt-4" aria-hidden="true" />
            <p className="mt-5 text-sm leading-8 text-primary-foreground/65">
              کارشناسان دمو صنعت آماده‌اند تا متناسب با نیاز شما، راهکار مناسب را بررسی و پیشنهاد
              کنند.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 sm:gap-4 lg:w-auto">
            <Link
              to="/contact"
              className="inline-flex h-12 flex-1 items-center justify-center bg-gold px-8 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-soft sm:flex-none"
            >
              تماس با ما
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 flex-1 items-center justify-center border border-gold px-8 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-charcoal sm:flex-none"
            >
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
