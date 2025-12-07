import { UserPlus, Fingerprint, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    icon: <UserPlus className="w-6 h-6" />,
    title: "Criar Conta",
    desc: "Registo simplificado em segundos. Sem formulários infinitos ou papelada desnecessária."
  },
  {
    id: "02",
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Verificar Identidade",
    desc: "Processo KYC 100% digital e automático. Aprovação rápida para começar a operar."
  },
  {
    id: "03",
    icon: <Banknote className="w-6 h-6" />,
    title: "Integrar e Receber",
    desc: "Copie as chaves da API, cole no seu código e comece a aceitar pagamentos reais."
  }
];

function HowItWorks () {
  return (
    <section id="como-funciona" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pronto para vender em 3 passos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            Simplificamos a burocracia para que você foque no crescimento.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black border border-zinc-700 flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow duration-500">
                {step.icon}
              </div>
              <div className="bg-black px-4 relative">
                 <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                 <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;