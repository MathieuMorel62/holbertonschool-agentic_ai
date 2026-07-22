import Brand from "../ui/Brand.jsx";
import Button from "../ui/Button.jsx";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Brand />

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

          <Button
            href="https://www.holbertonschool.fr/"
            size="small"
          >
            Enroll now
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
