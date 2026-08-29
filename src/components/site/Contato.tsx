import { useState, type FormEvent } from "react";
import { Info, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { clinic } from "@/lib/clinic";

export function Contato() {
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Contato</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Entre em contato com a Clinicor
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Estamos à disposição para fornecer informações sobre nossos atendimentos.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-soft">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Telefone
            </p>
            <p className="font-display mt-1 text-2xl font-bold text-foreground">{clinic.phone}</p>
            <Button asChild variant="brand" size="pillLg" className="mt-6 w-full">
              <a href={clinic.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Telefonar agora
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">Envie uma mensagem</h3>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="nome" className="text-sm font-medium text-secondary-foreground">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="text-sm font-medium text-secondary-foreground">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(44) 90000-0000"
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="text-sm font-medium text-secondary-foreground">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </div>
            </div>

            <Button type="submit" variant="teal" size="pillLg" className="mt-7 w-full">
              <Send className="size-4" aria-hidden="true" />
              Enviar mensagem
            </Button>

            <p
              role="status"
              aria-live="polite"
              className="mt-4 flex gap-2 text-xs leading-relaxed text-muted-foreground"
            >
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {notice ? (
                <span>
                  O envio de mensagens ainda não está ativo neste site. Para falar com a clínica,
                  ligue para{" "}
                  <a href={clinic.phoneHref} className="font-semibold text-primary underline">
                    {clinic.phone}
                  </a>
                  .
                </span>
              ) : (
                <span>
                  Este formulário ainda não realiza envios. O contato deve ser feito pelo telefone{" "}
                  {clinic.phone}.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
