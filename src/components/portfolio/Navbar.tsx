import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },

];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      
<nav className="relative w-full h-14 px-4 sm:px-6 flex items-center justify-between">
  {/* Brand — top left */}
  <a
    href="#home"
    className="text-[20px] font-bold tracking-[-0.8px] text-[#1c1c1c] shrink-0"
  >
    Dinah Khan
  </a>

  {/* Navigation — centered */}
  <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 text-sm text-muted-foreground">
    {links.map((l) => (
      <li key={l.href}>
        <a
          href={l.href}
          className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
        >
          {l.label}
        </a>
      </li>
    ))}
  </ul>

  {/* Let's Connect — top right */}
  <a
    href="#contact"
    className="shrink-0 rounded-full bg-[#1c1c1c] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0645e5] hover:shadow-[0_4px_16px_rgba(6,69,229,0.22)]"
  >
    Let's Connect
  </a>

  {/* Mobile menu button */}
  <button
    className="md:hidden text-foreground"
    onClick={() => setOpen((v) => !v)}
    aria-label="Toggle menu"
  >
    {open ? <X size={22} /> : <Menu size={22} />}
  </button>
</nav>


      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}