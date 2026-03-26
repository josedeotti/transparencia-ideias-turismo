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
        <section className="max-w-4xl mx-auto w-full px-6 pt-10 pb-8">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-2 leading-tight"
            style={{ color: "var(--brand-blue)" }}
          >
            Canal de Denúncias
          </h1>
          <p
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--brand-orange)" }}
          >
            Fale com segurança. Sua voz importa.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--brand-muted)" }}
          >
            A Ideias Turismo mantém um canal de denúncias estruturado para
            garantir que qualquer pessoa — colaborador, parceiro ou cidadão —
            possa relatar situações de forma segura, responsável e, se desejar,
            totalmente anônima.
          </p>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--brand-muted)" }}
          >
            Sabemos que denunciar nem sempre é uma decisão fácil. Por isso,
            este canal foi desenvolvido para assegurar um ambiente de
            confiança, onde sua manifestação será tratada com:
          </p>

          {/* Garantias */}
          <ul className="mb-8 space-y-3">
            {[
              {
                title: "Confidencialidade absoluta",
                desc: "suas informações são protegidas e acessadas apenas por pessoas autorizadas",
              },
              {
                title: "Possibilidade de anonimato",
                desc: "você pode registrar sua denúncia sem se identificar",
              },
              {
                title: "Imparcialidade na apuração",
                desc: "todos os relatos são analisados com independência e critérios técnicos",
              },
              {
                title: "Proteção contra retaliações",
                desc: "não é permitido qualquer tipo de retaliação contra quem relata uma preocupação de boa-fé",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--brand-orange)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  <strong style={{ color: "var(--brand-text)" }}>
                    {item.title}:
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--brand-muted)" }}
          >
            Este canal deve ser utilizado para comunicar situações como:
          </p>

          {/* Situações */}
          <ul className="mb-8 space-y-2">
            {[
              "Condutas antiéticas ou inadequadas",
              "Suspeitas de fraude, corrupção ou irregularidades",
              "Assédio moral ou sexual",
              "Descumprimento de normas internas ou da legislação",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--brand-muted)" }}
          >
            Após o registro, sua manifestação será analisada por equipe
            responsável, seguindo um processo estruturado de apuração,
            garantindo seriedade, sigilo e tratamento adequado de cada caso.
          </p>

          <p
            className="text-base leading-relaxed mb-2"
            style={{ color: "var(--brand-muted)" }}
          >
            Se você presenciou ou tem conhecimento de alguma situação que não
            esteja de acordo com nossos valores ou com a lei, não ignore.
          </p>

          <p
            className="text-base font-semibold"
            style={{ color: "var(--brand-blue)" }}
          >
            Sua atitude contribui para um ambiente mais ético, seguro e
            transparente para todos.
          </p>
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
