import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'xp-bank-settlement',
    title: 'Settlement Monitor - XP Bank',
    description: 'Sistema de monitoramento de liquidação financeira para operações de câmbio. Desenvolvido para garantir a transparência e eficiência nas operações de câmbio da XP Bank, permitindo acompanhamento em tempo real das liquidações e identificação proativa de possíveis problemas.',
    shortDescription: 'Financial settlement monitoring system for currency exchange operations. Built with Angular, .NET Core, and integrated with Kafka and Service Bus.',
    technologies: ['Angular', '.NET Core', 'Kafka', 'Service Bus', 'Azure', 'SQL Server', 'Datadog', 'Kibana'],
    category: 'Financial Technology',
    duration: '2020 - 2023',
    company: 'XP Bank',
    role: 'Software Engineer - SQUAD de Câmbio',
    achievements: [
      'Redução de 40% no tempo de identificação de problemas de liquidação',
      'Implementação de monitoramento em tempo real com alertas automáticos',
      'Integração com múltiplos sistemas de pagamento e câmbio',
      'Melhoria na transparência das operações para clientes'
    ],
    challenges: [
      'Integração com sistemas legados de câmbio',
      'Garantir alta disponibilidade (99.9% uptime)',
      'Processamento de grandes volumes de transações em tempo real',
      'Conformidade com regulamentações financeiras'
    ],
    results: [
      'Sistema processando mais de 10.000 transações por dia',
      'Tempo de resposta médio de 200ms para consultas',
      'Zero downtime durante 6 meses consecutivos',
      'Feedback positivo de 95% dos usuários internos'
    ],
    icon: 'bank',
    iconColor: 'blue'
  },
  {
    id: 'turbi-backoffice',
    title: 'Turbi Backoffice Platform',
    description: 'Plataforma de gestão de investimentos para startup de mobilidade. Desenvolvida para centralizar e automatizar processos de gestão de investimentos, permitindo análise de dados em tempo real e tomada de decisões estratégicas baseadas em métricas precisas.',
    shortDescription: 'Investment management platform for mobility startup. Developed APIs and legacy applications using TypeScript, Node.js, and GCP.',
    technologies: ['TypeScript', 'Node.js', 'Google Cloud Platform', 'MySQL', 'Datadog', 'Google Pub/Sub', 'Functions', '.NET Core'],
    category: 'Investment Management',
    duration: 'Jul - Nov 2023',
    company: 'Turbi',
    role: 'Software Engineer - Backoffice Team',
    achievements: [
      'Desenvolvimento de APIs RESTful com alta performance',
      'Implementação de sistema de notificações em tempo real',
      'Integração com Google Cloud Platform e serviços de IA',
      'Criação de dashboard analítico para tomada de decisões'
    ],
    challenges: [
      'Migração de aplicações legadas para arquitetura moderna',
      'Integração com múltiplas fontes de dados financeiros',
      'Garantir escalabilidade para crescimento da startup',
      'Implementar segurança robusta para dados financeiros'
    ],
    results: [
      'Redução de 60% no tempo de processamento de relatórios',
      'API com capacidade de 1M+ requests por dia',
      'Dashboard com mais de 50 métricas em tempo real',
      'Feedback de 98% de satisfação da equipe'
    ],
    icon: 'lightning',
    iconColor: 'green'
  },
  {
    id: 'scp-wallet',
    title: 'SCP Wallet & Gamebox Platform',
    description: 'Plataforma de carteira digital e renovação de gameboxes para membros do Sporting Club de Portugal. Sistema completo que permite aos sócios gerenciar suas carteiras digitais, vender gameboxes e acumular fundos, além de renovar gameboxes para jogos do estádio e pavilhão.',
    shortDescription: 'Digital wallet and gamebox renewal platform for Sporting Club of Portugal members. Integrated with EasyPay payment solutions.',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'EasyPay', 'Oracle', 'WS', 'Taiga', 'GitLab', 'Jenkins'],
    category: 'Digital Wallet & Sports',
    duration: 'Dec 2023 - Present',
    company: 'Growin Consulting / Sporting Club of Portugal',
    role: 'Software Engineer',
    achievements: [
      'Criação da funcionalidade de carteira digital completa',
      'Sistema de venda e compra de gameboxes entre membros',
      'Integração com EasyPay para processamento de pagamentos',
      'Plataforma de renovação de gameboxes online'
    ],
    challenges: [
      'Integração com sistema de pagamentos EasyPay',
      'Garantir segurança nas transações financeiras',
      'Interface intuitiva para usuários de todas as idades',
      'Sincronização com sistemas legados do clube'
    ],
    results: [
      'Mais de 50.000 membros ativos na plataforma',
      'Processamento de €500K+ em transações mensais',
      'Taxa de conversão de 85% para renovações online',
      'Redução de 70% no atendimento presencial'
    ],
    icon: 'wallet',
    iconColor: 'purple'
  }
];

