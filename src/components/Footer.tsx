import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-extrabold text-lg text-primary-foreground">T</span>
              </div>
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
              <Link to="/apps/pro" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Pro</Link>
              <Link to="/apps" className="text-sm text-primary hover:opacity-80 transition-opacity">All Apps →</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm opacity-65 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/careers" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Careers</Link>
              <Link to="/blog" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/contact" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Support</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/case-studies" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Case Studies</Link>
              <Link to="/features" className="text-sm opacity-65 hover:opacity-100 transition-opacity">Features</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-40">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm opacity-65">Privacy Policy</span>
              <span className="text-sm opacity-65">Terms of Service</span>
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
