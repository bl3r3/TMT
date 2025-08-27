"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function SectionContact() {
  const t = useTranslations("SectionContact");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;

    setSubmitting(true);
    try {
      const formData = new FormData(formEl);
      const payload = Object.fromEntries(formData.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send");
      }

      formEl.reset();
      alert("✅ ¡Gracias! Te contactaremos pronto.");
    } catch (err) {
      console.error(err);
      alert("❌ Ocurrió un error al enviar. Intenta nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="section-contact"
      className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-[#1A093F] to-[#2D147A] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            {t("heading")}
          </h2>
          <p className="text-md md:text-lg text-gray-300">{t("description")}</p>
        </div>

        {/* Card del formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 text-black rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Empresa/Firma */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.company")}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder={t("placeholders.company")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* RIF */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="rif"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.rif")}
              </label>
              <input
                id="rif"
                name="rif"
                type="text"
                required
                placeholder={t("placeholders.rif")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* Correo */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("placeholders.email")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* Celular */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="^\+?[0-9\s\-]{7,15}$"
                required
                placeholder={t("placeholders.phone")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="socials"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.socials")}
              </label>
              <input
                id="socials"
                name="socials"
                type="text"
                placeholder={t("placeholders.socials")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* Proyecto */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="project"
                className="text-sm font-medium text-gray-700"
              >
                {t("form.project")}
              </label>
              <textarea
                id="project"
                name="project"
                rows={6}
                required
                placeholder={t("placeholders.project")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400 resize-y"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 text-white hover:opacity-90 px-8 py-3 font-semibold"
            >
              {submitting ? t("sending") : t("cta")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
