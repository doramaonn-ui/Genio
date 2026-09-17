import { ShieldCheck, Award, RotateCcw, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { CHECKOUT_URL, SERIES_INFO } from "../constants";

export function GuaranteeSection() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#090a0d] border-t border-stone-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/20 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          
          {/* Guarantee Badge Stamp */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-400 p-1 shadow-2xl flex items-center justify-center text-black">
              <div className="w-full h-full rounded-full bg-[#0d0e12] border border-amber-400/40 flex flex-col items-center justify-center text-center p-2">
                <ShieldCheck className="w-8 h-8 text-amber-400 mb-0.5" />
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-cinzel leading-none">
                  7 DIAS
                </span>
                <span className="text-[9px] uppercase tracking-wider text-stone-300 font-bold mt-0.5">
                  Garantia Total
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              Risco Zero
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {SERIES_INFO.guaranteeTitle}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              "{SERIES_INFO.guaranteeText}"
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-stone-400 font-medium mb-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Devolução Sem Burocracia
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <RotateCcw className="w-4 h-4" /> 100% do Valor Devolvido
              </span>
            </div>

            <div>
              <a
                id="btn-guarantee-comprar-agora"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-sm sm:text-base py-3 px-6 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.02] cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>COMPRAR AGORA NO PIX - APENAS R$ 6,99</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
