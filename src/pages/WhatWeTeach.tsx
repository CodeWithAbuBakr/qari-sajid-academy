import { BookOpenCheck, Sparkles, HeartHandshake, Award, Users, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/lib/seo";

const items = [
  { icon: BookOpenCheck, title: "Quran reading with Tajweed", text: "Children and adults are taught to read the Holy Quran with proper pronunciation and Tajweed rules." },
  { icon: Sparkles, title: "Daily Islamic Duas", text: "Important supplications for everyday life — memorization with meaning and context." },
  { icon: HeartHandshake, title: "Complete method of Salah", text: "Step-by-step guidance on how to perform Salah correctly and understand its importance." },
  { icon: Award, title: "Islamic manners & character", text: "Good manners, respect, honesty and Islamic values are nurtured from a young age." },
  { icon: Users, title: "Islamic lifestyle guidance", text: "Comprehensive guidance for children to live a balanced and meaningful Islamic life." },
];

export default function WhatWeTeachPage() {
  return (
    <>
      <SEO
        title="What We Teach — Qari Sajid Quran Academy"
        description="Quran reading with Tajweed, Daily Duas, Salah training, Islamic manners and complete lifestyle guidance for children and adults."
      />
      <section className="pattern-islamic bg-gradient-hero py-20 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">What We Teach</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A structured and friendly learning environment for both children and adults.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:scale-110">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Curriculum Highlights" title="Our Teaching Approach" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {[
              "Simple and easy teaching methods",
              "Step-by-step learning at student's pace",
              "Interactive and engaging classes",
              "Love, respect and discipline",
              "Regular assessments & feedback",
              "Personal attention for every student",
            ].map((line, i) => (
              <Reveal key={line} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-smooth hover:border-gold/40">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground md:text-base">{line}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
