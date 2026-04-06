import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/thalia-logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/apps" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-background transition-shadow duration-300"
      style={{
        height: 68,
        boxShadow: scrolled ? "0 1px 0 hsl(var(--border)), 0 2px 20px rgba(0,0,0,0.06)" : "0 1px 0 hsl(var(--border))",
      }}
    >
      <div className="section-container flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Thalia Technologies logo" className="w-9 h-9 rounded-lg object-cover" width={36} height={36} />
          <span className="font-heading font-extrabold text-lg text-foreground">Thalia Technologies</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-[15px] font-medium font-body transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-secondary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/apps" className="btn-primary text-sm">View Our Apps →</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-foreground">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium font-body ${
                  location.pathname === link.path ? "text-primary" : "text-secondary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/apps" onClick={() => setIsOpen(false)} className="btn-primary text-sm mt-2 text-center">
              View Our Apps →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
