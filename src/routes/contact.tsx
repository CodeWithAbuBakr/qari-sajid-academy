import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Qari Sajid Quran Academy" },
      { name: "description", content: "Contact Qari Sajid Quran Academy in Lahore. Call, WhatsApp or email us to enroll in online Quran classes." },
      { property: "og:title", content: "Contact Us — Qari Sajid Quran Academy" },
      { property: "og:description", content: "Get in touch to enroll in online Quran classes for kids and adults." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  { icon: Phone, label: "Call Us", value: "+92 346 8654186", href: "tel:+923468654186", color: "primary" as const },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 307 8654186", href: "https://wa.me/923078654186", color: "gold" as const, target: "_blank" },
  { icon: Mail, label: "Email", value: "jeesajid029@gmail.com", href: "mailto:jeesajid029@gmail.com", color: "primary" as const },
];

function ContactPage() {
  return (
    <>
      <section className="pattern-islamic bg-gradient-hero py-20 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              ✦ Contact Us ✦
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold text-primary md:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We'd love to hear from you. Reach out to enroll, ask questions, or learn more about our classes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.target}
                  rel={c.target ? "noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
                >
                  <span
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-primary-foreground shadow-soft transition-smooth group-hover:scale-110 ${
                      c.color === "gold" ? "bg-gradient-gold" : "bg-gradient-primary"
                    }`}
                  >
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-semibold text-primary">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid gap-8 px-4 md:px-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9"
            >
              <h3 className="font-display text-2xl font-bold text-primary">Send a Message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill the form and we'll get back to you soon, in shaa Allah.
              </p>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-foreground">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground">Phone</label>
                    <input
                      type="tel"
                      placeholder="+92 ..."
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </form>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-5 py-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Location — Lahore, Pakistan</span>
              </div>
              <iframe
                title="Lahore Location"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
