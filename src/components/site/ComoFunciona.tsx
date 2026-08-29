import { Reveal } from "./Reveal";

const etapas = [
  {
    step: "01",
    title: "Entre em contato",
    text: "Fale conosco pelo telefone para obter informações sobre atendimento.",
  },
  {
    step: "02",
    title: "Escolha o atendimento",
    text: "Consulte disponibilidade e informações sobre a especialidade desejada.",
  },
  {
    step: "03",
    title: "Compareça à clínica",
    text: "Venha até nossa unidade em Nova Esperança.",
  },
];

export function ComoFunciona() {
  return (
    <section id="atendimento" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Três passos simples para ser atendido
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {etapas.map((etapa, i) => (
            <Reveal key={etapa.step} delay={i * 100} as="li">
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-5xl font-bold text-accent">{etapa.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{etapa.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{etapa.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
