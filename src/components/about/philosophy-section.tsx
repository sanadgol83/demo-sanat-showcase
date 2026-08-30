import philosophy from "@/assets/about-philosophy.jpg";
import { Reveal } from "@/components/reveal";

export function PhilosophySection() {
  return (
    <section className="relative bg-charcoal">
      <span
        className="grid-dots absolute top-0 left-0 h-32 w-32 opacity-20"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20 lg:py-32">
        <Reveal>
          <span className="block text-xs font-medium tracking-[0.35em] text-gold">فلسفه ما</span>
          <h2 className="mt-5 text-2xl leading-[1.6] font-bold text-primary-foreground sm:text-3xl md:text-4xl md:leading-[1.5]">
            مهندسی برای <span className="text-gold">عملکرد واقعی</span>
          </h2>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <p className="mt-7 max-w-xl text-sm leading-9 text-primary-foreground/70 sm:text-base sm:leading-10">
            ما معتقدیم یک ماشین صنعتی فقط مجموعه‌ای از قطعات نیست؛ بلکه بخشی از یک سیستم تولید است.
            به همین دلیل در طراحی و ساخت، عملکرد، پایداری، سهولت استفاده و نیاز واقعی تولید را در
            کنار یکدیگر در نظر می‌گیریم.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative lg:-my-16">
          <span
            className="pointer-events-none absolute -top-4 -right-4 h-24 w-24 border-t border-r border-gold/50"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden">
            <img
              src={philosophy}
              alt="جزئیات دقیق مکانیزم ماشین‌آلات بسته‌بندی"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-72 w-full object-cover sm:h-96 lg:h-[34rem]"
            />
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
