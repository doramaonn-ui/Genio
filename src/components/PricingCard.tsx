import { Check, ShieldCheck, Lock, ArrowRight, Zap, Gift, Clock, Sparkles } from "lucide-react";
import { CHECKOUT_URL, SERIES_INFO } from "../constants";

export function PricingCard() {
  const benefits = [
    "Acesso à Série Completa 'O Grande e Poderoso Gênio'",
    "100% Dublado em Português (Áudio Profissional)",
    "Todos os episódios em Alta Definição (Full HD 1080p)",
    "Envio Imediato e Automático diretamente no seu WhatsApp",
    "Acesso Vitalício: assista quando e quantas vezes quiser",
    "Sem mensalidades, sem custos adicionais futuros",
    "Assista na Smart TV, Celular, Computador ou Tablet",
    "Garantia Incondicional de 7 Dias (Risco Zero)",
  ];

  return (
    <section id="oferta" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#07080b] via-[#0e1017] to-[#0b0c10] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-wider mb-3">
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          Preço Promocional por Tempo Limitado
        </span>
        
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
          Garanta Seu Acesso Completo Agora
        </h2>
        
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Não pague assinaturas caras de streamings. Tenha a série completa dublada no seu WhatsApp por menos que um cafezinho!
        </p>

        {/* Pricing Card Box */}
        <div className="bg-gradient-to-b from-stone-900 via-[#13151b] to-black border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-left relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider py-1.5 px-5 rounded-bl-2xl shadow-md">
            MELHOR VALOR DO BRASIL
          </div>

          <div className="mb-6 border-b border-stone-800 pb-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Acesso VIP Vitalício</span>
            </div>
            
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              {SERIES_INFO.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-400">
              {SERIES_INFO.badge} • Todos os episódios sem corte
            </p>
          </div>

          {/* Pricing Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
            <div>
              <span className="text-stone-400 text-xs sm:text-sm line-through block">
                De {SERIES_INFO.originalPrice}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-emerald-400 uppercase">Por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  {SERIES_INFO.price}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-500/40">
                PAGAMENTO ÚNICO
              </span>
              <span className="block text-[11px] text-stone-400 mt-1">
                Sem renovação ou pegadinhas
              </span>
            </div>
          </div>

          {/* Benefit Checklist */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp Notice reminder */}
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3.5 text-xs text-emerald-300 flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span>
              <strong>Lembrete:</strong> {SERIES_INFO.whatsappNotice} em instantes.
            </span>
          </div>

          {/* Buy Button */}
          <a
            id="btn-pricing-comprar-agora"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 text-center uppercase tracking-wider cursor-pointer"
          >
            <span>COMPRAR AGORA</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition duration-300" />
          </a>

          {/* Security details under button */}
          <div className="mt-4 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-stone-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              Ambiente Criptografado
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Garantia 7 Dias
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Aprovação Imediata
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
