import { ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <section className="hero">
            <img src={new URL("../assets/background.jpg", import.meta.url).href} aria-disabled />
            <div className="content-wrapper">
                <div className="content">
                    <div className="inline-flex mb-2 items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
                        <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Disponível em Angola</span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">A nova forma de cobrar online, sem burocracias.</h1>
                    <p className="text-sm md:text-lg text-gray-300 mt-2">Integração fácil, verificação rápida e taxas acessíveis. A infraestrutura financeira que o seu negócio em Angola precisava.</p>

                    <div className="flex flex-col md:flex-row gap-2 mt-4">
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full bg-zinc-900 border border-zinc-800 text-white px-6 py-2 rounded-4xl outline-none focus:border-white focus:ring-1 focus:ring-white/20 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 placeholder:text-zinc-600"
                        />
                        <button className="w-full sm:w-auto bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                            Começar Agora
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-zinc-500">Acesso antecipado para early adopters.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;