import { useEffect, useState } from "react";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 48); // 14m 48s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-black text-xs sm:text-sm font-semibold py-2 px-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-1.5 w-full sm:w-auto text-stone-950 font-bold">
          <Zap className="w-4 h-4 fill-stone-950 text-stone-950 animate-pulse" />
          <span>OFERTA RELÂMPAGO: SÉRIE COMPLETA E DUBLADA POR APENAS R$ 4,99 NO PIX</span>
        </div>

        <div className="flex items-center justify-center gap-3 w-full sm:w-auto text-stone-950">
          <span className="flex items-center gap-1 bg-amber-950/20 px-2 py-0.5 rounded text-stone-950">
            <Clock className="w-3.5 h-3.5 text-stone-950" />
            Oferta expira em: <span className="font-mono font-extrabold">{minutes}:{seconds}</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-stone-950/90 text-xs">
            <ShieldCheck className="w-3.5 h-3.5" /> Entrega Imediata
          </span>
        </div>
      </div>
    </div>
  );
}
