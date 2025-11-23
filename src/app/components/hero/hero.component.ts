import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  template: `
    <section class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 class="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Mayra Gomes
        </h1>
        
        <p class="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
          Software Engineer
        </p>
        
        <p class="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Full-stack developer crafting elegant solutions with modern technologies.
          Currently working at <a routerLink="/projects" [queryParams]="{project: 'sporting-cp'}" class="text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4">Sporting Clube de Portugal</a>.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <app-button 
            size="lg" 
            [className]="'group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'"
            (click)="scrollToProjects()"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </app-button>
          
          <app-button 
            size="lg"
            variant="outline"
            [className]="'px-8 py-6 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300'"
            (click)="scrollToContact()"
          >
            Get in Touch
          </app-button>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div class="w-1.5 h-3 bg-accent rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}

