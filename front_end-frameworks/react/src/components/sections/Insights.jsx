import { useEffect, useState } from "react";
import SectionBadge from "../ui/SectionBadge.jsx";
import InsightCard from "../cards/InsightCard.jsx";
import { getInsights } from "../../services/insightsService.js";
import SectionTitle from "../ui/SectionTitle.jsx";


function Insights() {
  const [insights, setInsights] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await getInsights();
        setInsights(data);
      } catch (loadError) {
        setError("Unable to load insights at the moment...");
        console.error(loadError);
      }
    }

    loadInsights();
  }, []);

  return (
    <section
      id="insights-section"
      className="scroll-mt-16 border-b border-slate-900 bg-black px-6 pb-24 text-slate-50"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <SectionBadge>Insights</SectionBadge>

        <SectionTitle
          className="mt-8"
          highlight="Through real-world scenes"
        >
          Explore Agentic AI
        </SectionTitle>

        <div className="mt-16 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {error && (
            <p className="text-sm text-slate-400">
              {error}
            </p>
          )}

          {!error &&
            insights.map((insight, index) => (
              <InsightCard
                key={insight.title}
                insight={insight}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
