import { DraftingCompass, Factory, LifeBuoy } from "lucide-react";
import { Reveal } from "@/components/reveal";

const items = [
  {
    no: "۰۱",
    icon: DraftingCompass,
    title: "طراحی مهندسی",
    text: "طراحی ماشین‌آلات و راهکارهای متناسب با نیاز هر خط تولید.",
  },
  {
    no: "۰۲",
    icon: Factory,
    title: "ساخت و تولید",
    text: "تولید تجهیزات با تمرکز بر دقت، کیفیت و عملکرد پایدار.",
  },
  {
    no: "۰۳",
    icon: LifeBuoy,
    title: "راه‌اندازی و پشتیبانی",
    text: "همراهی تخصصی از زمان انتخاب تجهیزات تا راه‌اندازی و خدمات پس از فروش.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="container-x py-16 sm:py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          چه کاری انجام می‌دهیم؟
        </h2>
        <span className="gold-rule mt-5" aria-hidden="true" />
        <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
          از ایده تا راهکار مهندسی‌شده برای خط تولید
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px border-t border-border bg-border sm:mt-16 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.no}
            delay={i * 110}
            className={`group relative bg-background px-6 pt-10 pb-12 sm:px-8 ${
              i === 1 ? "lg:pt-20" : ""
            } ${i === 2 ? "lg:pt-32" : ""}`}
          >
            <span className="block text-4xl leading-none font-extrabold text-muted sm:text-5xl">
              {item.no}
            </span>
            <item.icon className="mt-6 h-6 w-6 text-gold" />
            <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
            <span
              className="mt-4 block h-px w-10 bg-gold transition-[width] duration-500 ease-out group-hover:w-20"
              aria-hidden="true"
            />
            <p className="mt-5 max-w-sm text-sm leading-8 text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
