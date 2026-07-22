function FeatureCard({ icon: Icon, title, description }) {
    return (
      <article className="min-h-40 rounded-2xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/40">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/40">
          <Icon className="h-5 w-5" />
        </div>
  
        <h3 className="mt-5 text-base font-bold text-slate-50">
          {title}
        </h3>
  
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </article>
    );
  }
  
  export default FeatureCard;
  