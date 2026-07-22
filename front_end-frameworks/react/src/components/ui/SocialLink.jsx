function SocialLink({ href, label, iconClassName }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"
      >
        <i className={iconClassName} aria-hidden="true" />
      </a>
    );
  }
  
  export default SocialLink;
  