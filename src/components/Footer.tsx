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
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Thalia Technologies logo" className="w-9 h-9 rounded-none object-cover" width={36} height={36} />
              <span className="font-heading font-extrabold text-lg">Thalia Technologies</span>
            </div>
            <p className="text-sm leading-relaxed opacity-60">
              Software that Makes a Difference.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Products</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/apps/spreadr" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Spreadr</Link>
              <Link to="/apps/watchlyst" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Watchlyst</Link>
              <Link to="/apps/bolt" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Bolt</Link>
              <Link to="/apps/probulkpriceeditor" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Pro Bulk Price Editor</Link>
              <Link to="/apps" className="text-sm text-primary hover:opacity-80 transition-opacity">All Apps →</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm opacity-65 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/careers" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Careers</Link>
              <Link to="/contact" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000038536-privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-65 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </a>
              <a
                href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000047456-terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-65 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Follow us on:</h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={`ring-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-primary-foreground opacity-80 hover:opacity-100 hover:border-white/55 hover:bg-white/10 transition-all"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm opacity-40">© 2025 Thalia Technologies Private Limited. All rights reserved.</p>
          <p className="text-sm opacity-40">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
