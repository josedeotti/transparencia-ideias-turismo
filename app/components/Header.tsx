import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

function hasLogo(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "logo.png"));
  } catch {
    return false;
  }
}

export default function Header() {
  const logoExists = hasLogo();

  return (
    <header
      style={{ backgroundColor: "var(--brand-blue)" }}
      className="w-full shadow-md"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="https://www.ideiasturismo.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="Ir para o site da Ideias Turismo"
        >
          {logoExists ? (
            <Image
              src="/logo.png"
              alt="Ideias Turismo"
              width={160}
              height={48}
              className="object-contain"
              priority
            />
          ) : (
            <span className="text-white text-xl font-bold tracking-tight">
              Ideias Turismo
            </span>
          )}
        </Link>

        <span className="text-white text-sm font-medium tracking-wide uppercase opacity-80 hidden sm:block">
          Transparência Corporativa
        </span>
      </div>
    </header>
  );
}
