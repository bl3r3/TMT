"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          {items.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.4 }}
                className={`bg-white rounded-lg shadow text-left space-y-4 transition-all duration-300 transform
                  min-h-[420px] flex flex-col justify-between
                  ${isHovered ? "scale-105 z-10" : ""}
                  ${isDimmed ? "opacity-70" : "opacity-100"}
                `}
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

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-sm">{t("moreInfo")}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Logo a la izquierda */}
                        <div
                          className={`flex justify-center items-center ${item.bgModalColor} rounded-md p-4`}
                        >
                          <div className="relative w-[300px] h-[300px]">
                            <Image
                              src={item.srcImg}
                              alt={`${item.title} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Texto a la derecha */}
                        <div className="space-y-4">
                          <h2 className="text-lg font-bold">{item.title}</h2>
                          <p className="text-sm text-gray-600 text-justify">
                            {item.modalContent}
                          </p>
                          <a
                            href={item.loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button>{t("loginCta")}</Button>
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
