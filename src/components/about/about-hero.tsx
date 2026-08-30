import aboutHero from "@/assets/about-hero.jpg";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-charcoal">
      <img
        src={aboutHero}
        alt="خط تولید و بسته‌بندی صنعتی"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-charcoal/95 via-charcoal/80 to-charcoal/45"
        aria-hidden="true"
      />
      <span
        className="grid-dots pointer-events-none absolute bottom-0 left-0 h-32 w-40 opacity-25"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -top-24 -left-24 hidden h-96 w-96 rotate-45 border border-gold/25 lg:block"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-28">
        <div className="reveal max-w-2xl">
          <span className="block text-xs font-medium tracking-[0.35em] text-gold">
            درباره دمو صنعت
          </span>
          <h1 className="mt-5 text-[1.75rem] leading-[1.5] font-extrabold text-primary-foreground sm:text-4xl md:text-5xl md:leading-[1.35]">
            تجربه، مهندسی و نوآوری
            <br />
            <span className="text-gold">در مسیر صنعت</span>
          </h1>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-sm leading-8 text-primary-foreground/70 sm:text-base sm:leading-9">
            دمو صنعت با تکیه بر تجربه صنعتی و دانش مهندسی، راهکارهای تخصصی در زمینه ماشین‌آلات و
            خطوط بسته‌بندی ارائه می‌دهد.
          </p>
        </div>
      </div>
    </section>
  );
}
