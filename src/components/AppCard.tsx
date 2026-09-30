import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { AppData } from "@/data/apps";
import { getAppLogo, getPlatformColor, getPlatformLabel } from "@/data/apps";
import BfsBadge from "@/components/BfsBadge";

const AppCard = ({ app }: { app: AppData; index?: number }) => {
  const logo = getAppLogo(app.slug);

  if (app.comingSoon) {
    return (
      <div className="card-elevated p-6 h-full relative opacity-60">
        <div className="absolute top-4 right-4 text-xs font-heading font-bold px-3 py-1 rounded-full bg-muted text-muted-foreground">Coming Soon</div>
        {logo && <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 overflow-hidden" style={{ backgroundColor: `${app.color}18` }}><img src={logo} alt={`${app.name} logo`} className="w-full h-full object-contain p-1" width={48} height={48} /></div>}
        <h3 className="font-heading font-bold text-lg mb-1 text-foreground">{app.name}</h3>
        <p className="text-sm font-body text-muted-foreground">{app.tagline}</p>
      </div>
    );
  }

  return (
    <div className="card-elevated p-6 h-full group relative flex flex-col">
      {app.bfsBadge && <BfsBadge variant="light" className="absolute top-4 right-4" />}
      {logo && <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 overflow-hidden" style={{ backgroundColor: `${app.color}18` }}><img src={logo} alt={`${app.name} logo`} className="w-full h-full object-contain p-1" width={48} height={48} /></div>}
      <Link to={`/apps/${app.slug}`} className="block">
        <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">{app.name}</h3>
        <p className="text-sm font-body leading-relaxed mb-3 text-muted-foreground">{app.tagline}</p>
      </Link>
      <div className="flex items-center justify-between gap-3 mt-auto pt-3">
        <span className="inline-block text-xs font-bold font-body px-2.5 py-1 rounded-full" style={{ backgroundColor: `${getPlatformColor(app.platform)}14`, color: getPlatformColor(app.platform) }}>{getPlatformLabel(app.platform)}</span>
        <Link to={`/apps/${app.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">View App <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
      {app.externalUrl !== "#" && <a href={app.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-shopify mt-4 w-full py-2.5 text-sm" aria-label={`Install ${app.name}`}><ExternalLink className="h-4 w-4" />Install App</a>}
    </div>
  );
};

export default AppCard;
