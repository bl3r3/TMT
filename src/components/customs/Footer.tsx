"use client";

import { Youtube, Instagram, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">{t("brandTitle")}</h3>
          <p className="text-sm text-gray-600">{t("brandTagline")}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">{t("contact")}</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> {t("address")}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> legal@trademastertransactions.com
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">{t("info")}</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/">{t("links.home")}</Link>
            </li>
            <li>
              <Link href="/faq">{t("links.faq")}</Link>
            </li>
            <li>
              <Link href="/privacy">{t("links.privacy")}</Link>
            </li>
            <li>
              <Link href="/terms">{t("links.terms")}</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-bold mb-2">{t("followUs")}</h3>
          <div className="flex gap-4 text-gray-600">
            <Link
              href="https://www.instagram.com/trademastertransaction?igsh=ZG1yMHh0ZGZjNjNj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="hover:text-black" size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@TradeMasterTransactions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="hover:text-black" size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black text-white text-center py-4 text-sm font-medium">
        {t("copyright")}
      </div>
    </footer>
  );
}
