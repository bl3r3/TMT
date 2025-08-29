import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Params = { locale: string };

export default async function LoginPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Login" });

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-6xl grid md:grid-cols-2 gap-0 min-h-screen py-4 rounded-3xl">
        <div className="relative hidden md:block h-full">
          <Image
            src="/ticket.jpg"
            alt={t("imageAlt")}
            fill
            priority
            className="object-cover rounded-3xl"
            sizes="50vw"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="mb-8 text-center md:text-left">
            <Link href={`/${locale}`}>
              <Image
                src="/TMT_logo.png"
                alt={t("logoAlt")}
                width={200}
                height={120}
                className="mx-auto"
              />
            </Link>
            <h1 className="mt-6 text-2xl font-extrabold text-indigo-700 leading-tight">
              {t("titleLine1")} <br /> {t("titleLine2")}
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">{t("subtitle")}</p>
          </div>

          {/* Acciones */}
          <div className="flex flex-col gap-3">
            <button className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-400 to-violet-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400 animate__animated animate__backInUp animate__delay-1s cursor-pointer">
              {t("btnClient")}
            </button>

            <button className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-400 to-violet-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400 animate__animated animate__backInUp animate__delay-2s cursor-pointer">
              {t("btnAdmin")}
            </button>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-violet-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400 animate__animated animate__backInUp animate__delay-3s cursor-pointer"
            >
              {t("cta")}
            </Link>

            {/* Switcher simple */}
            <div className="mt-4 text-center text-sm text-neutral-500">
              <Link href={`/es/login`} className="underline mr-3">
                🇪🇸 ES
              </Link>
              <Link href={`/en/login`} className="underline">
                🇺🇸 EN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
