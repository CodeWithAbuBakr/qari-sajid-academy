import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Phone, Award, Users, BookOpenCheck, HeartHandshake, Sparkles } from "lucide-react";
import teacherImg from "@/assets/teacher-hero.png";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qari Sajid Quran Academy — Online Quran Classes" },
      {
        name: "description",
        content:
          "Online Quran academy by Qari Sajid Hussain Sialvi. Learn Quran with Tajweed, Salah, Duas and Islamic character building for kids and adults.",
      },
      { property: "og:title", content: "Qari Sajid Quran Academy" },
      {
        property: "og:description",
        content:
          "Learn the Quran with Tajweed, understanding and character building.",
      },
    ],
  }),
  component: HomePage,
});

const teachWhat = [
  { icon: BookOpenCheck, title: "Quran Nazra with Tajweed", text: "Read the Holy Quran with correct pronunciation." },
  { icon: Sparkles, title: "Daily Islamic Duas", text: "Memorize and understand essential daily supplications." },
  { icon: HeartHandshake, title: "Salah & its Importance", text: "Step-by-step prayer training for every age." },
  { icon: Award, title: "Islamic Manners", text: "Build strong character and good behaviour." },
  { icon: Users, title: "Islamic Lifestyle Guidance", text: "Comprehensive guidance for children and adults." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pattern-islamic relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 sm:px-6 md:px-8 md:py-10 lg:grid-cols-2 lg:gap-6 lg:py-10">

          {/* TEXT CONTENT */}
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5 text-gold" />
              Online Quran Academy
            </span>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              QARI SAJID <br />
              <span className="text-primary-glow">HUSSAIN SIALVI</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg">
              Dedicated to spreading the light of the Quran with Tajweed,
              understanding, and character building — for a better Ummah,
              one student at a time.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <GraduationCap className="h-4 w-4" /> Enroll Now
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl border border-primary/25 bg-white px-6 py-3 font-semibold text-primary shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/50"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Award, t: "Experienced", s: "Years of Teaching" },
                { icon: Users, t: "Student Focused", s: "Personal Attention" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 shadow-soft backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold/20 text-gold">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-primary">{b.t}</div>
                    <div className="text-xs text-muted-foreground">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 mt-6 lg:mt-0"
          >
            <div className="absolute -inset-2 sm:-inset-4 -z-10 rounded-2xl sm:rounded-[2rem] bg-gradient-gold/30 blur-xl sm:blur-2xl" />

            <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] border border-gold/30 bg-white shadow-elegant">
              <img
                src={teacherImg}
                alt="Qari Sajid Hussain Sialvi teaching Quran to students"
                className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* MISSION / ABOUT BRIEF */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="About Qari Sajid"
            title="A Teacher with a Purpose"
            subtitle="Qari Sajid Hussain Sialvi is a passionate Quran educator who believes in teaching the Quran with Tajweed and understanding. His mission is to help students connect with the Quran and implement its teachings in daily life."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Award, title: "Qualified & Experienced", text: "Years of experience in Quran teaching with proper Tajweed, Tafseer and Islamic studies for all age groups.", color: "primary" as const },
              { icon: Users, title: "Student Centered", text: "Focus on each student's improvement with patience, care and personalized guidance.", color: "gold" as const },
              { icon: HeartHandshake, title: "Values & Character", text: "Encourages Islamic manners, discipline, and good character along with Quran learning.", color: "primary" as const },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-soft transition-smooth group-hover:scale-110 ${c.color === "gold" ? "bg-gradient-gold" : "bg-gradient-primary"
                      }`}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE TEACH */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="What We Teach" title="A Complete Islamic Foundation" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teachWhat.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
              <div className="text-5xl font-bold text-gold/30 leading-none">"</div>
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
