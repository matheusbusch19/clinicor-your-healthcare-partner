import { HeartHandshake, Home, MapPinned, Stethoscope } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "Atendimento atencioso, respeitoso e focado nas necessidades de cada paciente.",
  },
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    text: "Um espaço organizado e preparado para proporcionar uma experiência confortável.",
  },
  {
    icon: Stethoscope,
    title: "Profissionais Qualificados",
    text: "Atendimento médico realizado com responsabilidade, experiência e compromisso.",
  },
  {
    icon: MapPinned,
    title: "Localização Conveniente",
    text: "Estamos no centro de Nova Esperança, facilitando o acesso dos nossos pacientes.",
  },
];

export function Diferenciais() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Por que escolher a Clinicor
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Um atendimento pensado para você
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
