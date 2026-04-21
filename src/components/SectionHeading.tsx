import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold ${center ? "" : ""}`}>
          ✦ {eyebrow} ✦
        </div>
      )}
      <h2 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`mt-4 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gold/60" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold/60" />
      </div>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
