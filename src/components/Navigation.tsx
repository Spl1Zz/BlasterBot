import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, MessageSquare, FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    {
      path: "/kits",
      label: "Kits",
      icon: Package,
    },
    {
      path: "/discord",
      label: "Discord", 
      icon: MessageSquare,
      external: "https://discord.gg/yourdiscordlink"
    },
    {
      path: "/tos",
      label: "TOS",
      icon: FileText,
    }
  ];

  return (
    <nav className="flex justify-center gap-4 mt-8 flex-wrap">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        if (item.external) {
          return (
            <a
              key={item.path}
              href={item.external}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="gaming" 
                size="xl"
                className="group animate-slide-in"
              >
                <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                {item.label}
              </Button>
            </a>
          );
        }

        return (
          <Link key={item.path} to={item.path} className="inline-block">
            <Button 
              variant={isActive ? "cyber" : "gaming"} 
              size="xl"
              className="group animate-slide-in"
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;