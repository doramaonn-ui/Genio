import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const PURCHASES = [
  { name: "Mariana R.", city: "São Paulo - SP", time: "há 2 minutos" },
  { name: "Lucas F.", city: "Belo Horizonte - MG", time: "há 4 minutos" },
  { name: "Juliana C.", city: "Rio de Janeiro - RJ", time: "há 1 minuto" },
  { name: "Gabriel S.", city: "Curitiba - PR", time: "há 3 minutos" },
  { name: "Beatriz M.", city: "Porto Alegre - RS", time: "há 5 minutos" },
];

export function RecentSalesToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    // Show first toast after 4s
    const firstTimeout = setTimeout(() => {
      setCurrent(0);
    }, 4000);

    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === null) return 0;
        const next = (prev + 1) % PURCHASES.length;
        return next;
      });
    }, 12000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [closed]);

  if (current === null || closed) return null;

  const item = PURCHASES[current];

  return (
    <div className="fixed top-12 left-4 z-50 animate-fade-in transition-all duration-300">
      <div className="bg-stone-900/95 border border-emerald-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 text-xs max-w-xs">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold truncate">
            {item.name} <span className="text-[10px] text-stone-400 font-normal">({item.city})</span>
          </p>
          <p className="text-[11px] text-emerald-400 font-medium">
            Recebeu acesso no WhatsApp • {item.time}
          </p>
        </div>
        <button
          onClick={() => setClosed(true)}
          className="text-stone-500 hover:text-stone-300 p-0.5"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
