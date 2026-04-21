import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Star } from "lucide-react";
import teacherImg from "@/assets/teacher-hero.png";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/our-teacher")({
  head: () => ({
    meta: [
      { title: "Our Teacher — Qari Sajid Hussain Sialvi" },
      { name: "description", content: "Meet Qari Sajid Hussain Sialvi — passionate Quran educator specializing in Tajweed, Tafseer, and Islamic character building." },
      { property: "og:title", content: "Our Teacher — Qari Sajid Hussain Sialvi" },
      { property: "og:description", content: "Passionate Quran teacher dedicated to Tajweed, understanding, and character building." },
      { property: "og:image", content: teacherImg },
      { name: "twitter:image", content: teacherImg },
    ],
  }),
  component: TeacherPage,
});

const teaches = [
  "Quran Nazra with Tajweed",
  "Hifz (Memorization) with repetition methods",
  "Tafseer (Understanding of Quran)",
  "Namaz & Duas",
  "Islamic Manners & Character Building",
];
const approach = [
  "Simple and easy teaching methods",
  "Step-by-step learning",
  "Interactive and engaging classes",
  "Love, respect and discipline",
  "Regular assessments & feedback",
];

function TeacherPage() {
  return (
    <>
      <section className="pattern-islamic relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              ✦ Our Teacher ✦
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary md:text-5xl">
              QARI SAJID HUSSAIN SIALVI
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              A passionate Quran educator who believes in teaching the Quran
              with Tajweed, understanding, and character. His mission is to
              help students truly connect with the Quran.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Tajweed Expert", "Hifz Coach", "Patient & Caring"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  <Star className="h-3 w-3 text-gold" /> {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-3"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-gold/30 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-gold/30 bg-white shadow-elegant">
              <img src={teacherImg} alt="Qari Sajid Hussain Sialvi" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="rounded-3xl bg-secondary/60 p-8 shadow-soft md:p-12">
              <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary">What He Teaches</h3>
                  <ul className="mt-5 space-y-3">
                    {teaches.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-white to-secondary shadow-card">
                    <BookOpen className="h-14 w-14 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-primary">Teaching Approach</h3>
                  <ul className="mt-5 space-y-3">
                    {approach.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="text-5xl font-bold leading-none text-gold/30">"</div>
              <p className="mt-2 font-display text-lg leading-relaxed text-foreground md:text-xl">
                My aim is not just to teach the Quran, but to help students
                understand it, live it, and share its beauty with the world.
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">— Qari Sajid Hussain Sialvi</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
