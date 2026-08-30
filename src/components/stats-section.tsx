import { Building2, Cog, CalendarDays, Factory } from "lucide-react";

const stats = [
  { icon: CalendarDays, value: "۱۳۶۳", label: "شروع فعالیت" },
  { icon: Cog, value: "+۴۰", label: "سال تجربه" },
  { icon: Factory, value: "+۸۰", label: "نوع دستگاه" },
  { icon: Building2, value: "+۱۲۰۰", label: "کارخانه و مشتری" },
];

export function StatsSection() {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden bg-charcoal">
        <span
          className="grid-dots absolute top-0 right-0 h-32 w-32 opacity-30"
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-2 gap-y-10 px-6 py-14 sm:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 text-center lg:px-8 ${i > 0 ? "lg:border-l-0 lg:border-r lg:border-primary-foreground/12" : ""}`}
            >
              <s.icon className="mx-auto h-6 w-6 text-gold" />
              <div className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-primary-foreground/55 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
