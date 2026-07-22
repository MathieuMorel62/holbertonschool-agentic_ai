import { useEffect, useState } from "react";

import InsightCard from "../components/InsightCard.jsx";
import { getInsights } from "../services/insightsService.js";

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
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300 mt-20">
          ✦ Insights ✦
        </span>

        <h2 className="mt-8 text-4xl font-black leading-none tracking-tight md:text-5xl">
          Explore Agentic AI
          <span className="block text-violet-300">
            Through real-world scenes
          </span>
        </h2>

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
