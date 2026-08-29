import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Especialidade } from "@/components/site/Especialidade";
import { Sobre } from "@/components/site/Sobre";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Localizacao } from "@/components/site/Localizacao";
import { Contato } from "@/components/site/Contato";
import { Avaliacoes } from "@/components/site/Avaliacoes";
import { CtaFinal } from "@/components/site/CtaFinal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { clinic } from "@/lib/clinic";

const title = "Clínica Médica Nova Esperança | Clinicor";
const description =
  "Clínica Médica Nova Esperança — Clinicor. Atendimento médico em Nova Esperança, Paraná. Entre em contato pelo telefone (44) 3252-9222.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Clínica Médica Nova Esperança — Clinicor",
          alternateName: "Clinicor",
          description,
          telephone: "+55 44 3252-9222",
          medicalSpecialty: "Cardiovascular",
          sameAs: [clinic.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Governador Manoel Ribas, 110",
            addressLocality: "Nova Esperança",
            addressRegion: "PR",
            postalCode: "87600-000",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "3.8",
            reviewCount: 4,
            bestRating: "5",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Diferenciais />
        <Especialidade />
        <Sobre />
        <ComoFunciona />
        <Localizacao />
        <Contato />
        <Avaliacoes />
        <CtaFinal />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
