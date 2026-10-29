"use client";

import { usePathname } from "next/navigation";

/** "Desarrollado por Fullkod" (CREA0004): el mismo crédito en todas las pantallas. */
export function FullkodCredit({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://fullkod.com/?ref=self-inspection"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-xs text-ink-2 hover:text-ink dark:text-dark-ink-2 dark:hover:text-dark-ink ${className}`}
    >
      Desarrollado por
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/fullkod-symbol.svg" alt="" className="h-3.5 w-3.5 dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/fullkod-symbol-reversed.svg" alt="" className="hidden h-3.5 w-3.5 dark:block" />
      <span className="font-semibold text-ink dark:text-dark-ink">Fullkod</span>
    </a>
  );
}

/** Pantallas completas: el crédito va fijo abajo, sin añadir altura. */
const PINNED_ROUTES = [
  "/login",
  "/onboarding",
  "/recuperar-password",
  "/restablecer-password",
  "/cambiar-password",
];

/** Sin crédito: la portada ya lo lleva en su pie; los formularios de inspección tienen su propia barra inferior. */
const NO_CREDIT_ROUTES = ["/inspections/questions", "/inspections/create", "/inspections/edit"];

function matchesAny(pathname: string, routes: string[]): boolean {
  return routes.some((r) => pathname === r || pathname.startsWith(`${r}/`));
}

/** Monta el crédito según la ruta. Renderlo una sola vez, dentro del <main> raíz. */
export function SiteCredit() {
  const pathname = usePathname();
  if (!pathname || pathname === "/" || matchesAny(pathname, NO_CREDIT_ROUTES)) return null;

  if (matchesAny(pathname, PINNED_ROUTES)) {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center px-6 lg:justify-end">
        <FullkodCredit className="pointer-events-auto" />
      </div>
    );
  }
  return (
    <div className="flex justify-end px-6 pb-6 pt-8">
      <FullkodCredit />
    </div>
  );
}
