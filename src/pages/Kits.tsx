import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import KitCard from "@/components/KitCard";

const Kits = () => {
  const kits = [
    { title: "Standard/Classic Kit", command: "?kit classic", image: "kits/classic.png" },
    { title: "Dupe Kit", command: "?kit dupe", image: "kits/dupe.png" },
    { title: "Bedtrap Kit", command: "?kit bedtrap", image: "kits/bedtrap.png" },
    { title: "CPVP 1 Kit", command: "?kit cpvp1", image: "kits/cpvp1.png" },
    { title: "Glass Build Kit", command: "?kit glass", image: "kits/glass.png" },
    { title: "Highway Kit", command: "?kit highway", image: "kits/highway.png" },
    { title: "Deepslate Build Kit", command: "?kit deepslate", image: "kits/deepslate.png" },
    { title: "Shulker Box Kit", command: "?kit shulker", image: "kits/shulker.png" },
    { title: "Travel Kit", command: "?kit travel", image: "kits/travel.png" },
    { title: "Wool Build Kit", command: "?kit wool", image: "kits/wool.png" },
    { title: "Concrete Build Kit", command: "?kit concrete", image: "kits/concrete.png" },
    { title: "Gear/Armor Kit", command: "?kit gear", image: "kits/gear.png" },
    { title: "Concrete Powder Build Kit", command: "?kit powder", image: "kits/powder.png" },
    { title: "Ancient City Build Kit", command: "?kit ancient", image: "kits/ancient.png" },
    { title: "Bow and Shield PVP Kit", command: "?kit bow", image: "kits/bow.png" },
    { title: "Wood Kit", command: "?kit wood", image: "kits/wood.png" },
    { title: "CPVP 2 Kit", command: "?kit cpvp2", image: "kits/cpvp2.png" },
    { title: "Grief Kit", command: "?kit grief", image: "kits/grief.png" },
    { title: "Oak House Build Kit", command: "?kit oakhouse", image: "kits/oakhouse.png" },
    { title: "Tree Farm Kit", command: "?kit tree", image: "kits/tree.png" },
    { title: "Build V1 Kit", command: "?kit build1", image: "kits/buildv1.png" },
    { title: "Lighting Kit", command: "?kit light", image: "kits/light.png" },
    { title: "Fortress Build Kit", command: "?kit fortress", image: "kits/fortress.png" },
    { title: "Lavacasting Kit", command: "?kit lavacast", image: "kits/lavacast.png" },
    { title: "Beacon Kit", command: "?kit beacon", image: "kits/beacon.png" },
    { title: "Redstone Kit (Thanks to Manue_l)", command: "?kit redstone", image: "kits/redstone.png" },
    { title: "Ores/Shiny Kit", command: "?kit shiny", image: "kits/shiny.png" },
    { title: "Enchanting Kit", command: "?kit enchantment", image: "kits/enchantment.png" },
    { title: "Armor Trims Kit (Thanks to Al_Kapwn)", command: "?kit trims", image: "kits/trims.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
          
          <header className="text-center mb-8 animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              BlasterBot_ Kits
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-4 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every kit that BlasterBot_ delivers is listed here. See a preview image and the command 
              to get it using a click on the kit's dropdown menu
            </p>
          </header>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {kits.map((kit, index) => (
            <KitCard
              key={kit.command}
              title={kit.title}
              command={kit.command}
              imageSrc={kit.image}
            />
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default Kits;