function Button({
    children,
    href,
    variant = "primary",
    size = "default",
    className = "",
  }) {
    const baseClass =
      "inline-flex items-center justify-center rounded-md font-semibold text-white transition";
  
    const variantClass =
      variant === "secondary"
        ? "border border-slate-800 bg-slate-950 shadow-lg shadow-slate-950/40 hover:bg-slate-900"
        : "bg-violet-500 shadow-lg shadow-violet-500/30 hover:bg-violet-600";
  
    const sizeClass =
      size === "small"
        ? "px-4 py-2 text-sm"
        : "px-5 py-3 text-sm";
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      >
        {children}
      </a>
    );
  }
  
  export default Button;
  