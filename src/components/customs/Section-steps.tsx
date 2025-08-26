"use client";

import { useTranslations } from "next-intl";

export function SectionSteps() {
  const t = useTranslations("SectionSteps");

  const steps = [
    {
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section className="relative w-full py-16 px-6 md:px-12 text-white overflow-hidden bg-[#291D6C]">
      <div className="bg-animated-gradient"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-300">
              {step.title}
            </h3>
            <p className="text-sm text-white">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
