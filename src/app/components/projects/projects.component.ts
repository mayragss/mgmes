import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';
import { RouterLink } from '@angular/router';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { Project } from '../../models/project.model';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent, RouterLink, ProjectDialogComponent],
  template: `
    <section id="projects" class="py-32 px-6 bg-muted/30">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl md:text-6xl font-bold mb-20 text-center">
          Last Projects
        </h2>
        
        <div class="space-y-12">
          @for (project of selectedProjects; track project.id; let i = $index) {
            <div
              class="group p-8 md:p-12 rounded-3xl border border-border hover:border-accent/50 bg-card transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
              [style.animation-delay]="i * 150 + 'ms'"
              (click)="openDialog(project)"
            >
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div class="flex-1">
                  <h3 class="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {{ project.company }}
                  </h3>
                  
                  <p class="text-sm text-muted-foreground mb-2">{{ project.period }}</p>
                  <p class="text-sm font-medium text-accent mb-4">{{ project.type }}</p>
                  
                  <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {{ project.summary }}
                  </p>
                  
                  <div class="flex flex-wrap gap-3 mb-6">
                    @for (tech of project.technologies.slice(0, 5); track tech) {
                      <span
                        class="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                      >
                        {{ tech }}
                      </span>
                    }
                    @if (project.technologies.length > 5) {
                      <span class="px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                        +{{ project.technologies.length - 5 }} more
                      </span>
                    }
                  </div>
                </div>
                
                <app-button
                  variant="ghost"
                  size="icon"
                  [className]="'rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground group-hover:scale-110 transition-all duration-300'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </app-button>
              </div>
            </div>
          }
        </div>
        
        <div class="mt-16 text-center">
          <p class="text-muted-foreground text-lg mb-6">
            Want to see more? Check out my complete portfolio
          </p>
          <a routerLink="/projects">
            <app-button
              variant="outline"
              size="lg"
              [className]="'px-8 py-6 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300'"
            >
              View All Projects
            </app-button>
          </a>
        </div>
      </div>

      <!-- Dialog -->
      @if (selectedProject) {
        <app-project-dialog
          [project]="selectedProject"
          [open]="dialogOpen"
          (openChange)="dialogOpen = $event"
        ></app-project-dialog>
      }
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  // Get only the 3 selected projects: Sporting CP, Banco XP, and TechTeam
  selectedProjects: Project[] = projects.filter(p => 
    p.id === 'sporting-cp' || p.id === 'banco-xp' || p.id === 'techteam'
  );
  
  selectedProject: Project | null = null;
  dialogOpen = false;

  openDialog(project: Project) {
    this.selectedProject = project;
    this.dialogOpen = true;
  }
}

