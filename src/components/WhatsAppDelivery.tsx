import { CheckCircle2, MessageCircle, Send, Play, Sparkles, Smartphone } from "lucide-react";
import { CHECKOUT_URL, SERIES_INFO } from "../constants";
import { useSeriesImage } from "../context/SeriesImageContext";

export function WhatsAppDelivery() {
  const { imageUrl } = useSeriesImage();
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#090a0d] border-y border-stone-800/80 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
            <MessageCircle className="w-4 h-4" />
            Entrega Automática & Sem Espera
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Receba a Série no seu WhatsApp em Segundos
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            {SERIES_INFO.whatsappNotice}. Sem complicação de senhas difíceis ou aplicativos pesados. É só clicar e assistir!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Step-by-Step Flow (Left) */}
          <div className="md:col-span-6 space-y-4">
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 sm:p-5 flex items-start gap-4 shadow-md">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black text-lg flex items-center justify-center shrink-0 border border-amber-500/40">
                1
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">
                  Faça seu pedido no Pix por apenas R$ 6,99
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Clique no botão "Comprar Agora" e gere seu Pix com segurança no checkout da Lowify.
                </p>
              </div>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 sm:p-5 flex items-start gap-4 shadow-md">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-lg flex items-center justify-center shrink-0 border border-emerald-500/40">
                2
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">
                  Confirmação Instantânea do Pix
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Pague via Pix com aprovação imediata. O sistema identifica seu pagamento em segundos.
                </p>
              </div>
            </div>

            <div className="bg-stone-900/90 border border-emerald-500/40 rounded-xl p-4 sm:p-5 flex items-start gap-4 shadow-md bg-gradient-to-r from-emerald-950/30 to-stone-900">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-black font-black text-lg flex items-center justify-center shrink-0 shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-emerald-300 text-base mb-1 flex items-center gap-2">
                  <span>Acesso no seu WhatsApp</span>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Nosso robô envia uma mensagem direta com o link exclusivo para assistir todos os episódios dublados sem anúncios.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Preview Card (Right) */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-[#0b141a] border-2 border-emerald-500/40 shadow-2xl overflow-hidden text-stone-200 text-xs font-sans">
              {/* WhatsApp Header */}
              <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-b border-stone-700/60">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-amber-500/30 border border-amber-400 flex items-center justify-center text-amber-300 font-bold overflow-hidden">
                    <img
                      id="whatsapp-chat-avatar-img"
                      src={imageUrl}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('Imagem.png') && !target.src.includes('capa-serie.jpg')) {
                          target.src = '/Imagem.png';
                        }
                      }}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1f2c34]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-white truncate text-sm">Acesso Oficial • Gênio</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-blue-400 shrink-0" />
                  </div>
                  <span className="text-[11px] text-emerald-400">online agora</span>
                </div>
                <Smartphone className="w-5 h-5 text-stone-400" />
              </div>

              {/* Chat Body */}
              <div className="p-4 space-y-3 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a] min-h-[290px]">
                <div className="text-center">
                  <span className="bg-[#182229] text-stone-400 text-[10px] px-2.5 py-1 rounded-md shadow-sm">
                    Hoje • Acesso Liberado
                  </span>
                </div>

                {/* Message Bubble 1 */}
                <div className="bg-[#005c4b] text-white p-3 rounded-xl rounded-tl-none shadow-md max-w-[90%] space-y-2">
                  <p className="text-xs font-medium">
                    👋 Olá! Seu pedido de <strong>"O Grande e Poderoso Gênio"</strong> foi aprovado com sucesso! 🎉
                  </p>
                  <p className="text-[11px] text-emerald-100">
                    Aqui está seu acesso VIP para assistir à série <strong>COMPLETA e 100% DUBLADA</strong> em Full HD:
                  </p>
                  <div className="bg-[#025142] p-2.5 rounded-lg border border-emerald-400/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-amber-300 block">▶ Assistir Episódios Completos</span>
                      <span className="text-[10px] text-emerald-200">Acesso Vitalício sem travamento</span>
                    </div>
                    <span className="bg-emerald-500 text-black text-[10px] font-extrabold px-2 py-1 rounded uppercase">
                      Abrir
                    </span>
                  </div>
                  <div className="flex justify-end text-[10px] text-emerald-200 gap-1 items-center">
                    <span>14:32</span>
                    <span className="text-blue-300 font-bold">✓✓</span>
                  </div>
                </div>

                {/* Message Bubble 2 */}
                <div className="bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tl-none shadow-md max-w-[85%] text-[11px]">
                  <span>Qualquer dúvida nosso suporte no WhatsApp estará disponível 24h para você! Boa maratona! 🍿</span>
                  <div className="flex justify-end text-[10px] text-emerald-200 gap-1 items-center mt-1">
                    <span>14:32</span>
                    <span className="text-blue-300 font-bold">✓✓</span>
                  </div>
                </div>
              </div>

              {/* Chat Input Mockup */}
              <div className="bg-[#1f2c34] p-2.5 flex items-center gap-2 border-t border-stone-700/60 text-stone-400 text-xs">
                <div className="bg-[#2a3942] rounded-full px-3 py-1.5 flex-1 text-stone-400 text-xs">
                  Mensagem
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA underneath WhatsApp section */}
        <div className="mt-8 text-center">
          <a
            id="btn-whatsapp-comprar-agora"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-base sm:text-lg py-3.5 px-8 rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>QUERO RECEBER NO MEU WHATSAPP POR R$ 4,99</span>
          </a>
        </div>
      </div>
    </section>
  );
}
