"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: "es" | "en") => {
    if (!pathname) return;
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/"));
  };

  // Bloquear scroll de body cuando el menú está abierto
  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevTouch = body.style.touchAction;

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = prevOverflow || "";
      body.style.touchAction = prevTouch || "";
    }

    return () => {
      body.style.overflow = prevOverflow || "";
      body.style.touchAction = prevTouch || "";
    };
  }, [isOpen]);

  // Cerrar con ESC
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onKeyDown]);

  // Cambiar fondo en desktop al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        // ✅ fijo en mobile cuando el menú está abierto; sticky en desktop
        isOpen ? "fixed" : "sticky md:sticky",
        "top-0 left-0 w-full z-[100] transition-colors duration-300",
        // Forzamos bg sólido cuando el overlay está abierto
        isOpen
          ? "bg-black"
          : scrolled
          ? "bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70"
          : "bg-black"
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Mobile: Hamburguesa */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="text-white font-extrabold text-xl mx-auto md:mx-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/TMT_logo-nav.png"
              alt="TradeMaster Transactions"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          <li>
            <Link href="#home" className="hover:underline">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="#section-contact" className="hover:underline">
              {t("contact")}
            </Link>
          </li>
        </ul>

        {/* Botón + selector idioma (desktop) */}
        <div className="ml-auto md:ml-0 hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-black"
          >
            {t("login")}
          </Button>

          <select
            value={locale}
            onChange={(e) => switchTo(e.target.value as "es" | "en")}
            className="bg-black text-white border border-white rounded px-2 py-1 focus:outline-none cursor-pointer"
            aria-label="Select language"
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </div>
      </nav>

      {/* Menú Mobile Fullscreen */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={clsx(
          "fixed inset-0 z-[110] md:hidden",
          // ✅ altura 100% real en móviles (varias unidades por compatibilidad)
          "h-screen min-h-[100svh] min-h-[100dvh]",
          // el overlay maneja su propio scroll y no el body
          "overflow-y-auto overscroll-contain",
          "bg-black/90 text-white flex flex-col items-center justify-center",
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <nav className="space-y-8 text-2xl font-medium">
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block text-center"
          >
            {t("home")}
          </Link>
          <Link
            href="#section-contact"
            onClick={() => setIsOpen(false)}
            className="block text-center"
          >
            {t("contact")}
          </Link>

          {/* Select de idioma (mobile) */}
          <div className="pt-6">
            <select
              value={locale}
              onChange={(e) => {
                switchTo(e.target.value as "es" | "en");
                setIsOpen(false);
              }}
              className="bg-black text-white border border-white rounded px-3 py-2 focus:outline-none cursor-pointer"
            >
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}
