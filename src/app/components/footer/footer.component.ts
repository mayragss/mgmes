import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-12 px-6 border-t border-border">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-center items-center">
          <div class="text-muted-foreground">
            © {{ currentYear }} Mayra Gomes. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}


