import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic } from "@/lib/clinic";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={clinic.phoneHref}
        className="fixed inset-x-4 bottom-4 z-40 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-deep text-sm font-semibold tracking-[0.08em] text-deep-foreground uppercase shadow-lift transition-transform active:scale-[0.98] md:hidden"
      >
        <Phone className="size-4" aria-hidden="true" />
        Ligar {clinic.phone}
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={cn(
          "fixed right-5 bottom-24 z-40 inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary md:bottom-6",
          show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
}
