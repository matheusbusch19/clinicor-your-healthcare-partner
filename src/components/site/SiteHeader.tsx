import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clinic, navLinks } from "@/lib/clinic";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-xl"
          : "bg-background/70 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Clinicor — início">
          <img
            src={logo}
            alt="Logotipo Clinicor"
            width={160}
            height={40}
            className="h-9 w-auto md:h-10"
          />
          <span className="hidden border-l border-border pl-3 text-[0.7rem] leading-tight font-medium text-muted-foreground sm:block">
            Clínica Médica
            <br />
            Nova Esperança
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" size="pill" className="hidden md:inline-flex">
            <a href="#contato">Entre em contato</a>
          </Button>
          <a
            href={clinic.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary md:hidden"
            aria-label={`Telefonar para ${clinic.phone}`}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="brand" size="pill" className="mt-3 w-full">
            <a href="#contato" onClick={() => setOpen(false)}>
              Entre em contato
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
