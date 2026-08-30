import banner from "@/assets/about-banner.jpg";

export function IndustrialBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={banner}
        alt="سالن تولید ماشین‌آلات صنعتی"
        loading="lazy"
        width={1920}
        height={912}
        className="h-72 w-full object-cover opacity-60 sm:h-96 lg:h-[32rem]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30"
        aria-hidden="true"
      />
      <div className="container-x absolute inset-0 flex flex-col justify-end pb-10 sm:pb-14">
        <span className="gold-rule" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
          ساخته‌شده برای صنعت
        </h2>
        <p className="mt-4 text-xs tracking-[0.2em] text-primary-foreground/70 sm:text-sm">
          ترکیب تجربه، دانش مهندسی و فناوری
        </p>
      </div>
    </section>
  );
}
