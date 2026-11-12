export type Lang = 'en' | 'es'

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/daniel-steven-rodr%C3%ADguez-pachon-4a0690159/',
  github: 'https://github.com/danielPachon',
  cv: '/Daniel-Pachon-CV.pdf',
  taskManagerDemo: 'https://task-manager-web-cn5q.onrender.com',
  taskManagerWeb: 'https://github.com/danielPachon/task-manager-web',
  taskManagerApi: 'https://github.com/danielPachon/task-manager-api',
  taskManagerDocs: 'https://task-manager-api-0uhq.onrender.com/docs',
}

interface Role {
  title: string
  org: string
  period: string
  summary: string
}

interface Study {
  title: string
  org: string
  period: string
}

const en = {
  meta: {
    title: 'Daniel Pachón · Software Engineer',
    description:
      'Software engineer from Colombia building full stack web products with Java, Python and TypeScript, specializing in data analytics. Open to remote roles and opportunities in Spain.',
  },
  nav: {
    skip: 'Skip to content',
    project: 'Project',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    menu: 'Sections',
  },
  hero: {
    role: 'Software Engineer · Full Stack · Data & AI',
    title: 'I build web products end to end, with the people who use them in mind.',
    intro:
      "I'm a software engineer from Colombia working with Java, Python and TypeScript, and I'm completing a specialization in data analytics. Years in sales and customer retention taught me to build for real users and measurable results.",
    availability: 'Open to remote roles and opportunities in Spain',
    location: 'Calarcá, Colombia',
    english: 'English C1',
    ctaProject: 'See my work',
    ctaCv: 'Download CV',
    photoAlt: 'Portrait of Daniel Pachón in a dark suit',
  },
  project: {
    heading: 'Featured project',
    name: 'Task Manager',
    tagline: 'A full stack Kanban app, from database to deployment.',
    body: 'A task board where people sign up, capture work and drag it from to do to done. I designed and built both sides: a REST API with authentication and a React interface, each with its own tests, CI pipeline and live deployment.',
    highlights: [
      'REST API in Node.js and TypeScript with JWT authentication, ownership rules, filtering, sorting and pagination over PostgreSQL',
      'React interface with drag and drop, optimistic updates, English and Spanish, and light and dark themes',
      '45 automated tests across the API (against a real database) and the interface, run by GitHub Actions on every push',
      'Dockerized API and static frontend on Render, deployed from Blueprints (infrastructure as code), with a Neon PostgreSQL database',
    ],
    stackLabel: 'Built with',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    demo: 'Open live demo',
    codeWeb: 'Frontend code',
    codeApi: 'API code',
    docs: 'API docs',
    imageAlt: 'Task Manager board with tasks in To do, In progress and Done columns',
    note: 'Hosted on a free tier: the first request can take up to a minute while the server wakes up.',
    next: 'Next on my roadmap: a telecom churn prediction model served through an API, and an AI assistant that answers from internal documents.',
  },
  strengths: {
    heading: 'Where engineering meets business',
    intro: 'Three disciplines I bring to a team, each backed by work I have done.',
    items: [
      {
        title: 'Software engineering',
        body: 'Full stack web applications and RESTful APIs with React, Node.js, Spring Boot and Django. I care about clear architecture, automated tests and CI/CD.',
      },
      {
        title: 'Data analytics',
        body: 'Specialization in data analytics at Universidad EAM. SQL, Python and Power BI to turn data into decisions, with a focus on customer behaviour.',
      },
      {
        title: 'Customers and sales',
        body: 'Retention, loyalty and consultative selling in telecom and finance. I understand the problems software has to solve because I have faced them with customers.',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    techGroup: 'Software and IT',
    businessGroup: 'Sales and customer experience',
    tech: [
      {
        title: 'Web Layout Developer',
        org: 'Konecta · Páginas Amarillas',
        period: 'Feb 2025 – Nov 2025',
        summary:
          'Migrated client websites between layout platforms, with the technical and visual adjustments needed to keep them rendering and working correctly. Coordinated with design and development teams to meet standards and deadlines.',
      },
      {
        title: 'Full Stack Developer',
        org: 'Fundecompe',
        period: 'Aug 2023 – Apr 2024',
        summary:
          'Led the design, development and maintenance of scalable web applications across the full project lifecycle. Led the team implementing React, Node.js, Express, PostgreSQL and AWS with agile practices.',
      },
      {
        title: 'IT Support and Projects Technician',
        org: 'Self-employed',
        period: 'Jan 2020 – Present',
        summary:
          'Install, configure and maintain computers, software licences, CCTV and IP cameras and local networks for small businesses. Advise on hardware and software purchases and run small IT projects from planning to after-sales support.',
      },
    ] satisfies Role[],
    business: [
      {
        title: 'Sales Advisor',
        org: 'Movistar (Tigo)',
        period: 'Aug 2026 – Present',
        summary:
          'Sales, retention, loyalty and win-back of telecom customers: identifying needs, offering the right services and contributing to commercial targets.',
      },
      {
        title: 'Financial Accounts Agent',
        org: 'Gmor IT Solution',
        period: 'Dec 2025 – Aug 2026',
        summary:
          'Consultative selling and personalised advice for investors through specialised brokers, from first contact to onboarding.',
      },
      {
        title: 'Sales Advisor, Colombian market',
        org: 'Adecco',
        period: 'Oct 2024 – Jan 2025',
        summary: 'Full sales cycle by phone, from prospecting to closing, to meet monthly targets.',
      },
      {
        title: 'Customer Service and Sales Advisor, Chilean market',
        org: 'PeopleBPO',
        period: 'May 2024 – Oct 2024',
        summary:
          'Resolved customer requests by phone, email and chat, logged incidents and provided technical support, then moved to outbound sales for Chilean customers.',
      },
    ] satisfies Role[],
  },
  education: {
    heading: 'Education',
    items: [
      { title: 'Specialization in Data Analytics', org: 'Universidad EAM', period: '2025 – Present' },
      { title: 'Software Engineering', org: 'Universidad EAM', period: '2023 – 2026' },
      { title: 'Software Development Technologist', org: 'Universidad EAM', period: '2021 – 2023' },
      {
        title: 'Information Systems Analysis and Development Technologist',
        org: 'SENA',
        period: '2021 – 2022',
      },
      { title: 'Software Development Technician', org: 'SENA', period: '2019 – 2020' },
      { title: 'Intensive English course, C1', org: 'American School Way', period: '2025 – Present' },
    ] satisfies Study[],
  },
  skills: {
    heading: 'Skills',
    groups: [
      { name: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'REST APIs', 'Payment gateways'] },
      { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Prototyping'] },
      { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Power BI', 'Looker Studio', 'Excel'] },
      { name: 'Cloud and DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'Git and GitHub'] },
      {
        name: 'Ways of working',
        items: ['Software architecture', 'Project management', 'Team leadership', 'Technical documentation', 'Trello and Planner', 'Slack and Teams'],
      },
    ],
    spoken: 'Spanish (native) and English (C1)',
    spokenLabel: 'Spoken languages',
  },
  contact: {
    heading: "Let's work together",
    body: 'Looking for a developer who understands both the code and the customer? Message me on LinkedIn or download my CV.',
    linkedin: 'Message me on LinkedIn',
    github: 'See my GitHub',
    cv: 'Download CV (PDF)',
  },
  footer: {
    built: 'Built with Astro and deployed on GitHub Pages.',
    source: 'Source code',
  },
}

export type Content = typeof en

const es: Content = {
  meta: {
    title: 'Daniel Pachón · Ingeniero de Software',
    description:
      'Ingeniero de software colombiano que construye productos web full stack con Java, Python y TypeScript, especializándose en analítica de datos. Abierto a trabajo remoto y oportunidades en España.',
  },
  nav: {
    skip: 'Saltar al contenido',
    project: 'Proyecto',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
    language: 'Idioma',
    theme: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    menu: 'Secciones',
  },
  hero: {
    role: 'Ingeniero de Software · Full Stack · Datos e IA',
    title: 'Construyo productos web de principio a fin, pensando en quienes los usan.',
    intro:
      'Soy ingeniero de software colombiano, trabajo con Java, Python y TypeScript y estoy terminando una especialización en analítica de datos. Mis años en ventas y retención de clientes me enseñaron a construir para usuarios reales y resultados medibles.',
    availability: 'Abierto a trabajo remoto y oportunidades en España',
    location: 'Calarcá, Colombia',
    english: 'Inglés C1',
    ctaProject: 'Ver mi trabajo',
    ctaCv: 'Descargar CV',
    photoAlt: 'Retrato de Daniel Pachón con traje oscuro',
  },
  project: {
    heading: 'Proyecto destacado',
    name: 'Task Manager',
    tagline: 'Una app Kanban full stack, de la base de datos al despliegue.',
    body: 'Un tablero de tareas donde las personas se registran, anotan su trabajo y lo arrastran de por hacer a hecho. Diseñé y construí ambas partes: una API REST con autenticación y una interfaz en React, cada una con sus tests, su pipeline de CI y su despliegue en vivo.',
    highlights: [
      'API REST en Node.js y TypeScript con autenticación JWT, reglas de propiedad, filtros, ordenamiento y paginación sobre PostgreSQL',
      'Interfaz en React con arrastrar y soltar, actualizaciones optimistas, inglés y español, y tema claro y oscuro',
      '45 tests automatizados entre la API (contra una base de datos real) y la interfaz, ejecutados por GitHub Actions en cada push',
      'API en Docker y frontend estático en Render, desplegados con Blueprints (infraestructura como código) y base de datos PostgreSQL en Neon',
    ],
    stackLabel: 'Construido con',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    demo: 'Abrir demo en vivo',
    codeWeb: 'Código del frontend',
    codeApi: 'Código de la API',
    docs: 'Documentación de la API',
    imageAlt: 'Tablero de Task Manager en español con tareas en las columnas Por hacer, En progreso y Hecho',
    note: 'Alojado en un plan gratuito: la primera petición puede tardar hasta un minuto mientras el servidor se activa.',
    next: 'Lo siguiente en mi ruta: un modelo de predicción de abandono de clientes en telecomunicaciones servido por una API, y un asistente de IA que responde a partir de documentos internos.',
  },
  strengths: {
    heading: 'Donde la ingeniería se une con el negocio',
    intro: 'Tres disciplinas que aporto a un equipo, cada una respaldada por trabajo real.',
    items: [
      {
        title: 'Ingeniería de software',
        body: 'Aplicaciones web full stack y APIs RESTful con React, Node.js, Spring Boot y Django. Me importan una arquitectura clara, los tests automatizados y el CI/CD.',
      },
      {
        title: 'Analítica de datos',
        body: 'Especialización en Analítica de Datos en la Universidad EAM. SQL, Python y Power BI para convertir datos en decisiones, con foco en el comportamiento de los clientes.',
      },
      {
        title: 'Clientes y ventas',
        body: 'Retención, fidelización y venta consultiva en telecomunicaciones y finanzas. Entiendo los problemas que el software debe resolver porque los he vivido con clientes.',
      },
    ],
  },
  experience: {
    heading: 'Experiencia',
    techGroup: 'Software y TI',
    businessGroup: 'Ventas y experiencia del cliente',
    tech: [
      {
        title: 'Maquetador Web',
        org: 'Konecta · Páginas Amarillas',
        period: 'Feb 2025 – Nov 2025',
        summary:
          'Migración de sitios web de clientes entre plataformas de maquetación, con los ajustes técnicos y estéticos necesarios para su correcta visualización y funcionamiento. Coordinación con equipos de diseño y desarrollo para cumplir estándares y entregas.',
      },
      {
        title: 'Desarrollador Full Stack',
        org: 'Fundecompe',
        period: 'Ago 2023 – Abr 2024',
        summary:
          'Lideré el diseño, desarrollo y mantenimiento de aplicaciones web escalables durante todo el ciclo del proyecto. Dirigí al equipo en la implementación de React, Node.js, Express, PostgreSQL y AWS con prácticas ágiles.',
      },
      {
        title: 'Técnico de Soporte y Proyectos TI',
        org: 'Independiente',
        period: 'Ene 2020 – Presente',
        summary:
          'Instalación, configuración y mantenimiento de equipos, licencias de software, cámaras CCTV e IP y redes locales para pymes. Asesoría en compra de hardware y software, y gestión de pequeños proyectos TI desde la planificación hasta el soporte posventa.',
      },
    ],
    business: [
      {
        title: 'Asesor Comercial',
        org: 'Movistar (Tigo)',
        period: 'Ago 2026 – Presente',
        summary:
          'Ventas, retención, fidelización y recuperación de clientes de telecomunicaciones: identificar necesidades, ofrecer los servicios adecuados y contribuir a las metas comerciales.',
      },
      {
        title: 'Agente de Cuentas Financieras',
        org: 'Gmor IT Solution',
        period: 'Dic 2025 – Ago 2026',
        summary:
          'Venta consultiva y asesoría personalizada a inversionistas a través de brokers especializados, desde el primer contacto hasta la vinculación.',
      },
      {
        title: 'Asesor de Ventas, mercado colombiano',
        org: 'Adecco',
        period: 'Oct 2024 – Ene 2025',
        summary: 'Ciclo completo de ventas telefónicas, de la prospección al cierre, para cumplir metas mensuales.',
      },
      {
        title: 'Asesor de Servicio al Cliente y Ventas, mercado chileno',
        org: 'PeopleBPO',
        period: 'May 2024 – Oct 2024',
        summary:
          'Atención de solicitudes por teléfono, correo y chat, registro de incidencias y soporte técnico; luego ventas salientes a clientes chilenos.',
      },
    ],
  },
  education: {
    heading: 'Educación',
    items: [
      { title: 'Especialización en Analítica de Datos', org: 'Universidad EAM', period: '2025 – Presente' },
      { title: 'Ingeniería de Software', org: 'Universidad EAM', period: '2023 – 2026' },
      { title: 'Tecnólogo en Desarrollo de Software', org: 'Universidad EAM', period: '2021 – 2023' },
      {
        title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        org: 'SENA',
        period: '2021 – 2022',
      },
      { title: 'Técnico en Desarrollo de Software', org: 'SENA', period: '2019 – 2020' },
      { title: 'Curso intensivo de inglés, C1', org: 'American School Way', period: '2025 – Presente' },
    ],
  },
  skills: {
    heading: 'Habilidades',
    groups: [
      { name: 'Lenguajes', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'APIs REST', 'Pasarelas de pago'] },
      { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Prototipado'] },
      { name: 'Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Power BI', 'Looker Studio', 'Excel'] },
      { name: 'Cloud y DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'Git y GitHub'] },
      {
        name: 'Forma de trabajo',
        items: ['Arquitectura de software', 'Gestión de proyectos', 'Liderazgo de equipos', 'Documentación técnica', 'Trello y Planner', 'Slack y Teams'],
      },
    ],
    spoken: 'Español (nativo) e inglés (C1)',
    spokenLabel: 'Idiomas',
  },
  contact: {
    heading: 'Trabajemos juntos',
    body: '¿Buscas un desarrollador que entienda tanto el código como al cliente? Escríbeme por LinkedIn o descarga mi CV.',
    linkedin: 'Escríbeme por LinkedIn',
    github: 'Ver mi GitHub',
    cv: 'Descargar CV (PDF)',
  },
  footer: {
    built: 'Hecho con Astro y publicado en GitHub Pages.',
    source: 'Código fuente',
  },
}

export const content: Record<Lang, Content> = { en, es }

export const pathFor = (lang: Lang) => (lang === 'en' ? '/' : '/es/')
