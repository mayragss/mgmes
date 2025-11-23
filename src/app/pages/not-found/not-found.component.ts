import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <p class="text-xl text-muted-foreground">Page not found</p>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {
}


