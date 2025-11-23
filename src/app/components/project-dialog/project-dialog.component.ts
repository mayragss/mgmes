import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { DialogComponent } from '../ui/dialog/dialog.component';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  template: `
    @if (project) {
      <app-dialog
        [open]="open"
        [title]="project.company"
        (openChange)="onOpenChange($event)"
      >
        <div class="space-y-6">
          <!-- Period and Type -->
          <div class="flex flex-col sm:flex-row gap-4 pb-4 border-b border-border">
            <div>
              <p class="text-sm text-muted-foreground mb-1">Period</p>
              <p class="font-medium">{{ project.period }}</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground mb-1">Type</p>
              <p class="font-medium">{{ project.type }}</p>
            </div>
          </div>

          <!-- Description -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Description</h3>
            <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
              {{ project.description }}
            </p>
          </div>

          <!-- Highlights -->
          @if (project.highlights && project.highlights.length > 0) {
            <div>
              <h3 class="text-lg font-semibold mb-3">Key Highlights</h3>
              <ul class="space-y-2">
                @for (highlight of project.highlights; track highlight) {
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent mt-0.5 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span class="text-muted-foreground">{{ highlight }}</span>
                  </li>
                }
              </ul>
            </div>
          }

          <!-- Technologies -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              @for (tech of project.technologies; track tech) {
                <span class="px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                  {{ tech }}
                </span>
              }
            </div>
          </div>
        </div>
      </app-dialog>
    }
  `,
  styles: []
})
export class ProjectDialogComponent {
  @Input() project: Project | null = null;
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  onOpenChange(open: boolean) {
    this.openChange.emit(open);
  }
}

