import Brand from "../ui/Brand.jsx";
import SocialLink from "../ui/SocialLink.jsx";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 text-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 pt-24 md:grid-cols-5">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
          <Brand variant="footer" />

          <p className="text-xs text-slate-500">
            Explore the future of development with Agentic AI.
          </p>

          <ul className="flex items-center gap-2">
            <li>
              <SocialLink
                href="https://www.instagram.com/holbertonfrance/"
                label="Instagram"
                iconClassName="bi bi-instagram"
              />
            </li>

            <li>
              <SocialLink
                href="https://www.tiktok.com/@holbertonfrance"
                label="TikTok"
                iconClassName="bi bi-tiktok"
              />
            </li>

            <li>
              <SocialLink
                href="https://x.com/HolbertonFRA"
                label="X"
                iconClassName="bi bi-twitter-x"
              />
            </li>

            <li>
              <SocialLink
                href="https://www.youtube.com/@HolbertonFrance"
                label="YouTube"
                iconClassName="bi bi-youtube"
              />
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
