import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class IndexComponent {
}


