import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about-clinic.jpg";

const indicadores = [
  "Atendimento médico",
  "Ambiente organizado",
  "Localização central",
  "Foco no paciente",
];

export function Sobre() {
  return (
    <section id="clinica" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Sobre a clínica
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Clínica Médica Nova Esperança
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Localizada no coração de Nova Esperança, no Paraná, a Clinicor busca oferecer aos
            pacientes um atendimento médico baseado em confiança, respeito e cuidado.
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {indicadores.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium text-secondary-foreground shadow-soft transition-colors hover:border-primary/30"
              >
                <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 hidden size-32 rounded-3xl bg-accent lg:block"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
              <img
                src={aboutImg}
                alt="Consultório médico limpo e organizado, com maca, mesa de atendimento e estetoscópio"
                width={1200}
                height={1408}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
