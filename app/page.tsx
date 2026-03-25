import Header from "@/app/components/Header";
import PolicyCard from "@/app/components/PolicyCard";

const policies = [
  {
    title: "Código de Ética",
    description:
      "Princípios e valores que orientam a conduta de todos os colaboradores e parceiros da Ideias Turismo.",
    href: "/politicas/codigo-de-etica.pdf",
  },
  {
    title: "Programa de Integridade",
    description:
      "Conjunto de mecanismos e procedimentos que reforçam o compromisso da empresa com a ética e a conformidade.",
    href: "/politicas/programa-de-integridade.pdf",
  },
  {
    title: "Política Corporativa de Combate à Corrupção",
    description:
      "Diretrizes para prevenção, detecção e resposta a práticas corruptivas em todas as operações da empresa.",
    href: "/politicas/combate-a-corrupcao.pdf",
  },
  {
    title: "Política Corporativa de Medidas Disciplinares",
    description:
      "Procedimentos e critérios adotados para lidar com condutas que violem as normas internas da organização.",
    href: "/politicas/medidas-disciplinares.pdf",
  },
  {
    title: "Política Corporativa de Privacidade de Dados",
    description:
      "Como a Ideias Turismo coleta, trata, armazena e protege os dados pessoais de clientes e colaboradores.",
    href: "/politicas/privacidade-de-dados.pdf",
  },
  {
    title: "Regimento Interno do Comitê de Ética",
    description:
      "Normas de funcionamento, competências e responsabilidades do Comitê de Ética da Ideias Turismo.",
    href: "/politicas/regimento-comite-de-etica.pdf",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ color: "var(--brand-blue)" }}
          >
            Políticas Corporativas
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            A Ideias Turismo acredita na transparência como pilar fundamental da
            sua gestão. Abaixo você encontra os documentos que norteiam nossa
            conduta ética, nossas práticas de integridade e os compromissos com
            colaboradores, clientes e parceiros.
          </p>
        </section>

        {/* Grid de cards */}
        <section aria-label="Documentos de políticas corporativas">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy) => (
              <PolicyCard
                key={policy.href}
                title={policy.title}
                description={policy.description}
                href={policy.href}
              />
            ))}
          </div>
        </section>
      </main>

      <footer
        className="w-full py-6 mt-8 border-t border-gray-200"
        style={{ backgroundColor: "var(--brand-surface)" }}
      >
        <div
          className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "var(--brand-muted)" }}
        >
          <span>Ideias Turismo Ltda &mdash; CNPJ: 02.676.310/0001-56</span>
          <span>
            SIG Quadra 1, Lotes 985/1055, Sala 20T &mdash; Brasília, DF &mdash; CEP 70610-410
          </span>
        </div>
      </footer>
    </>
  );
}
