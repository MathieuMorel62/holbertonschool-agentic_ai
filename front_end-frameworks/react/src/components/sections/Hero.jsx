import StatCard from "../cards/StatCard.jsx";
import Button from "../ui/Button.jsx";
import SectionBadge from "../ui/SectionBadge.jsx";


function Hero() {
    return (
      <section
        id="hero-section"
        className="relative overflow-hidden border-b border-slate-900 bg-slate-950 pb-24 pt-36 text-slate-50"
      >
        {/* Dégradé principal */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.35),transparent_32%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.25),transparent_28%),linear-gradient(135deg,#1e1238_0%,#0f172a_45%,#020617_100%)]" />
  
        {/* Grille légère en arrière-plan */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
  
        {/* Fondu vers le noir en bas */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
  
        {/* Assombrissement des bords */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,6,23,0.45)_75%)]" />
  
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 text-center">
          <SectionBadge>The future of coding</SectionBadge>
  
          <h1 className="max-w-5xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            Build smarter workflows
  
            <span className="block text-violet-300">
              with Agentic AI
            </span>
          </h1>
  
          <p className="max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Create autonomous AI agents that think, plan, and execute complex
            tasks. Transform your business with intelligent automation.
          </p>
  
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://www.holbertonschool.fr/">
              Start learning with Holberton School →
            </Button>

            <Button
              href="https://www.holbertonschool.fr/methodologie"
              variant="secondary"
            >
              Methodology
            </Button>
          </div>
  
          <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <StatCard value="10K+" label="Active agents" />
            <StatCard value="99.9%" label="Uptime" />
            <StatCard value="50M+" label="Tasks automated" />
            <StatCard value="24/7" label="Support" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
