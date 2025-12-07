import { Terminal, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

function Developers () {
  return (
    <section id="developers" className="py-24 bg-zinc-950 border-y border-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Terminal size={14} className="text-white" />
            <span className="text-xs font-mono text-zinc-300">developer_preview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Feito por devs,<br />
            para devs.
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Nossa API foi desenhada para ser intuitiva e poderosa. 
            Com bibliotecas para Node, Python e PHP, você integra pagamentos 
            no seu sistema em minutos, não semanas.
          </p>
          <ul className="space-y-4 mb-8">
            {['Webhooks em tempo real', 'Ambiente Sandbox idêntico ao Live', 'Logs detalhados de requisições'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        
        </motion.div>

        {/* Code Block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-zinc-800 shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-500 font-mono">payment.js</span>
              <Copy size={14} className="text-zinc-600 cursor-pointer hover:text-white transition-colors" />
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm md:text-base font-mono leading-relaxed">
                <code className="text-zinc-300">
                  <span className="text-zinc-500">const</span> <span className="text-white">exodus</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">require</span>(<span className="text-zinc-400">'exodus-pay'</span>);{'\n\n'}
                  
                  <span className="text-zinc-600">// Inicializar cliente</span>{'\n'}
                  <span className="text-zinc-500">const</span> <span className="text-white">client</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">new</span> <span className="text-white">exodus.Client</span>({'{'}{'\n'}
                  {'  '}apiKey: <span className="text-zinc-400">'ex_live_8392019238'</span>{'\n'}
                  {'}'});{'\n\n'}

                  <span className="text-zinc-600">// Criar cobrança</span>{'\n'}
                  <span className="text-zinc-500">const</span> <span className="text-white">payment</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">await</span> <span className="text-white">client.charges.create</span>({'{'}{'\n'}
                  {'  '}amount: <span className="text-white">5000</span>,{'\n'}
                  {'  '}currency: <span className="text-zinc-400">'AOA'</span>,{'\n'}
                  {'  '}phone: <span className="text-zinc-400">'923456789'</span>,{'\n'}
                  {'  '}method: <span className="text-zinc-400">'multicaixa'</span>{'\n'}
                  {'}'});
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Developers;