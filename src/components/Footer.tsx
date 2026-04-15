import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Store } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";
import logo from "@/assets/thalia-logo.jpg";

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61587990206911", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/thaliatechnologies/", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/thalia-technologies/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/ThaliaT11897", label: "X", Icon: XLogo },
  { href: "https://community.shopify.com/u/thalia_apps", label: "Shopify Community", Icon: Store },
  { href: "https://www.youtube.com/@thaliatechnologies4745", label: "YouTube", Icon: Youtube },
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-14 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Thalia Technologies logo"
                className="w-10 h-10 rounded-none object-cover"
                width={40}
                height={40}
              />
              <span className="font-heading font-extrabold text-xl leading-tight">Thalia<br />Technologies</span>
            </div>
            <p className="text-sm leading-relaxed opacity-55">
              Software that Makes a Difference.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-5 opacity-60">Products</h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/apps/spreadr"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Spreadr
              </Link>
              <Link
                to="/apps/watchlyst"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Watchlyst
              </Link>
              <Link
                to="/apps/bolt"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Bolt
              </Link>
              <Link
                to="/apps/probulkpriceeditor"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Pro Bulk Price Editor
              </Link>
              <Link
                to="/apps"
                className="text-sm text-primary hover:opacity-80 transition-opacity duration-150"
              >
                All Apps →
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-5 opacity-60">Company</h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                About
              </Link>
              <Link
                to="/careers"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-5 opacity-60">Legal</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000038536-privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Privacy Policy
              </a>
              <a
                href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000047456-terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-150"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-5 opacity-60">Follow us on:</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={`social-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-primary-foreground opacity-75 hover:opacity-100 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(0,192,255,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Copyright Section */}
        <div className="mt-10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © {currentYear} Thalia Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            Made with <span className="text-red-400">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
