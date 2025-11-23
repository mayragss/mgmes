import { Component } from '@angular/core';

interface Skill {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <section class="py-32 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl md:text-6xl font-bold mb-20 text-center">
          Skills & Expertise
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          @for (skill of skills; track skill.title; let i = $index) {
            <div
              class="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-card transition-all duration-500 hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                @if (skill.icon === 'code-2') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-accent"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                } @else if (skill.icon === 'database') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-accent"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                } @else if (skill.icon === 'globe') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-accent"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                } @else if (skill.icon === 'smartphone') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-accent"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                }
              </div>
              
              <h3 class="text-2xl font-semibold mb-3">{{ skill.title }}</h3>
              <p class="text-muted-foreground text-lg">{{ skill.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      icon: 'code-2',
      title: 'Frontend Development',
      description: 'Angular, React, TypeScript, Vue.js, Tailwind CSS, PrimeNG, PrimeFlex',
    },
    {
      icon: 'database',
      title: 'Backend Development',
      description: '.NET/C#, Node.js, Python, SQL Server, Oracle, PostgreSQL, MongoDB',
    },
    {
      icon: 'globe',
      title: 'Cloud & DevOps',
      description: 'Azure, Google Cloud Platform, Jenkins, GitLab, CI/CD pipelines',
    },
    {
      icon: 'smartphone',
      title: 'Architecture & Integration',
      description: 'Microservices, message queues (RabbitMQ, Kafka), API development, system integration',
    },
  ];
}

