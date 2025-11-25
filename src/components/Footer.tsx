import { MessageCircle, Calendar, Instagram, Youtube, Linkedin, Zap } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-[#ccff00]/20">

      <div className="border-t border-[#ccff00]/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#ccff00] to-[#ccff00] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-gray-900">ARTIFY MEDIA</span>
              </div>
              <p className="text-gray-600 mb-6">
                Creating emotion through motion and automation. Trusted by luxury brands worldwide.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#ccff00]/10 border border-[#ccff00]/30 hover:border-[#ccff00] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-[#ccff00]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#ccff00]/10 border border-[#ccff00]/30 hover:border-[#ccff00] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-gray-600 hover:text-[#ccff00]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#ccff00]/10 border border-[#ccff00]/30 hover:border-[#ccff00] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-[#ccff00]" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-primary-dark transition-colors">
                  <button onClick={() => scrollToSection('services-catalog')}>Creative Production</button>
                </li>
                <li className="hover:text-primary-text transition-colors">
                  <button onClick={() => scrollToSection('services-catalog')}>Digital Marketing</button>
                </li>
                <li className="hover:text-primary-text transition-colors">
                  <button onClick={() => scrollToSection('services-catalog')}>AI Automation</button>
                </li>
                <li className="hover:text-primary-text transition-colors">
                  <button onClick={() => scrollToSection('services-catalog')}>Brand Strategy</button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600 ">
                <li className="hover:text-primary-text transition-colors">
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-primary-text transition-colors">Portfolio</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary-text transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/partner" className="hover:text-primary-text transition-colors">Partner Program</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#ccff00]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 Artify Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-primary-readable transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-readable transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-readable transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
