"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function SectionContact() {
  const t = useTranslations("SectionContact");

  return (
    <section
      className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-[#1A093F] to-[#2D147A] text-center text-white"
      id="section-contact"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {t("heading")}
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-8">
          {t("description")}
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder={t("placeholder")}
            className="rounded-full px-6 py-3 w-full sm:w-[400px] bg-white text-black placeholder:text-gray-500 outline-none"
          />
          <Button
            type="submit"
            className="rounded-full bg-white text-black hover:bg-gray-200 px-8 py-3 font-semibold"
          >
            {t("cta")}
          </Button>
        </form>
      </div>
    </section>
  );
}
