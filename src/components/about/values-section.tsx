import { Handshake, Lightbulb, LifeBuoy, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const values = [
  { icon: ShieldCheck, title: "کیفیت", text: "دقت در طراحی و ساخت" },
  { icon: Lightbulb, title: "نوآوری", text: "نگاه مداوم به فناوری و راهکارهای جدید" },
  { icon: Handshake, title: "اعتماد", text: "ساختن روابط بلندمدت با مشتریان" },
  { icon: LifeBuoy, title: "پشتیبانی", text: "همراهی پس از تحویل و راه‌اندازی" },
];

export function ValuesSection() {
  return (
    <section className="container-x py-16 sm:py-20 lg:py-28">
      <Reveal>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">ارزش‌های ما</h2>
        <span className="gold-rule mt-5" aria-hidden="true" />
      </Reveal>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 90} className="border-r border-border pr-6">
            <v.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
            <h3 className="mt-5 text-base font-bold text-foreground">{v.title}</h3>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">{v.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
