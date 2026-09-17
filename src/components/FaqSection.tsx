import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SERIES_INFO } from "../constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como recebo meu acesso após a compra?",
      a: `${SERIES_INFO.whatsappNotice}. Nosso sistema é automatizado: assim que seu Pix for confirmado, você recebe uma mensagem imediata com o link exclusivo para assistir todos os episódios.`,
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "O pagamento é realizado exclusivamente via Pix no valor promocional de apenas R$ 6,99, com aprovação instantânea e liberação imediata no seu WhatsApp.",
    },
    {
      q: "A série está realmente completa e dublada?",
      a: "Sim! Você terá acesso a todos os episódios na íntegra, dublados em português com áudio cristalino e excelente qualidade de imagem.",
    },
    {
      q: "O valor de R$ 6,99 é mensalidade ou pagamento único?",
      a: "É pagamento único de apenas R$ 6,99! Você paga uma única vez no Pix e o acesso é seu para sempre, sem mensalidades nem cobranças extras.",
    },
    {
      q: "Como funciona a Garantia de 7 Dias?",
      a: `${SERIES_INFO.guaranteeText}`,
    },
    {
      q: "O pagamento no Pix é seguro?",
      a: "100% seguro! Toda a transação é processada pela Lowify, plataforma líder e segura de pagamentos com criptografia de ponta a ponta.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#090a0d] border-t border-stone-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Perguntas & Respostas
          </h2>
          <p className="text-stone-400 text-sm">
            Tudo o que você precisa saber antes de garantir seu acesso.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-stone-900/80 border border-stone-800 rounded-xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-white hover:text-amber-400 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-amber-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-stone-300 border-t border-stone-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
