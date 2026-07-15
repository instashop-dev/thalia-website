import { Link } from "react-router-dom";
import type { AppData } from "@/data/apps";
import { getAppLogo, getPlatformColor, getPlatformLabel } from "@/data/apps";
import BfsBadge from "@/components/BfsBadge";

const AppCard = ({ app }: { app: AppData; index?: number }) => {
  const logo = getAppLogo(app.slug);

  if (app.comingSoon) {
    return (
      <div className="card-elevated p-6 h-full relative opacity-60">
        <div className="absolute top-4 right-4 text-xs font-heading font-bold px-3 py-1 rounded-full bg-muted text-muted-foreground">
          Coming Soon
        </div>
        {logo && (
          <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 overflow-hidden" style={{ backgroundColor: `${app.color}18` }}>
            <img src={logo} alt={`${app.name} logo`} className="w-full h-full object-contain p-1" width={48} height={48} />
          </div>
        )}
        <h3 className="font-heading font-bold text-lg mb-1 text-foreground">{app.name}</h3>
        <p className="text-sm font-body text-muted-foreground">{app.tagline}</p>
      </div>
    );
  }

  return (
    <Link to={`/apps/${app.slug}`} className="block card-elevated p-6 h-full group relative">
      {app.bfsBadge && (
        <BfsBadge variant="light" className="absolute top-4 right-4" />
      )}
      {logo && (
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 overflow-hidden" style={{ backgroundColor: `${app.color}18` }}>
          <img src={logo} alt={`${app.name} logo`} className="w-full h-full object-contain p-1" width={48} height={48} />
        </div>
      )}
      <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">
        {app.name}
      </h3>
      <p className="text-sm font-body leading-relaxed mb-3 text-muted-foreground">{app.tagline}</p>
      <div className="flex items-center justify-between">
        <span
          className="inline-block text-xs font-bold font-body px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${getPlatformColor(app.platform)}14`, color: getPlatformColor(app.platform) }}
        >
          {getPlatformLabel(app.platform)}
        </span>
        <span className="text-sm font-medium transition-colors text-primary">View App →</span>
      </div>
    </Link>
  );
};

export default AppCard;
