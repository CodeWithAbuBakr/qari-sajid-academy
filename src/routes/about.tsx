import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Qari Sajid Quran Academy" },
      { name: "description", content: "Learn about our mission to provide proper Quran education to children and adults with Tajweed, Salah and Islamic character building." },
      { property: "og:title", content: "About Us — Qari Sajid Quran Academy" },
      { property: "og:description", content: "Our mission is to provide proper and effective Quran education to both children and adults." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pattern-islamic bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              ✦ About Us ✦
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
              Our Mission
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We provide proper and effective Quran education to both children and adults — rooted in Tajweed, understanding, and authentic Islamic values.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3 md:px-8">
          {[
            { icon: Target, title: "Our Vision", text: "To raise a generation deeply connected with the Quran — confident in recitation, sincere in practice, and noble in character." },
            { icon: Heart, title: "Our Values", text: "Patience, sincerity, respect, and excellence in teaching. Every student is treated with care and personal attention." },
            { icon: Sparkles, title: "Our Promise", text: "Authentic Tajweed, structured lessons, friendly environment, and consistent progress for every learner." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
