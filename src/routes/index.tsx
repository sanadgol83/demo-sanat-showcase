import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, LifeBuoy, ShieldCheck } from "lucide-react";
import heroMachine from "@/assets/hero-machine.jpg";
import story from "@/assets/story.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { useDemoModal } from "@/components/demo-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "دمو صنعت | مهندسی برتر در صنعت بسته‌بندی" },
      {
        name: "description",
        content:
          "دمو صنعت با تمرکز بر طراحی و تولید ماشین‌آلات بسته‌بندی، راهکارهای مهندسی‌شده برای خطوط تولید صنایع غذایی و دارویی ارائه می‌دهد.",
      },
      { property: "og:title", content: "دمو صنعت | مهندسی برتر در صنعت بسته‌بندی" },
      {
        property: "og:description",
        content: "ماشین‌آلات بسته‌بندی مهندسی‌شده برای صنایع غذایی و دارویی.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Award,
    title: "تجربه صنعتی",
    text: "همکاری با بزرگ‌ترین واحدهای تولیدی صنایع غذایی و دارویی کشور.",
  },
  {
    icon: GraduationCap,
    title: "مهندسی و تخصص",
    text: "تیمی از مهندسان با رویکرد راهکارمحور و طراحی سفارشی.",
  },
  {
    icon: ShieldCheck,
    title: "کیفیت و استاندارد",
    text: "تولید مطابق استانداردهای روز و کنترل کیفیت مرحله‌به‌مرحله.",
  },
  {
    icon: LifeBuoy,
    title: "خدمات پس از فروش",
    text: "پشتیبانی فنی و تأمین قطعات یدکی در سراسر کشور.",
  },
];

function Home() {
  const { open } = useDemoModal();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <span
          className="pointer-events-none absolute -top-24 -left-24 hidden h-96 w-96 rotate-45 border border-gold/25 lg:block"
          aria-hidden="true"
        />
        <span
          className="grid-dots pointer-events-none absolute right-0 bottom-8 h-32 w-40 opacity-40"
          aria-hidden="true"
        />
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
          <div className="reveal">
            <span className="text-xs font-medium tracking-[0.35em] text-gold">
              بیش از ۴۰ سال تجربه
            </span>
            <h1 className="mt-5 text-3xl leading-[1.5] font-extrabold text-foreground sm:text-4xl md:text-5xl md:leading-[1.4]">
              مهندسی برتر در
              <br />
              <span className="text-gold">صنعت بسته‌بندی</span>
            </h1>
            <span className="gold-rule mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-lg text-sm leading-9 text-muted-foreground sm:text-base">
              دمو صنعت با تمرکز بر طراحی و تولید ماشین‌آلات بسته‌بندی، راهکارهای مهندسی‌شده‌ای
              برای خطوط تولید صنایع غذایی و دارویی ارائه می‌دهد.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex h-12 items-center justify-center bg-gold px-8 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-soft"
              >
                مشاهده محصولات
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center border border-charcoal px-8 text-sm font-semibold text-foreground transition-colors hover:bg-charcoal hover:text-primary-foreground"
              >
                تماس با ما
              </Link>
            </div>
          </div>
          <div className="relative">
            <span
              className="absolute -top-5 -right-5 hidden h-32 w-32 border-t border-r border-gold/60 lg:block"
              aria-hidden="true"
            />
            <img
              src={heroMachine}
              alt="دستگاه بسته‌بندی صنعتی دمو صنعت"
              width={1400}
              height={1100}
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x py-20">
        <SectionHeading
          title="محصولات منتخب"
          subtitle="راهکارهای مهندسی‌شده برای خطوط بسته‌بندی"
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <StatsSection />

      {/* WHY */}
      <section className="container-x py-20">
        <SectionHeading title="چرا دمو صنعت؟" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border-r border-border pr-6">
              <f.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative">
        <div className="relative grid lg:grid-cols-2">
          <img
            src={story}
            alt="جوشکاری صنعتی در کارگاه ساخت ماشین‌آلات"
            loading="lazy"
            width={1600}
            height={900}
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="relative flex items-center bg-charcoal px-6 py-16 sm:px-14">
            <span
              className="grid-dots absolute top-0 left-0 h-28 w-28 opacity-25"
              aria-hidden="true"
            />
            <div className="relative max-w-lg">
              <h2 className="text-2xl leading-[1.6] font-bold text-primary-foreground sm:text-3xl">
                از طراحی تا اجرای کامل خط تولید
              </h2>
              <span className="gold-rule mt-5" aria-hidden="true" />
              <p className="mt-6 text-sm leading-9 text-primary-foreground/65">
                ترکیب دانش مهندسی، تجربه صنعتی و شناخت نیازهای تولید، مسیر دمو صنعت را در ارائه
                راهکارهای حرفه‌ای شکل می‌دهد.
              </p>
              <button
                onClick={open}
                className="mt-8 inline-flex h-12 items-center justify-center border border-gold px-8 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                درباره ما
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CTASection
          title="راهکار مناسب خط تولید خود را پیدا کنید"
          description="برای انتخاب ماشین‌آلات مناسب و دریافت مشاوره تخصصی با کارشناسان دمو صنعت در ارتباط باشید."
        />
      </div>
    </>
  );
}
