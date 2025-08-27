import { Youtube, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Marca */}
        <div>
          <h3 className="text-lg font-bold mb-2">TRADE MASTER TRANSACTIONS</h3>
          <p className="text-sm text-gray-600">
            Tu plataforma transaccional para B2P y P2P.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Caracas D.C, Venezuela
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> legal@trademastertransactions.com
            </li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h3 className="text-lg font-bold mb-2">Información</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="#">Inicio</Link>
            </li>
            <li>
              <Link href="#">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link href="#">Políticas de Privacidad</Link>
            </li>
            <li>
              <Link href="#">Términos y condiciones</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            {/* <Link href="#">
              <Facebook className="hover:text-black" size={20} />
            </Link>
            <Link href="#">
              <X className="hover:text-black" size={20} />
            </Link> */}
            <Link
              href="https://www.instagram.com/trademastertransaction?igsh=ZG1yMHh0ZGZjNjNj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-black" size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@TradeMasterTransactions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="hover:text-black" size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="bg-black text-white text-center py-4 text-sm font-medium">
        Copyright Trade Master Transactions, LLC © All rights reserved
      </div>
    </footer>
  );
}
