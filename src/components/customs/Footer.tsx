import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Marca */}
        <div>
          <h3 className="text-lg font-bold mb-2">TRADEMASTER</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 732 Despard St, Atlanta
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@traveller.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +97 888 8888
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
            <Link href="#">
              <Facebook className="hover:text-black" size={20} />
            </Link>
            <Link href="#">
              <Twitter className="hover:text-black" size={20} />
            </Link>
            <Link href="#">
              <Youtube className="hover:text-black" size={20} />
            </Link>
            <Link href="#">
              <Instagram className="hover:text-black" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="bg-black text-white text-center py-4 text-sm font-medium">
        Copyright © All rights reserved
      </div>
    </footer>
  );
}
