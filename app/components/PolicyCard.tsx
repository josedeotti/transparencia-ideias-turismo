interface PolicyCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PolicyCard({
  title,
  description,
  href,
}: PolicyCardProps) {
  return (
    <article
      className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      {/* Ícone */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg"
        style={{ backgroundColor: "#e8f0fb" }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          style={{ color: "var(--brand-blue)" }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-1 flex-1">
        <h2
          className="text-base font-semibold leading-snug"
          style={{ color: "var(--brand-text)" }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
            {description}
          </p>
        )}
      </div>

      {/* Link */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:underline"
        style={{ color: "var(--brand-orange)" }}
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
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 0 2 2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Acessar documento
      </a>
    </article>
  );
}
