import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">T</span>
              </div>
              <span className="font-heading font-bold text-lg">Thalia</span>
            </div>
            <p className="text-sm opacity-70">
              Building technology products that help businesses solve their most pressing problems.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/careers" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Careers</Link>
              <Link to="/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Products</h4>
            <div className="flex flex-col gap-2">
              <Link to="/spreadr" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Spreadr</Link>
              <Link to="/connectr" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Connectr</Link>
              <Link to="/bolt" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Bolt</Link>
              <Link to="/apps" className="text-sm opacity-70 hover:opacity-100 transition-opacity">View All →</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link to="/features" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Features</Link>
              <Link to="/case-studies" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Case Studies</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-sm opacity-50 text-center">
          © {new Date().getFullYear()} Thalia Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
