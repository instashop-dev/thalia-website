import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/thalia-logo.jpg";

const navLinks = [
  { label: "Home",     path: "/" },
  { label: "Products", path: "/apps" },
  { label: "About",    path: "/about" },
  { label: "Careers",  path: "/careers" },
  { label: "Contact",  path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <nav
      className="sticky top-0 z-50 bg-background transition-all duration-300"
      style={{
        height: 68,
        boxShadow: scrolled
          ? "0 1px 0 hsl(var(--border)), 0 4px 24px rgba(0,0,0,0.06)"
          : "0 1px 0 hsl(var(--border))",
      }}
    >
      <div className="section-container flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src={logo}
            alt="Thalia Technologies logo"
            className="w-9 h-9 rounded-lg object-cover"
            width={36}
            height={36}
          />
          <span className="font-heading font-extrabold text-lg text-foreground tracking-tight">
            Thalia Technologies
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 rounded-md text-[14px] font-medium font-body transition-colors duration-150 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#00c0ff" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/apps" className="btn-primary text-sm">
            View Our Apps →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-foreground transition-colors hover:bg-muted"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-sm">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2.5 rounded-md text-sm font-medium font-body transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/apps" className="btn-primary text-sm mt-2 text-center">
              View Our Apps →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
