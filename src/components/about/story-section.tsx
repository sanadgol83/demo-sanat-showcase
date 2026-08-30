import aboutStory from "@/assets/about-story.jpg";
import { Reveal } from "@/components/reveal";

export function StorySection() {
  return (
    <section className="container-x py-16 sm:py-20 lg:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <span className="block text-xs font-medium tracking-[0.35em] text-gold">داستان ما</span>
          <h2 className="mt-4 text-2xl leading-[1.6] font-bold text-foreground sm:text-3xl md:text-4xl md:leading-[1.5]">
            مسیری که با مهندسی
            <br />
            <span className="text-gold">شکل گرفت</span>
          </h2>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <p className="mt-7 max-w-xl border-r-2 border-gold/60 pr-5 text-base leading-9 font-medium text-foreground sm:text-lg sm:leading-10">
            دمو صنعت مسیر خود را با هدف ارائه راهکارهای مهندسی‌شده برای صنعت بسته‌بندی آغاز کرد و در
            طول سال‌ها، با تکیه بر تجربه، دانش فنی و شناخت نیازهای تولید، دامنه فعالیت خود را توسعه
            داده است.
          </p>
          <p className="mt-7 max-w-xl text-sm leading-9 text-muted-foreground sm:text-base">
            امروز دمو صنعت تلاش می‌کند با ترکیب تجربه صنعتی، مهندسی دقیق و نگاه رو به آینده،
            ماشین‌آلات و راهکارهایی متناسب با نیاز خطوط تولید ارائه کند.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mt-2 lg:mt-16">
          <span
            className="pointer-events-none absolute -top-6 -left-6 hidden h-28 w-28 border-t border-l border-gold/60 lg:block"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden bg-muted">
            <img
              src={aboutStory}
              alt="ساخت شاسی ماشین‌آلات صنعتی در کارگاه"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04] sm:h-80 lg:h-[30rem]"
            />
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs tracking-[0.3em] text-muted-foreground">ساخت و مونتاژ</span>
            <span className="text-xs font-bold text-gold">دمو صنعت</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
