import { Film, Volume2, MonitorPlay, Zap, Shield, Heart, Sparkles, Tv, Smartphone, Laptop } from "lucide-react";
import { SERIES_INFO } from "../constants";

export function SeriesDetails() {
  const highlights = [
    {
      icon: Volume2,
      title: "100% Dublado em Português",
      desc: "Vozes de dubladores profissionais com interpretação emocionante, sem precisar pausar para ler legendas rápidas.",
    },
    {
      icon: Film,
      title: "Série Completa Sem Cortes",
      desc: "Todos os episódios na íntegra. Do primeiro encontro até a grande revelação final que vai te deixar de queixo caído.",
    },
    {
      icon: MonitorPlay,
      title: "Qualidade de Cinema (Full HD)",
      desc: "Imagens nítidas e som cinematográfico para você ter a melhor experiência visual.",
    },
    {
      icon: Zap,
      title: "Sem Anúncios ou Mensalidades",
      desc: "Ao contrário dos aplicativos que cobram R$ 30 a R$ 50 todo mês e enchem de propaganda, aqui o pagamento é único de R$ 4,99.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] text-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-3">
            O Fenômeno do Momento
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Por Que Todos Estão Viciados Nessa Série?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Uma história de vingança, poder oculto e reviravoltas de tirar o fôlego que conquistou milhões de pessoas na internet.
          </p>
        </div>

        {/* Story Focus Box */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-amber-400/30 max-w-[220px]">
                <img
                  src="/capa-serie.jpg"
                  alt="O Grande e Poderoso Gênio"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-amber-300">Dorama & Minissérie VIP</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-700">
                  🎭 Drama & Vingança
                </span>
                <span className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-700">
                  💍 Casamento por Contrato
                </span>
                <span className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-700">
                  ⚡ Identidade Secreta
                </span>
                <span className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-700">
                  👑 Poder Sobrenatural
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-300">
                A Grande Revelação: O Marido Que Ela Subestimou
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Durante cinco longos anos, ela o tratou como um homem comum e insignificante, sem imaginar que ele guardava um poder capaz de controlar reinos e riquezas inimagináveis. Quando o prazo do pacto se encerra, as máscaras caem e o arrependimento bate à porta.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-amber-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Maratona Completa
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-400 fill-red-400" /> Romance Intenso
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 rounded-xl p-5 transition duration-300 shadow-md flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3.5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{item.title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device Compatibility Banner */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-5 sm:p-6 text-center">
          <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-3">
            Compatibilidade Total
          </p>
          <h4 className="text-white font-bold text-base sm:text-lg mb-4">
            Assista no Dispositivo da Sua Preferência
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              <span>Celular (Android & iOS)</span>
            </div>
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-amber-400" />
              <span>Smart TV (Todos os modelos)</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-400" />
              <span>Computador & Notebook</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
