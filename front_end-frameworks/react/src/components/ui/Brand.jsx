import { BrainCircuit } from "lucide-react";

function Brand({ href = "#hero-section", variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <a
      href={href}
      className={
        isFooter
          ? "flex items-center gap-4 font-bold text-slate-50"
          : "flex items-center gap-2 font-bold text-slate-50"
      }
    >
      <span
        className={
          isFooter
            ? "flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-500/40"
            : "flex items-center justify-center"
        }
      >
        <BrainCircuit
          className={
            isFooter
              ? "h-4 w-4"
              : "h-6 w-6 text-violet-500"
          }
        />
      </span>

      <span className={isFooter ? "text-sm" : undefined}>
        Agentic AI
      </span>
    </a>
  );
}

export default Brand;
