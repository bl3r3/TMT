import { useTranslations } from "next-intl";
import Image from "next/image";

export function SectionAboutTMT() {
  const t = useTranslations("TMT");

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            <Image
              src="/TMT_logo.png"
              alt="Logo Trade Master Transactions"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-700 text-justify">
            {t("description")}
          </p>
          <p className="text-base leading-relaxed text-gray-700 text-justify">
            {t("description2")}
          </p>
        </div>
      </div>
    </section>
  );
}
