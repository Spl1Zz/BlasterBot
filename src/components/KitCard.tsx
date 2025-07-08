import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface KitCardProps {
  title: string;
  command: string;
  imageSrc?: string;
}

const KitCard = ({ title, command, imageSrc }: KitCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast({
        title: "In die Zwischenablage kopiert!",
        description: `Befehl "${command}" wurde kopiert.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Fehler beim Kopieren",
        description: "Bitte kopiere den Befehl manuell.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-card border-2 border-primary/30 shadow-glow hover:shadow-hover-glow transition-all duration-300 hover:border-primary/50 animate-scale-in">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between p-4 h-auto bg-gaming-gradient text-primary-foreground font-bold text-left hover:bg-none rounded-b-none"
        >
          <span className="text-lg">{title}</span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 text-center space-y-4">
            {imageSrc && (
              <div className="relative group">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            
            <div className="flex items-center justify-center gap-3">
              <code className="bg-dark-surface text-cyber px-4 py-2 rounded-lg font-mono text-sm border border-primary/30">
                {command}
              </code>
              <Button
                onClick={handleCopy}
                variant="cyber"
                size="sm"
                className="relative group"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span className="sr-only">Befehl kopieren</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitCard;