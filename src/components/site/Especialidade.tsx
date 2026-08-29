import { ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import cardiologyImg from "@/assets/cardiology.jpg";

export function Especialidade() {
  return (
    <section id="especialidades" className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
            <img
              src={cardiologyImg}
              alt="Estetoscópio sobre superfície azul ao lado de uma linha de eletrocardiograma"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Especialidade
          </p>
          <h2 className="mt-3 flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <HeartPulse className="size-8 text-teal" aria-hidden="true" />
            Cardiologia
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Cuide da saúde do seu coração com acompanhamento médico especializado. A Clinicor
            oferece atendimento em cardiologia para avaliação, prevenção e acompanhamento da saúde
            cardiovascular.
          </p>
          <Button asChild variant="brand" size="pill" className="mt-8">
            <a href="#contato">
              Saiba mais
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
