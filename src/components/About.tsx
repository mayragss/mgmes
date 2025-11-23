export const About = () => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 animate-in fade-in slide-in-from-left-4 duration-1000">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-100">
            I'm a passionate software engineer with a love for creating elegant, efficient solutions 
            to complex problems. My journey in tech is driven by curiosity and a commitment to 
            continuous learning.
          </p>
          
          <p className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
            Currently, I work as a Full-Stack Developer at <span className="text-foreground font-medium">Sporting Clube de Portugal</span>, 
            where I build and maintain systems that serve thousands of users daily.
          </p>
          
          <p className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
            When I'm not coding, you'll find me exploring photography, enjoying music, 
            or diving into entrepreneurship ventures. I believe in the power of technology 
            to transform ideas into reality.
          </p>
        </div>
      </div>
    </section>
  );
};
