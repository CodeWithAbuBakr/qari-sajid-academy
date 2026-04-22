import { Users, Sparkles, Globe, UserCheck, Clock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/lib/seo";

const features = [
  { icon: Users, title: "Classes for Kids & Adults", text: "Customized lesson plans suited for every age and learning level." },
  { icon: Sparkles, title: "Simple & Effective Methods", text: "Easy-to-follow, engaging teaching that helps students progress steadily." },
  { icon: Globe, title: "Online Classes Available", text: "Join from anywhere in the world — flexible, convenient, and effective." },
  { icon: UserCheck, title: "Personal Attention", text: "Each student receives individual focus, feedback, and care." },
  { icon: Clock, title: "Flexible Timings", text: "Pick a time that fits your schedule — morning or evening." },
  { icon: ShieldCheck, title: "Trusted & Authentic", text: "Authentic Tajweed, sincere intentions, and a respectful environment." },
];

export default function FeaturesPage() {
  return (
    <>
      <SEO
        title="Features — Qari Sajid Quran Academy"
        description="Online Quran classes for kids and adults with simple methods, personal attention, flexible timings and authentic teaching."
      />
      <section className="pattern-islamic bg-gradient-hero py-20 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Our Features</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need for a beautiful, consistent Quran learning journey.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-5 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold/10 transition-smooth group-hover:scale-125" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-primary">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
