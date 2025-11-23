import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://mayragomes.dev';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    // Update SEO on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSEO();
    });
  }

  updateSEO(data?: SEOData) {
    const defaultData: SEOData = {
      title: 'Mayra Gomes - Programadora Full Stack | Desenvolvedora em Portugal, Angola e Brasil',
      description: 'Programadora Full Stack e Software Engineer especializada em desenvolvimento web. Desenvolvedora freelancer disponível para projetos em Portugal, Angola e Brasil. Atualmente trabalhando na Sporting Clube de Portugal.',
      keywords: 'programador portugal, desenvolvedor portugal, programadora portugal, desenvolvedora portugal, programador angola, desenvolvedor angola, programadora angola, desenvolvedora angola, programador brasil, desenvolvedor brasil, programadora brasil, desenvolvedora brasil, full stack developer, software engineer, desenvolvedor full stack, programador full stack, freelancer developer, desenvolvedor freelancer, programador freelancer, angular developer, react developer, nodejs developer, typescript developer, javascript developer',
      image: `${this.baseUrl}/assets/images/profile-photo.jpg`,
      url: `${this.baseUrl}${this.router.url}`
    };

    const seoData = { ...defaultData, ...data };

    // Update title
    if (seoData.title) {
      this.title.setTitle(seoData.title);
      this.meta.updateTag({ name: 'title', content: seoData.title });
    }

    // Update description
    if (seoData.description) {
      this.meta.updateTag({ name: 'description', content: seoData.description });
    }

    // Update keywords
    if (seoData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: seoData.title || defaultData.title! });
    this.meta.updateTag({ property: 'og:description', content: seoData.description || defaultData.description! });
    this.meta.updateTag({ property: 'og:image', content: seoData.image || defaultData.image! });
    this.meta.updateTag({ property: 'og:url', content: seoData.url || defaultData.url! });

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: seoData.title || defaultData.title! });
    this.meta.updateTag({ name: 'twitter:description', content: seoData.description || defaultData.description! });
    this.meta.updateTag({ name: 'twitter:image', content: seoData.image || defaultData.image! });
    this.meta.updateTag({ name: 'twitter:url', content: seoData.url || defaultData.url! });

    // Update canonical URL
    this.meta.updateTag({ rel: 'canonical', href: seoData.url || defaultData.url! });
  }
}
