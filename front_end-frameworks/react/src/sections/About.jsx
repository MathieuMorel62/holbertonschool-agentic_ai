import steps from "../data/steps.js";

function About() {
  return (
    <section
      id="about-section"
      className="scroll-mt-16 border-b border-slate-900 bg-black px-6 py-24 text-slate-50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            ✦ What is Agentic AI? ✦
          </span>

          <h2 className="mt-8 text-4xl font-black leading-none tracking-tight md:text-5xl">
            AI that does more than answer
            <span className="block text-violet-300">
              It acts with purpose
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-left text-sm leading-6 text-slate-400 md:text-base">
            Agentic AI refers to artificial intelligence systems designed to
            pursue goals, make decisions, use tools, and adapt their actions
            across multiple steps. Instead of only responding to a single
            prompt, an AI agent can break down a task, plan a strategy, execute
            actions, evaluate results, and continue until the objective is
            reached.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-lg font-bold">
                Traditional AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Responds to direct instructions, generates content, answers
                questions, or analyzes information within a limited
                interaction.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-violet-300">
                Agentic AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Understands a goal, chooses actions, uses external tools,
                follows a plan, and adjusts its behavior based on feedback.
              </p>
            </div>
          </article>

          <div className="relative flex flex-col gap-6">
            <div className="absolute bottom-5 left-4 top-5 w-px bg-violet-500/30" />

            {steps.map((step) => (
              <article
                key={step.number}
                className="relative z-10 flex items-start gap-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white shadow-lg shadow-violet-500/40">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-bold text-slate-50">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
