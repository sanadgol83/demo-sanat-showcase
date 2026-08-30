import { Reveal } from "@/components/reveal";

const stats = [
  { value: "۴۰+", label: "سال تجربه" },
  { value: "۱۳۶۳", label: "آغاز فعالیت" },
  { value: "۳۵+", label: "متخصص و نیروی فنی" },
  { value: "۲۰+", label: "سال صادرات" },
];

export function HeritageStats() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <span
        className="grid-dots absolute top-0 right-0 h-40 w-40 opacity-25"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            تجربه‌ای که ساخته شده است
          </h2>
          <span className="gold-rule mt-5" aria-hidden="true" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`px-3 sm:px-6 ${
                i > 0 ? "border-r border-primary-foreground/12" : ""
              } ${i === 2 ? "lg:border-r" : ""}`}
            >
              <div className="text-4xl leading-none font-extrabold text-gold sm:text-5xl md:text-6xl">
                {s.value}
              </div>
              <div className="mt-4 text-xs text-primary-foreground/55 sm:text-sm">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
