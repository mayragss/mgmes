import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Sporting CP Platform",
    description: "Full-stack development for one of Portugal's largest sports clubs, handling thousands of daily users with robust, scalable solutions.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "E-Commerce Solution",
    description: "Modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
  },
  {
    title: "Photography Portfolio",
    description: "Custom-built portfolio website showcasing creative work with smooth animations and optimized image loading.",
    tags: ["React", "Tailwind", "Cloudinary"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          Selected Projects
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-8 md:p-12 rounded-3xl border border-border hover:border-accent/50 bg-card transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground group-hover:scale-110 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Want to see more? Check out my complete portfolio
          </p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
