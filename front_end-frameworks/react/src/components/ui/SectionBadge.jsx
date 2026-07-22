function SectionBadge({ children }) {
    return (
      <span className="flex items-center justify-center gap-1 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
        <span className="text-[12px]" aria-hidden="true">
          ✦
        </span>
  
        {children}
  
        <span className="text-[12px]" aria-hidden="true">
          ✦
        </span>
      </span>
    );
  }
  
  export default SectionBadge;
