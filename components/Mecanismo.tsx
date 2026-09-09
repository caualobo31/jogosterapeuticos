import Section from "./Section";
import Reveal from "./Reveal";
import ScrollCue from "./ScrollCue";

const categorias = [
  {
    titulo: "Dislexia · Leitura",
    desc: "Consciência fonológica, rima, sílabas, formação de palavras.",
  },
  {
    titulo: "Discalculia · Matemática",
    desc: "Número, quantidade, antecessor e sucessor, operações.",
  },
  {
    titulo: "TDAH · Funções Executivas",
    desc: "Controle inibitório, memória de trabalho, atenção, planejamento.",
  },
  {
    titulo: "Disgrafia · Coordenação",
    desc: "Grafomotricidade, traçado, percepção visual, simetria.",
  },
  {
    titulo: "Disortografia · Ortografia",
    desc: "Regras, discriminação visual, memória da escrita.",
  },
];

export default function Mecanismo() {
  return (
    <Section bg="cream">
      <Reveal>
        <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.5px] text-brand">
          Não são fichas
        </p>
        <h2 className="mt-2 font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          São <span className="text-brand">jogos de verdade</span>, por dificuldade
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] font-body text-[14px] leading-relaxed text-muted">
          Cada jogo do Método Ludo-Argentino é construído sobre a abordagem
          que fundou a psicopedagogia clínica: a{" "}
          <strong className="font-semibold text-brand">
            escola argentina
          </strong>{" "}
          de Fernández, Paín e Visca, somada à{" "}
          <strong className="font-semibold text-brand">
            base piagetiana
          </strong>
          . Tudo adaptado à língua portuguesa e à realidade do seu
          consultório.
        </p>

        <div className="mx-auto mt-8 grid max-w-[560px] grid-cols-2 gap-3 sm:grid-cols-3">
          {categorias.map(({ titulo, desc }) => (
            <div
              key={titulo}
              className="rounded-card border border-bordersoft bg-warmwhite p-4 text-left"
            >
              <p className="font-heading text-[13px] font-semibold text-brand">
                {titulo}
              </p>
              <p className="mt-1.5 font-body text-[12px] leading-relaxed text-muted">
                {desc}
              </p>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-card bg-gradient-to-br from-brand-dark to-brand-vivid p-4 text-center shadow-lg shadow-brand/25">
            <p className="font-heading text-[14px] font-semibold leading-snug text-white">
              10 jogos em cada.
              <br />
              50 no total.
            </p>
          </div>
        </div>

        <ScrollCue to="passos" label="Ver a próxima seção" />
      </Reveal>
    </Section>
  );
}
