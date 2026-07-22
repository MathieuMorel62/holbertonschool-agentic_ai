import { BrainCircuit, Menu } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero-section"
          className="flex items-center gap-2 font-bold text-slate-50"
        >
          <BrainCircuit className="h-6 w-6 text-violet-500" />
          <span>Agentic AI</span>
        </a>

        <nav className="flex items-center gap-4">
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

          <details className="relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex cursor-pointer list-none items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200"
            >
              <Menu className="h-5 w-5" />
            </summary>

            <ul className="absolute right-0 mt-3 flex w-48 flex-col gap-1 rounded-lg border border-slate-800 bg-slate-950 p-2 text-sm text-slate-300 shadow-xl">
              <li>
                <a
                  className="block rounded px-4 py-3 hover:bg-slate-900"
                  href="#about-section"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="block rounded px-4 py-3 hover:bg-slate-900"
                  href="#features-section"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  className="block rounded px-4 py-3 hover:bg-slate-900"
                  href="#insights-section"
                >
                  Insights
                </a>
              </li>

              <li>
                <a
                  className="block rounded px-4 py-3 hover:bg-slate-900"
                  href="#contact-section"
                >
                  Contact
                </a>
              </li>
            </ul>
          </details>

          <a
            href="https://www.holbertonschool.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-600 sm:px-4"
          >
            Enroll now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;