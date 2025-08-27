"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const t = useTranslations("Hero");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Mostrar video en todos los tamaños
      setShowVideo(true);
    }
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Imagen de fallback (por si no carga el video en mobile) */}
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <Image
          src="/fondo_mobile.png"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video en mobile y desktop */}
      {showVideo && (
        <video
          key="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/main.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      )}

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate__animated animate__backInUp"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />
        <h2 className="text-lg md:text-xl text-white mb-6 animate__animated animate__backInUp animate__delay-1s">
          {t("subtitle")}
        </h2>
        <Button
          className="text-base px-8 py-6 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 hover:opacity-90 text-white animate__animated animate__backInUp animate__delay-2s hover:cursor-pointer"
          onClick={() => {
            const element = document.getElementById("section-contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}
