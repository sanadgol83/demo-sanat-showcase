export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "text-center" : "text-right"}>
      {eyebrow ? (
        <span className="mb-3 block text-xs font-medium tracking-[0.35em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-2xl font-bold sm:text-3xl md:text-4xl ${dark ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      <span
        className={`gold-rule mt-5 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle ? (
        <p
          className={`mt-5 text-sm leading-8 sm:text-base ${dark ? "text-primary-foreground/70" : "text-muted-foreground"} ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
