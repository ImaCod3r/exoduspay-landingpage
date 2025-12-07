import { Zap, ShieldCheck, Globe, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap size={24} />,
    title: "Integração Relâmpago",
    description: "SDKs prontos para uso. Conecte sua loja ou app em menos de 10 minutos."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Segurança Bancária",
    description: "Conformidade total com regulamentações locais e criptografia de ponta a ponta."
  },
  {
    icon: <Globe size={24} />,
    title: "Foco em Angola",
    description: "Otimizado para multicaixa e métodos de pagamento locais com liquidez rápida."
  },
  {
    icon: <Code2 size={24} />,
    title: "API Developer-First",
    description: "Documentação clara, webhooks estáveis e ambiente de sandbox robusto."
  }
];

function Benefits () {
  return (
    <section id="beneficios" className="py-24 bg-black border-t border-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-bold mb-6"
          >
            Tudo o que você precisa.<br/>
            Nada que atrapalhe.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 border border-zinc-800 group-hover:border-zinc-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;