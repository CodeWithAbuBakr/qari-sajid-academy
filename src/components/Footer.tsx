import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.18_0.04_160)] text-[oklch(0.95_0.012_95)]">
      <div className="pattern-islamic absolute inset-0 opacity-30" />
      <div className="container relative mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <div className="rounded-xl bg-white/5 p-3 backdrop-blur w-fit">
            <Logo />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Providing quality Quran education for kids & adults with love, care,
            and authentic Tajweed.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, MessageCircle, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/what-we-teach", l: "What We Teach" },
              { to: "/features", l: "Features" },
              { to: "/our-teacher", l: "Our Teacher" },
              { to: "/contact", l: "Contact Us" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to as "/"} className="transition-smooth hover:text-gold">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-gold">Our Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Quran Reading</li>
            <li>Hifz Program</li>
            <li>Tajweed Lessons</li>
            <li>Namaz & Duas</li>
            <li>Islamic Studies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-gold">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href="tel:+923078654186" className="flex items-center gap-2 hover:text-gold transition-smooth">
                <Phone className="h-4 w-4 text-gold" /> +92 307 8654186
              </a>
            </li>
            <li>
              <a href="https://wa.me/923468654186" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-smooth">
                <MessageCircle className="h-4 w-4 text-gold" /> +92 346 8654186
              </a>
            </li>
            <li>
              <a href="mailto:jeesajid029@gmail.com" className="flex items-center gap-2 hover:text-gold transition-smooth">
                <Mail className="h-4 w-4 text-gold" /> jeesajid029@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-white/60 md:px-8">
          © {new Date().getFullYear()} Qari Sajid Quran Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
