import { BrainCircuit } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero-section"
          className="flex items-center gap-2 font-bold text-slate-50"
        >
          <BrainCircuit className="h-6 w-6 text-violet-500" />
          <span>Agentic AI</span>
        </a>

        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <li>
              <a className="hover:text-white" href="#about-section">
                About
              </a>
            </li>

            <li>
              <a className="hover:text-white" href="#features-section">
                Features
              </a>
            </li>

            <li>
              <a className="hover:text-white" href="#insights-section">
                Insights
              </a>
            </li>

            <li>
              <a className="hover:text-white" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="https://www.holbertonschool.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-600"
          >
            Enroll now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
