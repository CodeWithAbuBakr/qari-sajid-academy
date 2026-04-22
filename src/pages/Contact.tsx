import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { SEO } from "@/lib/seo";

const contacts = [
  { icon: Phone, label: "Call Us", value: "+92 307 8654186", href: "tel:+923078654186", color: "primary" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 346 8654186", href: "https://wa.me/923468654186", color: "gold", target: "_blank" },
  { icon: Mail, label: "Email", value: "jeesajid029@gmail.com", href: "mailto:jeesajid029@gmail.com", color: "primary" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbw0fEZzb5r4upOaTnNo6BNBgIjIlQMT8xd-a3fmrWtwaaTo_G1kGM8QjgKBZG2vYmnKUQ/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Contact Us — Qari Sajid Quran Academy"
        description="Get in touch to enroll, ask questions, or learn more about our online Quran classes for kids and adults."
      />
      <section className="pattern-islamic bg-gradient-hero py-20 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              ✦ Contact Us ✦
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold text-primary md:text-5xl">Get in Touch</h1>
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
                <a href={c.href} target={c.target} rel={c.target ? "noreferrer" : undefined} className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${c.color === "gold" ? "bg-yellow-500" : "bg-green-600"}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold text-primary">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid gap-8 px-4 md:px-8 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9">
              <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
              <div className="mt-6 grid gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="w-full rounded-xl border px-4 py-3" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-xl border px-4 py-3" />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="w-full rounded-xl border px-4 py-3" />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} required className="w-full rounded-xl border px-4 py-3" />
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white">
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {success && <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>}
              </div>
            </form>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border shadow-soft">
              <iframe title="Lahore Location" src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed" className="h-[420px] w-full border-0" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
