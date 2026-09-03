import { ShieldCheck, Lock } from "lucide-react";
import { SERIES_INFO } from "../constants";

export function Footer() {
  return (
    <footer className="bg-black text-stone-500 text-xs py-10 px-4 sm:px-6 border-t border-stone-800/80 pb-24 sm:pb-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
        
        {/* Logos & Trust Badges */}
        <div className="flex items-center gap-6 text-stone-400 text-xs font-semibold">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pagamentos Protegidos por Criptografia SSL
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Garantia Incondicional 7 Dias
          </span>
        </div>

        <p className="max-w-2xl text-[11px] text-stone-500 leading-relaxed">
          {SERIES_INFO.title} • Entrega digital com acesso imediato via WhatsApp após confirmação do pagamento.
          Este site não tem afiliação com o WhatsApp Inc. ou Meta Platforms, Inc. WhatsApp é uma marca registrada da Meta Platforms, Inc.
        </p>

        <div className="text-[11px] text-stone-600">
          © {new Date().getFullYear()} {SERIES_INFO.title}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
