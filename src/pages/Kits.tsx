
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import KitCard from "@/components/KitCard";

const Kits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const kitCategories = {
    combat: "Combat & PVP",
    building: "Building & Construction", 
    utility: "Utility & Tools",
    special: "Special & Unique"
  };

  const kits = [
    // Combat & PVP Kits
    { title: "Standard/Classic Kit", command: "?kit classic", image: "kits/classic.png", category: "combat", featured: true },
    { title: "CPVP 1 Kit", command: "?kit cpvp1", image: "kits/cpvp1.png", category: "combat" },
    { title: "CPVP 2 Kit", command: "?kit cpvp2", image: "kits/cpvp2.png", category: "combat" },
    { title: "Bow and Shield PVP Kit", command: "?kit bow", image: "kits/bow.png", category: "combat" },
    { title: "Gear/Armor Kit", command: "?kit gear", image: "kits/gear.png", category: "combat" },
    
    // Building & Construction Kits
    { title: "Glass Build Kit", command: "?kit glass", image: "kits/glass.png", category: "building", featured: true },
    { title: "Deepslate Build Kit", command: "?kit deepslate", image: "kits/deepslate.png", category: "building" },
    { title: "Wool Build Kit", command: "?kit wool", image: "kits/wool.png", category: "building" },
    { title: "Concrete Build Kit", command: "?kit concrete", image: "kits/concrete.png", category: "building" },
    { title: "Concrete Powder Build Kit", command: "?kit powder", image: "kits/powder.png", category: "building" },
    { title: "Ancient City Build Kit", command: "?kit ancient", image: "kits/ancient.png", category: "building" },
    { title: "Wood Kit", command: "?kit wood", image: "kits/wood.png", category: "building" },
    { title: "Oak House Build Kit", command: "?kit oakhouse", image: "kits/oakhouse.png", category: "building" },
    { title: "Build V1 Kit", command: "?kit build1", image: "kits/buildv1.png", category: "building" },
    { title: "Fortress Build Kit", command: "?kit fortress", image: "kits/fortress.png", category: "building" },
    
    // Utility & Tools Kits
    { title: "Dupe Kit", command: "?kit dupe", image: "kits/dupe.png", category: "utility", featured: true },
    { title: "Travel Kit", command: "?kit travel", image: "kits/travel.png", category: "utility" },
    { title: "Shulker Box Kit", command: "?kit shulker", image: "kits/shulker.png", category: "utility" },
    { title: "Highway Kit", command: "?kit highway", image: "kits/highway.png", category: "utility" },
    { title: "Tree Farm Kit", command: "?kit tree", image: "kits/tree.png", category: "utility" },
    { title: "Lighting Kit", command: "?kit light", image: "kits/light.png", category: "utility" },
    { title: "Beacon Kit", command: "?kit beacon", image: "kits/beacon.png", category: "utility" },
    { title: "Enchanting Kit", command: "?kit enchantment", image: "kits/enchantment.png", category: "utility" },
    
    // Special & Unique Kits
    { title: "Bedtrap Kit", command: "?kit bedtrap", image: "kits/bedtrap.png", category: "special" },
    { title: "Grief Kit", command: "?kit grief", image: "kits/grief.png", category: "special" },
    { title: "Lavacasting Kit", command: "?kit lavacast", image: "kits/lavacast.png", category: "special" },
    { title: "Redstone Kit (Thanks to Manue_l)", command: "?kit redstone", image: "kits/redstone.png", category: "special" },
    { title: "Ores/Shiny Kit", command: "?kit shiny", image: "kits/shiny.png", category: "special" },
    { title: "Armor Trims Kit (Thanks to Al_Kapwn)", command: "?kit trims", image: "kits/trims.png", category: "special" },
  ];

  const filteredKits = kits.filter(kit => {
    const matchesSearch = kit.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         kit.command.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || kit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredKits = kits.filter(kit => kit.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <header className="text-center mb-8 animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary animate-gold-pulse">
              BlasterBot_ Kit Collection
            </h1>
            <div className="w-32 h-1 bg-luxury-gradient mx-auto mb-6 rounded-full shadow-gold" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our complete arsenal of kits! Each kit has been carefully crafted to give you the perfect tools for your adventures on 0b0t.
            </p>

            {/* Search and Filter Controls */}
            <div className="max-w-2xl mx-auto space-y-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search kits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-card border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none shadow-gold"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant={selectedCategory === "all" ? "elegant" : "luxury"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                  className="animate-scale-in"
                >
                  All Kits
                </Button>
                {Object.entries(kitCategories).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "elegant" : "luxury"}
                    size="sm"
                    onClick={() => setSelectedCategory(key)}
                    className="animate-scale-in"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </header>
        </div>

        {/* Featured Kits Section */}
        {selectedCategory === "all" && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">
              ⭐ Featured Kits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredKits.map((kit) => (
                <div key={kit.command} className="transform hover:scale-105 transition-transform duration-300">
                  <KitCard
                    title={kit.title}
                    command={kit.command}
                    imageSrc={kit.image}
                    featured={true}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-luxury-gradient opacity-50 rounded-full" />
          </div>
        )}

        {/* All Kits Section */}
        <div className="max-w-6xl mx-auto">
          {selectedCategory !== "all" && (
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              {kitCategories[selectedCategory as keyof typeof kitCategories]}
            </h2>
          )}
          
          {filteredKits.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No kits found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredKits.map((kit, index) => (
                <div
                  key={kit.command}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <KitCard
                    title={kit.title}
                    command={kit.command}
                    imageSrc={kit.image}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-warm-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-dark-gold/10 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/6 left-1/6 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse delay-2000" />
      </div>
    </div>
  );
};

export default Kits;
