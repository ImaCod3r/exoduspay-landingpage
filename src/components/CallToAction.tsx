import { motion } from 'framer-motion';

function CallToAction (){
  return (
    <section className="py-32 flex items-center justify-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
        >
          Junte-se à nova geração de pagamentos em Angola.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 mb-12"
        >
          Comece a aceitar pagamentos hoje. Sem taxas de adesão, sem contratos de fidelidade.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
        >
          <input 
            type="email" 
            placeholder="Digite seu email profissional" 
            className="flex-1 bg-transparent border border-zinc-700 text-white px-6 py-4 rounded-full outline-none focus:border-white focus:bg-zinc-900/50 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
          />
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Criar Conta Grátis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;