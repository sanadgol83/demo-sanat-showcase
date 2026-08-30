import { useState, type FormEvent } from "react";

const fields = [
  { name: "fullName", label: "نام و نام خانوادگی", type: "text" },
  { name: "phone", label: "شماره تماس", type: "tel" },
  { name: "email", label: "ایمیل", type: "email" },
  { name: "subject", label: "موضوع", type: "text" },
];

const inputClass =
  "h-12 w-full border border-border bg-surface px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-1 focus:ring-gold/40";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="border border-border bg-surface p-7 shadow-card sm:p-9">
      <h2 className="text-lg font-bold text-foreground">فرم ارسال پیام</h2>
      <span className="gold-rule mt-4" aria-hidden="true" />
      <form onSubmit={onSubmit} className="mt-7 space-y-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="mb-2 block text-xs text-muted-foreground">
              {f.label}
            </label>
            <input id={f.name} name={f.name} type={f.type} required className={inputClass} />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
            پیام
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass} h-auto py-3 leading-8`}
          />
        </div>
        <button
          type="submit"
          className="h-12 w-full bg-gold text-sm font-semibold text-charcoal transition-colors hover:bg-gold-soft sm:w-56"
        >
          ارسال درخواست
        </button>
        {sent ? (
          <p className="text-sm text-gold">پیام شما ثبت شد. (نسخه دمو — بدون ارسال واقعی)</p>
        ) : null}
      </form>
    </div>
  );
}
