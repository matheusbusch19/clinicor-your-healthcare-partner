import { Instagram, MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: "#localizacao" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Logotipo Clinicor"
            width={180}
            height={45}
            loading="lazy"
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {clinic.name} — {clinic.brand}
          </p>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Instagram
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground uppercase">
            Contato
          </h3>
          <address className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground not-italic">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {clinic.address.street} — {clinic.address.district}
                <br />
                {clinic.address.city} — {clinic.address.state}
                <br />
                {clinic.address.zip}
              </span>
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={clinic.phoneHref} className="transition-colors hover:text-primary">
                {clinic.phone}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground uppercase">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="container-page py-6 text-center text-xs text-muted-foreground">
          © 2026 Clínica Médica Nova Esperança — Clinicor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
