import Header from "@/app/components/Header";
import PolicyCard from "@/app/components/PolicyCard";

const policies: Array<{ title: string; description: string; href: string }> = [
  // Adicionar os documentos aqui conforme disponibilizados
];

export default function EquidadeDeGenero() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <section className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ color: "var(--brand-blue)" }}
          >
            Programa de Equidade de Gênero
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            A Ideias Turismo reafirma seu compromisso com a promoção da equidade
            de gênero em todas as suas relações. Aqui você encontra os documentos
            que orientam nossas práticas e políticas voltadas à igualdade de
            oportunidades para todos os colaboradores.
          </p>
        </section>

        <section aria-label="Documentos do Programa de Equidade de Gênero">
          {policies.length > 0 ? (
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
          ) : (
            <div
              className="flex flex-col items-center justify-center py-20 rounded-xl border border-dashed border-gray-300 text-center gap-4"
              style={{ backgroundColor: "var(--brand-surface)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
                style={{ color: "var(--brand-muted)" }}
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p
                className="text-base font-medium"
                style={{ color: "var(--brand-muted)" }}
              >
                Os documentos serão disponibilizados em breve.
              </p>
            </div>
          )}
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
