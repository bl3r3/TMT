"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";

type AppItem = {
  title: string;
  description: string;
  modalContent: string;
  srcImg: string;
  bgColor: string;
  bgModalColor: string;
  loginUrl: string;
};

export function SectionApps() {
  const t = useTranslations("SectionApps");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const items: AppItem[] = [
    {
      title: t("item1.title"),
      description: t("item1.description"),
      modalContent: t("item1.modal"),
      srcImg: "/Ticketake_h.png",
      bgColor: "bg-[#1b2a35]",
      bgModalColor: "bg-[#1b2a35]",
      loginUrl: "/",
    },
    {
      title: t("item2.title"),
      description: t("item2.description"),
      modalContent: t("item2.modal"),
      srcImg: "/TaquillaMaster_h.png",
      bgColor: "bg-[#330A1A]",
      bgModalColor: "bg-[#330A1A]",
      loginUrl: "/",
    },
    {
      title: t("item3.title"),
      description: t("item3.description"),
      modalContent: t("item3.modal"),
      srcImg: "/Carticket_h.png",
      bgColor: "bg-[#133329]",
      bgModalColor: "bg-[#133329]",
      loginUrl: "/",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-violet-800 mb-2">
          {t("heading")}
        </h2>
        <p className="text-md md:text-lg text-violet-500 mb-10 max-w-3xl mx-auto">
          {t("subheading")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              // ⛔️ Nada de initial SSR: evitamos diferencias HTML/cliente
              initial={false}
              // ✅ Animar solo una vez cuando ya montó
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              viewport={mounted ? { once: true, amount: 0.2 } : undefined}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow text-left space-y-4 transition-all duration-300 transform min-h-[420px] flex flex-col justify-between"
              style={!mounted ? { opacity: 1, transform: "none" } : undefined}
            >
              {/* Logo container */}
              <div
                className={`rounded-t-md ${item.bgColor} flex items-center justify-center h-40`}
              >
                <div className="relative w-[300px] h-[150px]">
                  <Image
                    src={item.srcImg}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.description}
                  </p>
                </div>

                <Dialog
                  open={openIndex === i}
                  onOpenChange={(open) => setOpenIndex(open ? i : null)}
                >
                  <DialogTrigger asChild>
                    <Button className="text-sm">{t("moreInfo")}</Button>
                  </DialogTrigger>

                  <DialogContent className="z-[100] w-[92vw] sm:max-w-2xl max-h-[85dvh] overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div
                        className={`flex justify-center items-center ${item.bgModalColor} rounded-md p-4`}
                      >
                        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
                          <Image
                            src={item.srcImg}
                            alt={`${item.title} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="text-sm text-gray-600 text-justify">
                          {item.modalContent}
                        </p>

                        <Link
                          href={item.loginUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>{t("loginCta")}</Button>
                        </Link>

                        {i === 2 && (
                          <>
                            <hr className="col-span-full my-3" />
                            <div className="col-span-full flex flex-col items-center md:items-start gap-2">
                              <p className="text-sm text-neutral-600">
                                Encuéntranos también en:
                              </p>
                              <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-center w-full items-center gap-3">
                                {/* App Store */}
                                <Link
                                  href="https://apps.apple.com/app/idXXXXXXXX"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Disponible en el App Store"
                                >
                                  <Image
                                    src="/app_badge.png" // <= ruta desde /public
                                    alt="Disponible en el App Store"
                                    width={160}
                                    height={48}
                                    className="h-12 md:h-8 w-auto"
                                    priority
                                  />
                                </Link>

                                {/* Google Play */}
                                <Link
                                  href="https://play.google.com/store/apps/details?id=com.tuapp"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Disponible en Google Play"
                                >
                                  <Image
                                    src="/android_badge.png"
                                    alt="Disponible en Google Play"
                                    width={180}
                                    height={54}
                                    className="h-19 md:h-12 w-auto"
                                  />
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {i === 2 && (
                      <div className="flex justify-center items-center w-full gap-3">
                        <Link
                          href="https://www.instagram.com/carticket_?igsh=amR1NXlmMXlweDUz&utm_source=qr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="hover:text-black" size={20} />
                        </Link>
                        <Link
                          href="https://www.youtube.com/@CarticketTMT"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="hover:text-black" size={24} />
                        </Link>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
