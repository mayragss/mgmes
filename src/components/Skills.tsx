import { Code2, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description: "End-to-end application development and architecture",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, accessible web applications",
  },
];

export const Skills = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-card transition-all duration-500 hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-lg">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
