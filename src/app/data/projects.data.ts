import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 'sporting-cp',
    company: 'Sporting Clube de Portugal',
    period: 'Dec 2023 - Present',
    type: 'Football Club - Current Experience',
    summary: 'Software Engineer at Sporting Club de Portugal, participating from scope alignment with stakeholders to development, testing and support of solutions.',
    description: `Acting as Software Engineer at Sporting Club de Portugal, participating from scope alignment with stakeholders to development, testing and support of solutions. Implementation of the Wallet application, allowing members to sell their Gameboxes and manage balance in an integrated way. Contribution to the evolution of the Gamebox Platform, ensuring annual seat acquisition at the stadium and improving the member experience.

Development of payment integrations with EasyPay and Adyen, consumption of Web Services and technical support to other existing applications, such as Lugares de Leão and Tickets.`,
    technologies: ['Angular', 'PrimeNG', 'PrimeFlex', 'SQL Server', 'Oracle', '.NET Core', 'Entity Framework', 'Web Services', 'Taiga', 'GitLab', 'Jenkins', 'xUnit', 'NSubstitute', 'Hangfire', 'Moq'],
    highlights: [
      'Implementation of the Wallet application for members',
      'Evolution of the Gamebox Platform',
      'Payment integrations with EasyPay and Adyen',
      'Web Services consumption and technical support'
    ]
  },
  {
    id: 'turbi',
    company: 'Turbi',
    period: 'Jul - Nov 2023',
    type: 'Car Rental Startup',
    summary: 'Acted in the Claims squad, contributing to the development of the claims management API, allowing customers to report accidents through the app.',
    description: `Acting in the Claims squad, contributing to the development of the claims management API, allowing customers to report accidents through the app and the backoffice to manage processes, documentation and communications with insurance companies. Participation in the entire development cycle, from alignment with stakeholders and technical definition to implementation, testing and evolutionary maintenance.

Development and improvement of backend services in Node.js/TypeScript, integrations with REST and SOAP APIs, use of Google Cloud Platform services (Cloud Functions, Pub/Sub, Firestore/Firebase) and monitoring with Datadog.`,
    technologies: ['Node.js', 'TypeScript', 'JavaScript', 'MySQL', 'Google Cloud Platform', 'Cloud Functions', 'Pub/Sub', 'Firestore/Firebase', 'Datadog', 'SOAP integrations', 'GitLab', 'Agile methodologies'],
    highlights: [
      'Claims management API development',
      'Integration with insurance companies',
      'Google Cloud Platform services implementation',
      'Full development cycle participation'
    ]
  },
  {
    id: 'banco-xp',
    company: 'Banco XP',
    period: '2020 - 2023',
    type: 'Bank and Investment Broker',
    summary: 'Acted in the Exchange Squad, in an agile environment, focusing on the Settlement Squad. Participation in the entire development cycle.',
    description: `Acting in the Exchange Squad, in an agile environment, focusing on the Settlement Squad. Participation in the entire development cycle, from alignment with stakeholders to implementation and production monitoring. Contribution to the development and evolution of critical services in the exchange area, including the implementation of the Settlement Monitor microservices architecture, allowing currency exchange to be contracted directly through the application.

Experience in API development and asynchronous integrations, optimization of settlement processes and support for production systems.`,
    technologies: ['.NET/C#', 'Azure Functions', 'RabbitMQ', 'Apache Kafka', 'Service Bus', 'Control-M', 'SQL Server', 'Oracle', 'Entity Framework', 'Dapper', 'Kibana', 'Datadog', 'xUnit', 'NSubstitute', 'Moq'],
    highlights: [
      'Settlement Monitor microservices architecture',
      'Critical exchange area services',
      'Asynchronous integrations',
      'Production system support'
    ]
  },
  {
    id: 'techteam',
    company: 'TechTeam',
    period: '2018 - 2020',
    type: 'Angolan Software Development Startup',
    summary: 'Acted as Fullstack Developer and Technical Leader, with participation in the creation and structuring of the company as co-founder.',
    description: `Acting as Fullstack Developer and Technical Leader, with participation in the creation and structuring of the company as co-founder. Responsible for planning, alignment with clients, technical definition and leadership of interns and junior developers in the development of process management platforms for law offices, websites for companies, artists and restaurants, and chatbot solutions.

Acting in the entire development cycle, from conception to implementation, testing and delivery.`,
    technologies: ['Node.js', 'Angular', 'React', 'EJS', 'ExpressJS', 'MongoDB', 'SQL Server', 'PM2', 'Nginx', 'Linux', 'Git', 'Trello', 'Scrum', 'Kanban'],
    highlights: [
      'Co-founder and Technical Leader',
      'Process management platforms for law offices',
      'Chatbot solutions development',
      'Leadership of interns and junior developers'
    ]
  },
  {
    id: 'fullbar-digital',
    company: 'Fullbar Digital',
    period: '2019',
    type: 'Consultancy Specialized in Incentive Campaign Solutions',
    summary: 'Consultancy specialized in developing solutions and applications for incentive campaigns for large companies, such as Oi and Vivo.',
    description: `Consultancy specialized in developing solutions and applications for incentive campaigns for large companies, such as Oi and Vivo. Acting in backend development of applications for marketing campaigns, participating in the entire development cycle, from technical definition and implementation to support.

Development of APIs and services using .NET Framework and Dapper, integration with SQL Server databases, creation of features for campaign processing and support for applications with high data volume.`,
    technologies: ['.NET Framework', 'SQL Server', 'Dapper', 'Kibana', 'Redis', 'Amazon S3', 'Node.js', 'MongoDB', 'GitLab', 'Jira', 'Agile methodologies'],
    highlights: [
      'Incentive campaign solutions for large companies',
      'High data volume applications',
      'Marketing campaign backend development',
      'Integration with major telecom companies'
    ]
  },
  {
    id: 'sempreit',
    company: 'SempreIT',
    period: '2018 - 2019',
    type: 'Consultancy Specialized in Test Automation and Corporate Platforms',
    summary: 'Acting in the development of solutions for EDP internal management, and participation as test automation analyst at Banco Itaú.',
    description: `Acting in the development of solutions for EDP internal management, using .NET Framework and SQL Server, and participation as test automation analyst at Banco Itaú, with focus on Selenium, JMeter and test integration in high criticality environments.`,
    technologies: ['Azure', '.NET Core', '.NET Framework', 'SQL Server', 'JMeter', 'Selenium', 'KnockoutJS', 'VueJS', 'Bootstrap', 'Jira'],
    highlights: [
      'EDP internal management solutions',
      'Test automation at Banco Itaú',
      'High criticality environment testing',
      'Selenium and JMeter expertise'
    ]
  },
  {
    id: 'banco-santander',
    company: 'Banco Santander',
    period: '2016 - 2018',
    type: 'Banking',
    summary: 'Internship in Service Continuity and Applications (GBM) and in the Securities and DOCs Compensation team.',
    description: `Internship in Service Continuity and Applications (GBM) and in the Securities and DOCs Compensation team, acting in support of internal systems, incident analysis and application maintenance. Participation in monitoring activities, failure correction and improvements in operational processes.`,
    technologies: ['C#/.NET Framework', 'PL/SQL', 'MySQL', 'HTML', 'COBOL', 'Scrum'],
    highlights: [
      'Internal systems support',
      'Incident analysis',
      'Application maintenance',
      'Operational process improvements'
    ]
  }
];

