import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { projects } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectDialogComponent, ButtonComponent, RouterLink],
  template: `
    <div class="min-h-screen py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <a routerLink="/" class="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Home
          </a>
        </div>
        
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects and experiences throughout my career as a Software Engineer.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
          @for (project of projects; track project.id) {
            <div
              class="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-card transition-all duration-500 hover:shadow-xl cursor-pointer"
              (click)="openDialog(project)"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {{ project.company }}
                  </h3>
                  <p class="text-sm text-muted-foreground mb-2">{{ project.period }}</p>
                  <p class="text-sm font-medium text-accent mb-4">{{ project.type }}</p>
                </div>
              </div>
              
              <p class="text-muted-foreground mb-6 leading-relaxed">
                {{ project.summary }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.technologies.slice(0, 4); track tech) {
                  <span class="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    {{ tech }}
                  </span>
                }
                @if (project.technologies.length > 4) {
                  <span class="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    +{{ project.technologies.length - 4 }} more
                  </span>
                }
              </div>
              
              <app-button
                variant="outline"
                size="sm"
                [className]="'w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors'"
              >
                View Details
              </app-button>
            </div>
          }
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
    </div>
  `,
  styles: []
})
export class ProjectsPageComponent implements OnInit {
  projects = projects;
  selectedProject: Project | null = null;
  dialogOpen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check if there's a project query parameter to open automatically
    this.route.queryParams.subscribe(params => {
      if (params['project']) {
        const projectId = params['project'];
        const project = this.projects.find(p => p.id === projectId);
        if (project) {
          // Small delay to ensure the page is rendered
          setTimeout(() => {
            this.openDialog(project);
          }, 100);
        }
      }
    });
  }

  openDialog(project: Project) {
    this.selectedProject = project;
    this.dialogOpen = true;
  }
}

