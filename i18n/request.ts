import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale === "en" ? "en" : "es";

  const messages =
    safeLocale === "en"
      ? (await import("../src/messages/en.json")).default
      : (await import("../src/messages/es.json")).default;

  return {
    locale: safeLocale,
    messages,
  };
});
