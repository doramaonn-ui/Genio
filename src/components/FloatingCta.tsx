import { useEffect, useState } from "react";
import { ArrowRight, Lock, Zap } from "lucide-react";
import { CHECKOUT_URL, SERIES_INFO } from "../constants";
import { useSeriesImage } from "../context/SeriesImageContext";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const { imageUrl } = useSeriesImage();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-md border-t-2 border-amber-500/50 p-3 sm:py-3.5 shadow-2xl transition-all duration-300 transform translate-y-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Thumbnail & Info */}
        <div className="flex items-center gap-3">
          <img
            id="floating-cta-thumbnail-img"
            src={imageUrl}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('Imagem.png') && !target.src.includes('capa-serie.jpg')) {
                target.src = '/Imagem.png';
              }
            }}
            alt="Miniatura"
            referrerPolicy="no-referrer"
            className="w-10 h-14 object-cover rounded-md border border-amber-400/40 shrink-0 hidden sm:block"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs sm:text-sm truncate max-w-[180px] sm:max-w-none">
                {SERIES_INFO.title}
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-emerald-500/30 hidden md:inline">
                DUBLADA
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 text-xs text-stone-300">
              <span className="line-through text-stone-500 hidden sm:inline">{SERIES_INFO.originalPrice}</span>
              <span className="font-black text-amber-400 text-sm sm:text-base">{SERIES_INFO.price}</span>
              <span className="text-[11px] text-emerald-400 font-semibold">(no Pix)</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Button */}
        <a
          id="btn-floating-comprar-agora"
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.02] uppercase tracking-wide shrink-0"
        >
          <span>COMPRAR AGORA</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

      </div>
    </div>
  );
}
