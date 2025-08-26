import { NextIntlClientProvider } from "next-intl";
import "../globals.css";

type Params = { locale: "es" | "en" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const awaited = params instanceof Promise ? await params : params;
  const locale = awaited.locale;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
