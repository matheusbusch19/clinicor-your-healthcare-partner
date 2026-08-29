import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { clinic } from "@/lib/clinic";

const avaliacoes = [
  "Ótimo atendimento. Médico educado. Clínica limpa e organizada.",
  "Recomendo.",
];

export function Avaliacoes() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Avaliações
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-foreground">
              {clinic.rating.value}
            </span>
            <span className="text-lg text-muted-foreground">/ {clinic.rating.scale}</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className={
                  i < 4 ? "size-4 fill-teal text-teal" : "size-4 text-muted-foreground/40"
                }
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{clinic.rating.count} avaliações</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {avaliacoes.map((texto, i) => (
            <Reveal key={texto} delay={i * 100}>
              <blockquote className="h-full rounded-2xl border border-border bg-card p-7 text-sm leading-relaxed text-secondary-foreground shadow-soft">
                “{texto}”
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
