"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h2 className="font-bold text-3xl text-gray-900">Dreams</h2>
            </div>
            
            <p className="text-gray-600 max-w-md">
              La plateforme d'apprentissage en ligne qui rend l'éducation accessible, 
              engageante et adaptée à tous.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Plateforme</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Tous les cours</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Formateurs</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Catégories</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Devenir formateur</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Dreams LMS. Tous droits réservés.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Conditions</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
          </div>
          
          <p>Made with ❤️ pour l'éducation</p>
        </div>
      </div>
    </footer>
  );
}