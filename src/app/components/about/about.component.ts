import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-32 px-6 bg-muted/30">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-6xl font-bold mb-12 text-center animate-in fade-in slide-in-from-left-4 duration-1000">
          About Me
        </h2>
        
        <div class="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
          <p class="animate-in fade-in slide-in-from-left-4 duration-1000">
            With a strong background in backend and frontend development, I specialize in delivering secure and high-performance systems that support large-scale operations. Over the past eight years, I've collaborated with banks, brokerages, and cross-functional teams to accelerate delivery and elevate software quality. Today, my focus is on crafting meaningful digital experiences while continuously learning and pushing the boundaries of what technology can do. Currently, I work as a Software Engineer at <a routerLink="/projects" [queryParams]="{project: 'sporting-cp'}" class="text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4">Sporting Clube de Portugal</a>, where I build and maintain systems that serve thousands of users daily.
          </p>
          <p class="animate-in fade-in slide-in-from-left-4 duration-1000">
            When I'm off the keyboard, you'll find me behind a camera, discovering new music, or developing entrepreneurial projects.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
}


