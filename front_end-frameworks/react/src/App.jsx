import { Bot } from "lucide-react";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />

      <main
        id="hero-section"
        className="min-h-screen pt-16 flex flex-col justify-center items-center gap-6 bg-slate-950 text-slate-50"
      >
        <Bot className="w-16 h-16 text-violet-500" />

        <h1 className="text-5xl font-bold">
          Agentic AI
        </h1>

        <h2 className="text-xl text-slate-400">
          React application successfully configured
        </h2>
      </main>
    </>
  );
}

export default App;
