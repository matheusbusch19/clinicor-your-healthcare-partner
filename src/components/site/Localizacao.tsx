import { Clock, Instagram, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { clinic } from "@/lib/clinic";

export function Localizacao() {
  return (
    <section id="localizacao" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Localização
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Estamos em Nova Esperança
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                Endereço
              </h3>
              <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
                {clinic.address.street}
                <br />
                {clinic.address.district}
                <br />
                {clinic.address.city} — {clinic.address.state}
                <br />
                CEP: {clinic.address.zip}
              </address>
              <p className="mt-3 text-xs text-muted-foreground">{clinic.address.plusCode}</p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button asChild variant="brand" size="pill" className="w-full sm:w-auto">
                  <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="size-4" aria-hidden="true" />
                    Abrir no Google Maps
                  </a>
                </Button>
                <Button asChild variant="softline" size="pill" className="w-full sm:w-auto">
                  <a href={clinic.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="size-4" aria-hidden="true" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                Horário de atendimento
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Segunda a sexta-feira: consulte a clínica pelo telefone.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Os horários podem variar e devem ser confirmados diretamente com a clínica.
              </p>
              <a
                href={clinic.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-deep"
              >
                <Phone className="size-4" aria-hidden="true" />
                {clinic.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-2xl border border-border shadow-lift">
              <iframe
                title="Mapa com a localização da Clínica Médica Nova Esperança — Clinicor"
                src={clinic.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
