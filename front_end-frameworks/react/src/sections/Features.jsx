import FeatureCard from "../components/FeatureCard.jsx";
import features from "../data/features.js";

function Features() {
  return (
    <section
      id="features-section"
      className="scroll-mt-16 border-b border-slate-900 bg-black px-6 py-24 text-slate-50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            ✦ Features ✦
          </span>

          <h2 className="mt-8 text-4xl font-black leading-none tracking-tight md:text-5xl">
            Everything You Need to Build
            <span className="block text-violet-300">
              With powerful AI agents
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
