
import { useState } from "react";
import { ChevronDown, Copy, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface KitCardProps {
  title: string;
  command: string;
  imageSrc?: string;
  featured?: boolean;
}

const KitCard = ({ title, command, imageSrc, featured = false }: KitCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: `Command "${command}" has been copied.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the command manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className={`bg-card border-2 transition-all duration-300 hover:border-primary/50 animate-scale-in relative overflow-hidden ${
      featured 
        ? "border-primary shadow-intense-gold" 
        : "border-primary/30 shadow-gold hover:shadow-intense-gold"
    }`}>
      {featured && (
        <div className="absolute top-2 right-2 bg-luxury-gradient text-primary-foreground px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-gold z-10">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}
      
      <CardContent className="p-0">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full justify-between p-4 h-auto rounded-b-none relative overflow-hidden before:absolute before:inset-0 before:bg-gold-shimmer before:opacity-0 hover:before:opacity-100 before:animate-shimmer ${
            featured 
              ? "bg-luxury-gradient text-primary-foreground font-bold hover:bg-none" 
              : "bg-luxury-gradient text-primary-foreground font-bold hover:bg-none"
          }`}
        >
          <span className="text-lg relative z-10 text-left">{title}</span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 relative z-10 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 text-center space-y-4 bg-gradient-to-b from-card to-card/50">
            {imageSrc && (
              <div className="relative group">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-intense-gold"
                />
                <div className="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            )}
            
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="bg-rich-black border-2 border-primary/40 rounded-lg p-3 shadow-gold">
                <code className="text-gold font-mono text-sm block">
                  {command}
                </code>
              </div>
              <Button
                onClick={handleCopy}
                variant="elegant"
                size="sm"
                className="relative group shadow-gold hover:shadow-intense-gold"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitCard;
