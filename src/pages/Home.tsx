import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <header className="mb-8 animate-slide-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary animate-glow-pulse">
            BlasterBot_
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 leading-relaxed">
            0b0t kitbot made by TOBIBLASTER0912.
          </p>
          <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground">
            Click the buttons below to get started
          </p>
        </header>
        
        <Navigation />
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-cyber/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
    </div>
  );
};

export default Home;