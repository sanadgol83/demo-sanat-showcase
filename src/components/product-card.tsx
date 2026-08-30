import { useDemoModal } from "./demo-modal";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { open } = useDemoModal();

  return (
    <article className="group relative flex flex-col border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift">
      <div className="relative overflow-hidden bg-muted/60">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={700}
          className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-charcoal/90 px-3 py-1 text-[11px] tracking-widest text-primary-foreground">
          {product.model}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
        <span className="gold-rule mt-3 w-8 transition-all duration-300 group-hover:w-16" />
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
          {product.description}
        </p>
        <button
          onClick={open}
          className="mt-6 self-start text-sm font-medium text-gold transition-all hover:opacity-80"
        >
          مشاهده جزئیات ←
        </button>
      </div>
    </article>
  );
}
