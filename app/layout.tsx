import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transparência | Ideias Turismo",
  description:
    "Acesse as políticas corporativas da Ideias Turismo: Código de Ética, Programa de Integridade, Políticas de Combate à Corrupção, Medidas Disciplinares, Privacidade de Dados e Regimento do Comitê de Ética.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Transparência | Ideias Turismo",
    description: "Políticas corporativas da Ideias Turismo.",
    siteName: "Ideias Turismo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
