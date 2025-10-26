import { BlogPost, BlogCategory } from '../models/blog-post.model';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'development',
    name: 'Desenvolvimento',
    slug: 'desenvolvimento',
    description: 'Artigos sobre programação, arquitetura e boas práticas',
    color: 'blue',
    postCount: 8
  },
  {
    id: 'career',
    name: 'Carreira',
    slug: 'carreira',
    description: 'Dicas de carreira, entrevistas e crescimento profissional',
    color: 'green',
    postCount: 5
  },
  {
    id: 'technology',
    name: 'Tecnologia',
    slug: 'tecnologia',
    description: 'Tendências tecnológicas e inovações',
    color: 'purple',
    postCount: 6
  },
  {
    id: 'tutorials',
    name: 'Tutoriais',
    slug: 'tutoriais',
    description: 'Guias práticos e tutoriais passo a passo',
    color: 'orange',
    postCount: 4
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Como Escalar Aplicações .NET Core para Milhões de Usuários',
    excerpt: 'Estratégias práticas para otimizar performance e escalabilidade em aplicações .NET Core, baseadas em experiências reais em instituições financeiras.',
    content: 'Neste artigo, compartilho as lições aprendidas ao escalar aplicações .NET Core para milhões de usuários durante minha experiência na XP Bank...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-12-15'),
    readTime: 12,
    category: 'development',
    tags: ['.NET Core', 'Performance', 'Escalabilidade', 'Microserviços', 'Azure'],
    featured: true,
    slug: 'escalar-aplicacoes-dotnet-core-milhoes-usuarios',
    views: 2847,
    likes: 156,
    comments: 23
  },
  {
    id: '2',
    title: 'Arquitetura de Microserviços: Quando e Como Implementar',
    excerpt: 'Um guia completo sobre quando migrar para microserviços, os prós e contras, e as melhores práticas para implementação bem-sucedida.',
    content: 'A arquitetura de microserviços tem se tornado cada vez mais popular, mas nem sempre é a solução ideal...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-12-10'),
    readTime: 15,
    category: 'development',
    tags: ['Microserviços', 'Arquitetura', 'Docker', 'Kubernetes', 'DevOps'],
    featured: true,
    slug: 'arquitetura-microservicos-quando-como-implementar',
    views: 1923,
    likes: 98,
    comments: 17
  },
  {
    id: '3',
    title: '8 Anos de Desenvolvimento: Lições que Gostaria de Ter Aprendido Antes',
    excerpt: 'Reflexões sobre 8 anos de carreira em desenvolvimento, as principais lições aprendidas e conselhos para desenvolvedores iniciantes.',
    content: 'Após 8 anos trabalhando como desenvolvedora full-stack, há muitas coisas que gostaria de ter sabido no início da carreira...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-12-05'),
    readTime: 8,
    category: 'career',
    tags: ['Carreira', 'Desenvolvimento', 'Lições', 'Conselhos', 'Crescimento'],
    featured: false,
    slug: '8-anos-desenvolvimento-licoes-gostaria-ter-aprendido-antes',
    views: 3456,
    likes: 234,
    comments: 45
  },
  {
    id: '4',
    title: 'Angular vs React vs Vue: Qual Escolher em 2025?',
    excerpt: 'Análise comparativa dos três principais frameworks frontend, considerando performance, ecossistema e tendências para 2025.',
    content: 'Com a evolução constante dos frameworks JavaScript, escolher entre Angular, React e Vue pode ser desafiador...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-11-28'),
    readTime: 10,
    category: 'technology',
    tags: ['Angular', 'React', 'Vue', 'Frontend', 'JavaScript', 'Comparação'],
    featured: true,
    slug: 'angular-vs-react-vs-vue-qual-escolher-2025',
    views: 4567,
    likes: 189,
    comments: 34
  },
  {
    id: '5',
    title: 'Implementando CI/CD com GitHub Actions e Azure DevOps',
    excerpt: 'Tutorial prático para configurar pipelines de integração e deploy contínuo usando as melhores práticas da indústria.',
    content: 'A automação de processos de build, teste e deploy é essencial para equipes de desenvolvimento modernas...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-11-20'),
    readTime: 14,
    category: 'tutorials',
    tags: ['CI/CD', 'GitHub Actions', 'Azure DevOps', 'DevOps', 'Automação'],
    featured: false,
    slug: 'implementando-cicd-github-actions-azure-devops',
    views: 1789,
    likes: 87,
    comments: 12
  },
  {
    id: '6',
    title: 'O Futuro do Desenvolvimento Web: Tendências para 2025',
    excerpt: 'Explorando as principais tendências tecnológicas que vão moldar o desenvolvimento web no próximo ano.',
    content: 'O desenvolvimento web está em constante evolução, e 2025 promete trazer mudanças significativas...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-11-15'),
    readTime: 7,
    category: 'technology',
    tags: ['Tendências', 'Web Development', '2025', 'Inovação', 'Tecnologia'],
    featured: false,
    slug: 'futuro-desenvolvimento-web-tendencias-2025',
    views: 2234,
    likes: 145,
    comments: 28
  },
  {
    id: '7',
    title: 'Como Conseguir Sua Primeira Vaga como Desenvolvedora',
    excerpt: 'Dicas práticas e estratégias para desenvolvedoras iniciantes que estão buscando sua primeira oportunidade no mercado.',
    content: 'Entrar no mercado de trabalho como desenvolvedora pode parecer intimidador, mas com as estratégias certas...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-11-10'),
    readTime: 9,
    category: 'career',
    tags: ['Primeira Vaga', 'Carreira', 'Desenvolvimento', 'Dicas', 'Mercado'],
    featured: false,
    slug: 'como-conseguir-primeira-vaga-desenvolvedora',
    views: 4123,
    likes: 267,
    comments: 56
  },
  {
    id: '8',
    title: 'Testes Automatizados: Do Zero ao Herói',
    excerpt: 'Guia completo para implementar testes automatizados em projetos .NET, incluindo unit tests, integration tests e e2e.',
    content: 'Testes automatizados são fundamentais para garantir a qualidade e confiabilidade do software...',
    author: 'Mayra Gomes',
    publishDate: new Date('2024-11-05'),
    readTime: 16,
    category: 'tutorials',
    tags: ['Testes', 'Automação', '.NET', 'Qualidade', 'XUnit', 'Selenium'],
    featured: true,
    slug: 'testes-automatizados-zero-heroi',
    views: 2890,
    likes: 134,
    comments: 19
  }
];





