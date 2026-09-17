import { Star, CheckCircle2, MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Juliana Mendes",
      location: "São Paulo, SP",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      time: "Comprou há 2 horas",
      comment:
        "Gente, eu estava louca atrás dessa série dublada! Paguei os R$ 6,99 no Pix e em menos de 1 minuto chegou tudo certinho no meu WhatsApp. A história é simplesmente viciante, chorei e vibrei com o final!",
    },
    {
      name: "Carlos Eduardo Silva",
      location: "Belo Horizonte, MG",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      time: "Comprou ontem",
      comment:
        "Dublagem impecável, parecendo dublagem de cinema da Netflix! Assisti direto na minha Smart TV pelo link que me mandaram no zap. O marido gênio dando a volta por cima foi espetacular.",
    },
    {
      name: "Aline Ferreira",
      location: "Rio de Janeiro, RJ",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      time: "Comprou há 1 dia",
      comment:
        "Por R$ 6,99 vale CADA CENTAVO! Não tem pegadinha de assinatura, recebi os episódios completos sem nenhum corte. Já recomendei pra todo meu grupo da família.",
    },
    {
      name: "Rodrigo Almeida",
      location: "Curitiba, PR",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      time: "Comprou há 3 dias",
      comment:
        "Chegou imediatamente no meu WhatsApp. Muito prático de abrir no celular enquanto viajo no ônibus. A trama é boa demais, daquelas que você não consegue parar no episódio 1.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] text-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full inline-block mb-3">
            Depoimentos Verificados
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            O Que Quem Já Assistiu Está Dizendo?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Mais de 1.800 pessoas já garantiram o acesso completo e estão apaixonadas pela série.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-stone-900/80 border border-stone-800 hover:border-amber-500/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Compra Verificada
                  </span>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-stone-800/80">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                />
                <div className="text-xs">
                  <h4 className="font-bold text-white">{rev.name}</h4>
                  <span className="text-stone-400 block">{rev.location} • {rev.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
