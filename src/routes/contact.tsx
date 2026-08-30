import { createFileRoute } from "@tanstack/react-router";
import { Clock, Factory, Headset, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما | دمو صنعت" },
      {
        name: "description",
        content:
          "برای دریافت مشاوره و اطلاعات بیشتر درباره ماشین‌آلات بسته‌بندی با کارشناسان دمو صنعت در ارتباط باشید.",
      },
      { property: "og:title", content: "تماس با ما | دمو صنعت" },
      {
        property: "og:description",
        content: "آدرس، تلفن و فرم ارتباط با کارشناسان دمو صنعت.",
      },
    ],
  }),
  component: Contact,
});

const services = [
  { icon: ShieldCheck, title: "تضمین کیفیت", text: "ماشین‌آلات با بالاترین کیفیت" },
  { icon: Headset, title: "پشتیبانی حرفه‌ای", text: "همراه شما در تمام مراحل" },
  { icon: Sparkles, title: "مشاوره تخصصی", text: "ارائه بهترین راهکارها" },
  { icon: Clock, title: "پاسخ‌گویی سریع", text: "پاسخگویی در کوتاه‌ترین زمان" },
];

function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={contactHero}
          alt="میز کار کارشناسان فروش"
          width={1600}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="container-x relative py-24 lg:py-28">
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            تماس با ما
          </h1>
          <span className="gold-rule mt-5" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-sm leading-9 text-primary-foreground/70 sm:text-base">
            برای دریافت مشاوره و اطلاعات بیشتر درباره ماشین‌آلات، با کارشناسان دمو صنعت در ارتباط
            باشید.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-8 py-20 lg:grid-cols-2">
        <div className="border border-border bg-surface p-7 shadow-card sm:p-9">
          <h2 className="text-lg font-bold text-foreground">اطلاعات تماس</h2>
          <span className="gold-rule mt-4" aria-hidden="true" />

          <div className="mt-8 space-y-7 text-sm">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <div className="font-semibold text-foreground">دفتر فروش</div>
                <p className="mt-2 leading-8 text-muted-foreground">
                  تهران، شهرقدس، خیابان صنعت دوم، پلاک ۷
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <div className="font-semibold text-foreground">تلفن</div>
                <p className="mt-2 text-muted-foreground">۰۲۱-۴۶۸۲۴۲۴۰</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <div className="font-semibold text-foreground">ایمیل</div>
                <p className="mt-2 text-muted-foreground" dir="ltr">
                  info@demo-sanat.ir
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 border-t border-border pt-7">
            <div className="flex gap-4 text-sm">
              <Factory className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <div className="font-semibold text-foreground">کارخانه</div>
                <p className="mt-2 leading-8 text-muted-foreground">
                  شهریار، شهرک صنعتی فاز ۳، خیابان بعثت ۲۰، خیابان حکمت، پلاک ۱۷۰
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      {/* MAP */}
      <section className="container-x pb-20">
        <div className="relative h-80 overflow-hidden border border-border bg-muted/50 sm:h-96">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 bottom-0 left-1/4 w-6 -rotate-12 bg-border/70"
            aria-hidden="true"
          />
          <div className="absolute top-1/3 right-0 left-0 h-5 bg-border/70" aria-hidden="true" />
          <div
            className="absolute top-2/3 right-0 left-0 h-3 rotate-2 bg-border/50"
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-gold drop-shadow-sm" fill="currentColor" />
              <span className="mt-2 bg-surface px-4 py-2 text-xs font-medium text-foreground shadow-card">
                دفتر فروش دمو صنعت
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="container-x pb-24">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-surface px-6 py-8 text-center">
              <s.icon className="mx-auto h-6 w-6 text-gold" />
              <h3 className="mt-4 text-sm font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
