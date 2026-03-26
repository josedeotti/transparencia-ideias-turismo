import Header from "@/app/components/Header";

const CANAL_URL =
  "https://acesso.eticonfidencial.com.br/complaint/minimal/Ideias+Turismo";

export default function CanalDeDenuncias() {
  return (
    <>
      <Header />

      <main
        className="flex-1 flex flex-col"
        style={{ minHeight: "calc(100vh - 130px)" }}
      >
        {/* Hero */}
        <section className="max-w-5xl mx-auto w-full px-6 pt-10 pb-6 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
            style={{ color: "var(--brand-blue)" }}
          >
            Canal de Denúncias
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-5"
            style={{ color: "var(--brand-muted)" }}
          >
            Utilize este canal para reportar, de forma sigilosa e segura,
            condutas que violem o Código de Ética, as políticas internas ou a
            legislação vigente. Todas as comunicações são tratadas com
            confidencialidade.
          </p>

          {/* Botão de acesso direto */}
          <a
            href={CANAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--brand-orange)",
              color: "#ffffff",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Abrir canal em nova aba
          </a>
        </section>

        {/* iframe */}
        <div
          className="flex-1 w-full px-4 pb-10"
          style={{ minHeight: "680px" }}
        >
          <iframe
            src={CANAL_URL}
            title="Canal de Denúncias — Ideias Turismo"
            className="w-full rounded-xl border border-gray-200 shadow-sm"
            style={{
              height: "680px",
              backgroundColor: "var(--brand-surface)",
            }}
            allow="clipboard-write"
            loading="lazy"
          />
        </div>
      </main>

      <footer
        className="w-full py-6 border-t border-gray-200"
        style={{ backgroundColor: "var(--brand-surface)" }}
      >
        <div
          className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "var(--brand-muted)" }}
        >
          <span>Ideias Turismo Ltda &mdash; CNPJ: 02.676.310/0001-56</span>
          <span>
            SIG Quadra 1, Lotes 985/1055, Sala 20T &mdash; Brasília, DF
            &mdash; CEP 70610-410
          </span>
        </div>
      </footer>
    </>
  );
}
