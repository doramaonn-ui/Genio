import { ShieldCheck, PlayCircle, Sparkles, Smartphone, CheckCircle2, Lock, ArrowRight, Zap } from "lucide-react";
import { CHECKOUT_URL, SERIES_INFO } from "../constants";
import { useSeriesImage } from "../context/SeriesImageContext";

export function HeroSection() {
  const { imageUrl } = useSeriesImage();

  return (
    <section className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e1017] via-[#0b0c10] to-[#07080b]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-orange-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-xs text-amber-300 font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Série Completa e Dublada
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
            <Zap className="w-3.5 h-3.5 text-emerald-400" /> Pagamento Único no Pix (R$ 6,99)
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
            <Smartphone className="w-3.5 h-3.5" /> Entrega Direta no WhatsApp
          </span>
        </div>

        {/* Main Grid: Cover Poster + Sales Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Poster (Clean, no text overlays + Upload Option) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-stone-900 shadow-2xl">
                {/* Clean Poster Image with NO text overlay */}
                <img
                  id="hero-series-poster-img"
                  src={imageUrl}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('Imagem.png') && !target.src.includes('capa-serie.jpg')) {
                      target.src = '/Imagem.png';
                    }
                  }}
                  alt="Capa oficial da série O Grande e Poderoso Gênio"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Synopsis, Price & CTA */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 self-start bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <PlayCircle className="w-4 h-4 text-amber-400" />
              Série Completa e Dublada
            </div>

            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight leading-tight mb-4 drop-shadow-sm">
              {SERIES_INFO.title}
            </h1>

            {/* Synopsis Card */}
            <div className="bg-stone-900/90 border border-amber-500/20 rounded-xl p-4 sm:p-5 mb-6 shadow-lg relative backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <span>📖 Sinopse</span>
              </div>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed italic border-l-2 border-amber-500 pl-3">
                "{SERIES_INFO.synopsis}"
              </p>
            </div>

            {/* WhatsApp Delivery Highlight Box */}
            <div className="bg-gradient-to-r from-emerald-950/60 to-stone-900 border border-emerald-500/40 rounded-xl p-3.5 sm:p-4 mb-6 flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.542zm6.22-3.805c1.498.889 3.125 1.358 4.792 1.359 5.434 0 9.855-4.42 9.858-9.857.002-2.634-1.024-5.11-2.888-6.974-1.864-1.864-4.341-2.89-6.979-2.891-5.435 0-9.856 4.421-9.859 9.858-.001 1.745.474 3.447 1.38 4.954l-.872 3.187 3.398-.891zm10.742-7.391c-.08-.133-.294-.213-.615-.373-.321-.16-1.896-.935-2.19-.1.042-.294.107-.508.16-.722.213-.214.267-.267.4-.08.133.133.213.293.267.453.053.16.107.828.48 1.44 1.109 1.94 2.138 2.585 3.738 2.906.4.08.774.062 1.066-.027.327-.1.988-.404 1.127-.795.14-.391.14-.727.098-.795z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-emerald-400">
                  {SERIES_INFO.whatsappNotice}
                </p>
                <p className="text-stone-300 text-xs">
                  Liberação imediata assim que seu Pix for confirmado.
                </p>
              </div>
            </div>

            {/* Price Box & CTA Button */}
            <div className="bg-gradient-to-b from-stone-900 via-stone-900/95 to-black border-2 border-amber-500/50 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md">
                OFERTA PIX • R$ 4,99
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-stone-400 line-through block">
                    De {SERIES_INFO.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-amber-400 uppercase">Por apenas</span>
                    <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                      {SERIES_INFO.price}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">no Pix</span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs">
                  <div className="text-emerald-400 font-semibold flex items-center sm:justify-end gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Acesso Imediato
                  </div>
                  <span className="text-amber-300 font-medium block">Pagamento Exclusivo via Pix</span>
                </div>
              </div>

              {/* Main CTA Button */}
              <a
                id="btn-hero-comprar-agora"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-lg sm:text-xl py-4 px-8 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center uppercase tracking-wide cursor-pointer"
              >
                <span>COMPRAR AGORA</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition duration-300" />
              </a>

              {/* Safe Checkout Badges */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-4 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Checkout Seguro Lowify
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Garantia de 7 Dias
                </span>
                <span className="text-stone-300 font-medium">
                  Apenas R$ 4,99 via Pix
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
