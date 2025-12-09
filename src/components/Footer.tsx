import Logo from './Logo';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

function Footer () {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Infraestrutura de pagamentos moderna para empresas angolanas.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} ExodusPay Angola. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
             {/* <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
               <Linkedin size={20} />
             </a> */}
             <a href="https://www.instagram.com/exodus.pay" target="_blank" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
               <Instagram size={20} />
             </a>
             <a href="https://web.facebook.com/profile.php?id=61584856196285&locale=pt_BR" target="_blank" className="text-zinc-500 hover:text-white transition-colors" aria-label="Facebook">
               <Facebook size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;