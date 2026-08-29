import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/clinic";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full bg-accent/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 -z-10 size-[30rem] rounded-full bg-teal/10 blur-3xl"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-primary uppercase shadow-soft">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Nova Esperança — Paraná
          </span>

          <h1 className="mt-6 text-[2.1rem] leading-[1.1] font-bold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Cuidado médico com <span className="text-gradient-brand">confiança, acolhimento</span> e
            qualidade em Nova Esperança.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na Clínica Médica Nova Esperança — Clinicor, você encontra atendimento médico com uma
            equipe preparada para cuidar da sua saúde com atenção e respeito.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="pillLg" className="w-full sm:w-auto">
              <a href="#contato">
                Agendar atendimento
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="softline" size="pillLg" className="w-full sm:w-auto">
              <a href="#localizacao">
                <MapPin className="size-4" aria-hidden="true" />
                Como chegar
              </a>
            </Button>
          </div>

          <a
            href={clinic.phoneHref}
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-secondary-foreground transition-colors hover:text-primary"
          >
            <span className="relative inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
              <span
                aria-hidden="true"
                className="animate-pulse-soft absolute inset-0 rounded-full bg-teal/25"
              />
              <Phone className="relative size-4" aria-hidden="true" />
            </span>
            {clinic.phone}
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImg}
              alt="Recepção ampla e iluminada de uma clínica médica moderna, com poltronas azuis e plantas"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:absolute sm:-bottom-8 sm:left-6 sm:mt-0 sm:w-[22rem] sm:grid-cols-1 sm:gap-0 sm:rounded-2xl sm:border sm:border-border sm:bg-card sm:p-5 sm:shadow-lift">
            <p className="hidden text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase sm:block">
              Atendimento
            </p>
            <p className="col-span-3 rounded-xl border border-border bg-card p-3 text-sm leading-relaxed text-secondary-foreground sm:mt-2 sm:border-0 sm:bg-transparent sm:p-0">
              Cardiologia e atendimento médico com foco no cuidado de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
