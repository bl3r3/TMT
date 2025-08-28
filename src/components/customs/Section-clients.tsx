"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type Logo = { src: string; alt: string; width: number; height: number };

const LOGOS: Logo[] = [
  { src: "/clients/logo-1.svg", alt: "Acme", width: 180, height: 56 },
  { src: "/clients/logo-2.svg", alt: "Nimbus", width: 180, height: 56 },
  { src: "/clients/logo-3.svg", alt: "Vertex", width: 180, height: 56 },
  { src: "/clients/logo-4.svg", alt: "Aurora", width: 180, height: 56 },
  { src: "/clients/logo-5.svg", alt: "Pulse", width: 180, height: 56 },
  { src: "/clients/logo-6.svg", alt: "Quantum", width: 180, height: 56 },
  { src: "/clients/logo-7.svg", alt: "Solara", width: 180, height: 56 },
  { src: "/clients/logo-8.svg", alt: "Northstar", width: 180, height: 56 },
];

export function SectionClients() {
  const t = useTranslations("Clients");

  return (
    <section className="w-full py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-violet-800">
            {t("heading")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-neutral-50/80 ring-1 ring-black/5 backdrop-blur-sm shadow-sm p-4 md:p-6">
          {/* Marquee */}
          <div
            className="relative overflow-hidden group"
            aria-label={t("aria")}
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-[200%] will-change-transform animate-[clients-marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[0, 1].map((dup) => (
                <ul
                  key={dup}
                  aria-hidden={dup === 1}
                  className="flex flex-none items-center gap-10 md:gap-14 min-w-max px-4"
                >
                  {LOGOS.map((logo, i) => (
                    <li key={`${dup}-${i}`} className="flex-none">
                      <div
                        className="relative h-10 md:h-14 w-[140px] md:w-[180px] opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-opacity"
                        title={logo.alt}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="180px"
                          className="object-contain"
                          priority={dup === 0 && i < 3}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes clients-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
