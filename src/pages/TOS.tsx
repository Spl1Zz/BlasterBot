import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TOS = () => {
  const rules = [
    "Do not spam any command",
    "Do not abuse the Discord → Minecraft chatbridge",
    "Do not attempt to bypass cooldowns or rate limits",
    "Do not attempt to /tpa to the bot",
    "Do not repeatedly spam the kit command to fill a stash"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>

        <div className="space-y-8 animate-slide-in">
          <header className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-primary">
                Terms of Service
              </h1>
            </div>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-4 rounded-full" />
            <p className="text-lg text-muted-foreground">
              BlasterBot_ Service Agreement
            </p>
          </header>

          <Card className="bg-card border-2 border-primary/30 shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <AlertTriangle className="w-6 h-6 mr-3" />
                Service Rules & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-lg font-semibold mb-4 text-foreground">
                  By using BlasterBot_, you are agreeing to comply with the following:
                </p>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-primary/30 shadow-glow">
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All bans are final unless otherwise appealed through official channels.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                BlasterBot_ is the property of <span className="text-primary font-semibold">TOBIBLASTER0912</span>. 
                Managed by <span className="text-primary font-semibold">TOBIBLASTER0912</span> and{" "}
                <span className="text-primary font-semibold">Autiboy08</span>.
              </p>
              
              <div className="border-l-4 border-primary/50 pl-4 bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground leading-relaxed">
                  Violating the above terms may result in a temporary or permanent ban from the BlasterBot_ service.
                  We reserve the right to ban anyone from the service for any reason. Bans are final unless an appeal 
                  is submitted in the BlasterBot_ Discord.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default TOS;