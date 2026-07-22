import { BrainCircuit } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 text-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 pt-24 md:grid-cols-5">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
        <a
            href="#hero-section"
            className="flex items-center gap-4 font-bold text-slate-50"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-500/40">
                <BrainCircuit className="h-4 w-4" />
            </span>

            <span className="text-sm">
                Agentic AI
            </span>
        </a>

          <p className="text-xs text-slate-500">
            Explore the future of development with Agentic AI.
          </p>

          <ul className="flex items-center gap-2">
            <li>
              <a
                href="https://www.instagram.com/holbertonfrance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@holbertonfrance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"              >
                <i className="bi bi-tiktok" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/HolbertonFRA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"              >
                <i className="bi bi-twitter-x" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@HolbertonFrance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"              >
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-sm font-bold">
            Navigation
          </h2>

          <ul className="flex flex-col items-start gap-2 text-xs text-slate-500">
            <li>
              <a className="hover:text-slate-50" href="#hero-section">
                Hero section
              </a>
            </li>
            <li>
              <a className="hover:text-slate-50" href="#about-section">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-slate-50" href="#features-section">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-slate-50" href="#insights-section">
                Insights
              </a>
            </li>
            <li>
              <a className="hover:text-slate-50" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Holberton School links">
          <h2 className="mb-4 text-sm font-bold">
            Holberton School
          </h2>

          <ul className="flex flex-col items-start gap-2 text-xs text-slate-500">
            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/methodologie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Methodology
              </a>
            </li>

            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/a-propos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Story
              </a>
            </li>

            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Curriculum links">
          <h2 className="mb-4 text-sm font-bold">
            Curriculum
          </h2>

          <ul className="flex flex-col items-start gap-2 text-xs text-slate-500">
            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bachelor
              </a>
            </li>

            <li>
              <a
                className="hover:text-slate-50"
                href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering#programme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Program
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-slate-900 pb-24 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
        <p>
          © {currentYear}{" "}
          <a
            className="hover:text-slate-50"
            href="https://github.com/MathieuMorel62"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mathieu Morel
          </a>
        </p>

        <p>
          Built for the Holberton School Front-end Frameworks curriculum.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
