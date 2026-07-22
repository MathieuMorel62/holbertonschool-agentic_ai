import FeatureCard from "../cards/FeatureCard.jsx";
import features from "../../data/features.js";
import SectionBadge from "../ui/SectionBadge.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";


function Features() {
  return (
    <section
      id="features-section"
      className="scroll-mt-16 border-b border-slate-900 bg-black px-6 py-24 text-slate-50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionBadge>Features</SectionBadge>

          <SectionTitle
            className="mt-8"
            highlight="With powerful AI agents"
          >
            Everything You Need to Build
          </SectionTitle>
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
