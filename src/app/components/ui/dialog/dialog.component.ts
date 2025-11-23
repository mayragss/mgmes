import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (open) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0"
          (click)="onClose()"
        ></div>
        
        <!-- Dialog -->
        <div class="relative z-50 w-full max-w-3xl max-h-[90vh] bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-border">
            <h2 class="text-2xl font-bold">{{ title }}</h2>
            <button
              (click)="onClose()"
              class="rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring p-1"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          
          <!-- Content -->
          <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
  styles: []
})
export class DialogComponent {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Output() openChange = new EventEmitter<boolean>();

  onClose() {
    this.open = false;
    this.openChange.emit(false);
  }
}

