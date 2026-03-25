import Header from "@/app/components/Header";

interface OrgNode {
  name: string;
  children?: OrgNode[];
}

const org: OrgNode = {
  name: "Diretoria",
  children: [
    { name: "T\u00e9cnico TI" },
    { name: "Jur\u00eddico" },
    { name: "Cont\u00e1bil" },
    {
      name: "Comercial Licita\u00e7\u00f5es e Contratos",
      children: [
        { name: "Licita\u00e7\u00f5es e Contratos" },
        { name: "Cadastros" },
        { name: "Capta\u00e7\u00e3o de Clientes" },
      ],
    },
    {
      name: "Operacional de Vendas",
      children: [
        { name: "Atendimento Corporativos" },
        { name: "Atendimento Governo" },
        { name: "Atendimento Postos" },
      ],
    },
    {
      name: "Operacional",
      children: [
        {
          name: "Concilia\u00e7\u00e3o/Reembolso",
          children: [
            { name: "A\u00e9reo e Terrestre" },
            { name: "Eventos" },
            { name: "Reembolsos" },
          ],
        },
        {
          name: "Faturamento",
          children: [
            { name: "Governo" },
            { name: "Corporativo" },
            { name: "Eventos" },
            { name: "Terrestre" },
          ],
        },
        {
          name: "Lei Kandir/Cobran\u00e7a",
          children: [
            { name: "Cias A\u00e9reas" },
            { name: "Demais Fornecedores" },
            { name: "Demais Clientes" },
          ],
        },
      ],
    },
    {
      name: "Administrativo Financeiro e RH",
      children: [
        {
          name: "RH",
          children: [
            { name: "Admiss\u00f5es e Demiss\u00f5es" },
            { name: "F\u00e9rias" },
            { name: "Benef\u00edcios" },
            { name: "Ponto Eletr\u00f4nico" },
          ],
        },
        {
          name: "Financeiro",
          children: [
            { name: "Notas Fiscais" },
            { name: "Contas a Pagar e a Receber" },
            { name: "Concilia\u00e7\u00e3o Banc\u00e1ria" },
            { name: "Fluxo de Caixa" },
          ],
        },
        {
          name: "Operacional Administrativo",
          children: [
            { name: "Compras" },
            { name: "Manuten\u00e7\u00f5es e Servi\u00e7os Gerais" },
            { name: "Arquivo" },
          ],
        },
      ],
    },
  ],
};

const LINE_H = 22;
const LINE_COLOR = "#94a3b8";

interface NodeStyle {
  bg: string; fg: string; fw: string; fs: string;
  minW: string; maxW: string; r: string; py: string; px: string;
}

const NODE_STYLES: NodeStyle[] = [
  { bg: "#003366", fg: "#ffffff", fw: "700", fs: "14px", minW: "130px", maxW: "160px", r: "8px",  py: "9px",  px: "14px" },
  { bg: "#1a4f7a", fg: "#ffffff", fw: "600", fs: "12px", minW: "120px", maxW: "160px", r: "6px",  py: "8px",  px: "12px" },
  { bg: "#4a7fa5", fg: "#ffffff", fw: "500", fs: "11px", minW: "95px",  maxW: "140px", r: "6px",  py: "7px",  px: "10px" },
  { bg: "#bed3e4", fg: "#1a2333", fw: "400", fs: "11px", minW: "85px",  maxW: "120px", r: "4px",  py: "6px",  px: "8px"  },
];

function NodeBox({ name, depth }: { name: string; depth: number }) {
  const s = NODE_STYLES[Math.min(depth, NODE_STYLES.length - 1)];
  return (
    <div
      style={{
        backgroundColor: s.bg,
        color: s.fg,
        fontWeight: s.fw,
        fontSize: s.fs,
        padding: `${s.py} ${s.px}`,
        minWidth: s.minW,
        maxWidth: s.maxW,
        borderRadius: s.r,
        textAlign: "center",
        lineHeight: "1.35",
        boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
        wordBreak: "break-word",
      }}
    >
      {name}
    </div>
  );
}

function OrgTree({ node, depth = 0 }: { node: OrgNode; depth?: number }) {
  const children = node.children ?? [];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <NodeBox name={node.name} depth={depth} />

      {children.length > 0 && (
        <>
          {/* Vertical drop from node to children row */}
          <div
            style={{
              width: 2,
              height: LINE_H,
              backgroundColor: LINE_COLOR,
              flexShrink: 0,
            }}
          />

          {/* Children row */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {children.map((child, i) => {
              const isOnly = children.length === 1;
              const isFirst = i === 0;
              const isLast = i === children.length - 1;
              return (
                <div
                  key={child.name + String(i)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 6px",
                    position: "relative",
                  }}
                >
                  {/* Connector: horizontal bar + vertical drop */}
                  <div style={{ position: "relative", width: "100%", height: LINE_H }}>
                    {!isOnly && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: isFirst ? "50%" : 0,
                          right: isLast ? "50%" : 0,
                          height: 2,
                          backgroundColor: LINE_COLOR,
                        }}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 2,
                        height: LINE_H,
                        backgroundColor: LINE_COLOR,
                      }}
                    />
                  </div>

                  <OrgTree node={child} depth={depth + 1} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function Organograma() {
  return (
    <>
      <Header />

      <main className="flex-1 w-full px-6 py-12">
        <section className="mb-8 text-center max-w-5xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ color: "var(--brand-blue)" }}
          >
            Organograma Funcional
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Estrutura organizacional da Ideias Turismo, com as \u00e1reas, setores e
            suas respectivas fun\u00e7\u00f5es.
          </p>
        </section>

        <div
          className="rounded-xl border border-gray-200 shadow-sm"
          style={{
            backgroundColor: "var(--brand-surface)",
            overflowX: "auto",
            padding: "40px 32px",
          }}
        >
          <div
            style={{
              minWidth: "fit-content",
              display: "flex",
              justifyContent: "center",
              padding: "0 16px",
            }}
          >
            <OrgTree node={org} />
          </div>
        </div>

        {/* Legenda */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {[
            { label: "Diretoria", bg: "#003366", fg: "#fff" },
            { label: "Departamentos", bg: "#1a4f7a", fg: "#fff" },
            { label: "Setores", bg: "#4a7fa5", fg: "#fff" },
            { label: "Fun\u00e7\u00f5es", bg: "#bed3e4", fg: "#1a2333" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--brand-muted)" }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  backgroundColor: item.bg,
                  flexShrink: 0,
                }}
              />
              {item.label}
            </div>
          ))}
        </div>
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
            SIG Quadra 1, Lotes 985/1055, Sala 20T &mdash; Bras\u00edlia, DF &mdash; CEP 70610-410
          </span>
        </div>
      </footer>
    </>
  );
}
