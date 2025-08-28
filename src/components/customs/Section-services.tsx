"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type Service = {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href?: string;
};

export function SectionServices() {
  const t = useTranslations("SectionServices");
  const locale = useLocale();

  const mq = useMediaQuery("(max-width: 767.98px)");
  const isResolved = mq !== null;
  const isMobile = mq ?? true;
  const reduceMotion = useReducedMotion();

  const services: Service[] = [
    {
      icon: "👥",
      title: t("items.0.title"),
      description: t("items.0.desc"),
      linkText: t("items.0.cta"),
      href: `/${locale}/login`,
    },
    {
      icon: "💸",
      title: t("items.1.title"),
      description: t("items.1.desc"),
      linkText: t("items.1.cta"),
      href: `/${locale}/login`,
    },
    {
      icon: "🏆",
      title: t("items.2.title"),
      description: t("items.2.desc"),
      linkText: t("items.2.cta"),
      href: `/${locale}/login`,
    },
    {
      icon: "📱",
      title: t("items.3.title"),
      description: t("items.3.desc"),
      linkText: t("items.3.cta"),
      href: `/${locale}/login`,
    },
    {
      icon: "📊",
      title: t("items.4.title"),
      description: t("items.4.desc"),
      linkText: t("items.4.cta"),
      href: `/${locale}/login`,
    },
    {
      icon: "🧾",
      title: t("items.5.title"),
      description: t("items.5.desc"),
      linkText: t("items.5.cta"),
      href: `/${locale}/login`,
    },
  ];

  const mobileVar: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, delay: (Number(i) || 0) * 0.2, ease: "easeInOut" },
    }),
  };

  const desktopVar: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, delay: (Number(i) || 0) * 0.2, ease: "easeOut" },
    }),
  };

  const variants = isMobile ? mobileVar : desktopVar;

  return (
    <section
      className="relative w-full py-24 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/BannerTM2.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          {t("heading")}
        </h2>
        <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto">
          {t("subheading")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((s, i) => (
            <motion.div
              key={`${isResolved ? (isMobile ? "m" : "d") : "pending"}-${i}`}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="bg-white rounded-xl p-6 shadow text-black will-change-transform"
            >
              <div className="text-4xl text-violet-700">{s.icon}</div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-gray-700">{s.description}</p>
              <Link
                href={s.href ?? "#"}
                className="group text-sm text-blue-600 font-semibold inline-flex items-center hover:underline"
              >
                {s.linkText}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
