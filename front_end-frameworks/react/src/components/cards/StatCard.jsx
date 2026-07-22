function StatCard({ value, label }) {
    return (
      <article className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/40">
        <strong className="block text-4xl font-black text-violet-300">
          {value}
        </strong>
  
        <span className="mt-2 block text-xs text-slate-500">
          {label}
        </span>
      </article>
    );
  }
  
  export default StatCard;
