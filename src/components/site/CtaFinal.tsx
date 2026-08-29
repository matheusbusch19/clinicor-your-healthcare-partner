import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaFinal() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-deep px-7 py-16 text-center shadow-lift sm:px-12 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-teal/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-sky/20 blur-3xl"
            />
            <h2 className="relative text-3xl font-bold text-deep-foreground sm:text-4xl">
              Seu cuidado merece atenção.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
              Entre em contato com a Clínica Médica Nova Esperança e obtenha informações sobre
              nossos atendimentos.
            </p>
            <Button asChild variant="onDeep" size="pillLg" className="relative mt-9">
              <a href="#contato">
                Entre em contato
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
