import { Link } from "@tanstack/react-router";
import { GraduationCap, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner() {
  return (
    <section className="container mx-auto px-4 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-8 shadow-elegant md:p-12">
          <div className="pattern-islamic absolute inset-0 opacity-20" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Learn the Quran with a Teacher Who Cares
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80 md:text-base">
                Join our online classes and start your beautiful journey with the Quran today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 font-semibold text-gold-foreground shadow-gold transition-smooth hover:-translate-y-0.5"
              >
                <GraduationCap className="h-4 w-4" /> Enroll Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/60 bg-white/5 px-6 py-3 font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
