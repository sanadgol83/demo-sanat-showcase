import { createFileRoute } from "@tanstack/react-router";
import factory from "@/assets/factory-wide.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { CTASection } from "@/components/cta-section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات | دمو صنعت" },
      {
        name: "description",
        content:
          "مجموعه‌ای از ماشین‌آلات مهندسی‌شده دمو صنعت برای خطوط بسته‌بندی صنایع غذایی و دارویی.",
      },
      { property: "og:title", content: "محصولات | دمو صنعت" },
      {
        property: "og:description",
        content: "ماشین‌آلات بسته‌بندی: تری‌بلوک، شرینک پک، لیبل زن، پاستوریزاتور و بیشتر.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={factory}
          alt="سالن تولید ماشین‌آلات بسته‌بندی"
          width={1920}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/80 to-charcoal/40" />
        <span
          className="absolute top-1/2 right-[-40px] hidden h-40 w-40 -translate-y-1/2 rotate-45 border border-gold/50 lg:block"
          aria-hidden="true"
        />
        <div className="container-x relative py-24 lg:py-32">
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            محصولات ما
          </h1>
          <span className="gold-rule mt-5" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-sm leading-9 text-primary-foreground/70 sm:text-base">
            مجموعه‌ای از ماشین‌آلات مهندسی‌شده برای خطوط بسته‌بندی
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CTASection
        title="راهکار مناسب خط تولید خود را پیدا کنید"
        description="تیم مهندسی دمو صنعت آماده است برای انتخاب مناسب‌ترین راهکار با شما همراه باشد."
      />
    </>
  );
}
