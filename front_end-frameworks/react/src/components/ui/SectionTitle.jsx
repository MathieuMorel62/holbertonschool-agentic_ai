function SectionTitle({
    children,
    highlight,
    size = "default",
    className = "",
  }) {
    const sizeClass =
      size === "large"
        ? "text-5xl md:text-7xl"
        : "text-4xl md:text-5xl";
  
    return (
      <h2
        className={`max-w-4xl font-black leading-none tracking-tight ${sizeClass} ${className}`}
      >
        {children}
  
        <span className="block text-violet-300">
          {highlight}
        </span>
      </h2>
    );
  }
  
  export default SectionTitle;
