import "./globals.css";
import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
// ──────────────────────────────────────────────────────────────
// Configuración del sitio
// ──────────────────────────────────────────────────────────────
const SITE_NAME = "TradeMaster Transactions";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.com";
const OG_IMAGE = "/iso_tmt.png";
const DEFAULT_TITLE = `${SITE_NAME} – Plataforma transaccional B2P y P2P`;
const DEFAULT_DESCRIPTION =
  "Plataforma transaccional para intercambio comercial B2P y P2P, con panel administrativo para crear eventos/productos/servicios, landings sin código con e‑commerce, pasarelas de pago y facturación digital; taquillas/tiendas, campañas publicitarias y reportes en tiempo real.";

// ──────────────────────────────────────────────────────────────
// Viewport
// ──────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

// ──────────────────────────────────────────────────────────────
// SEO Metadata
// ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index:
      process.env.NEXT_PUBLIC_ENV === "prod" ||
      process.env.NODE_ENV === "production",
    follow: true,
  },
  icons: { icon: "/iso_tmt.png" },
};

// ──────────────────────────────────────────────────────────────
// Root Layout
// ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              sameAs: [
                // agrega tus perfiles reales o elimina el array
                "https://www.instagram.com/tucuenta",
                "https://www.linkedin.com/company/tucuenta",
              ],
              description: DEFAULT_DESCRIPTION,
            }),
          }}
        />
        {/* (Opcional) JSON-LD: WebSite con buscador interno */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/buscar?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        /> */}
      </head>
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
