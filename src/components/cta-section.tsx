import { Link } from "@tanstack/react-router";
import { Headset } from "lucide-react";

export function CTASection({ title, description }: { title: string; description: string }) {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden border border-primary-foreground/10 bg-charcoal px-6 py-14 sm:px-12">
        <span
          className="grid-dots absolute bottom-0 left-0 h-36 w-36 opacity-25"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">{title}</h2>
            <span className="gold-rule mt-4" aria-hidden="true" />
            <p className="mt-5 text-sm leading-8 text-primary-foreground/65">{description}</p>
          </div>
          <div className="flex items-center gap-6">
            <span
              className="hidden h-20 w-20 rotate-45 place-items-center border border-gold/40 lg:grid"
              aria-hidden="true"
            >
              <Headset className="h-7 w-7 -rotate-45 text-gold" />
            </span>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center bg-gold px-8 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-soft"
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
