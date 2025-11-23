import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
          <p className="text-sm font-medium text-muted-foreground">
            Available for freelance projects
          </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Mayra Gomes
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
          Software Engineer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Full-stack developer crafting elegant solutions with modern technologies.
          Currently working at Sporting Clube de Portugal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
