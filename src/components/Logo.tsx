import { BookOpen } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
        <BookOpen className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold tracking-wide text-primary">
          QARI SAJID
        </div>
        <div className="text-[10px] font-semibold tracking-[0.18em] text-gold">
          QURAN ACADEMY
        </div>
      </div>
    </div>
  );
}
