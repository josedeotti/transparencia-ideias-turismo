"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Políticas Corporativas", href: "/" },
  { label: "Programa de Equidade de Gênero", href: "/equidade-de-genero" },
  { label: "Organograma", href: "/organograma" },
  { label: "Canal de Denúncias", href: "/canal-de-denuncias" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Menu principal">
      <ul className="flex flex-wrap gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-150"
                style={{
                  color: isActive ? "var(--brand-blue)" : "white",
                  backgroundColor: isActive ? "white" : "transparent",
                  opacity: isActive ? 1 : 0.85,
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
