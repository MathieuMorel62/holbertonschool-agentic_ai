function InsightCard({ insight, index }) {
    let cardClassName =
      "group relative min-h-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40";
  
    if (index === 0) {
      cardClassName =
        "group relative min-h-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 sm:col-span-2";
    }
  
    return (
      <article className={cardClassName}>
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-110 group-hover:opacity-75"
          src={insight.image}
          alt={insight.title}
        />
  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
  
        <div className="relative z-10 flex min-h-80 flex-col items-start justify-end p-6 text-left">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            {insight.category}
          </span>
  
          <h3 className="mt-2 text-2xl font-bold">
            {insight.title}
          </h3>
  
          <p className="mt-1 max-w-sm text-sm text-slate-400">
            {insight.description}
          </p>
        </div>
      </article>
    );
  }
  
  export default InsightCard;
  