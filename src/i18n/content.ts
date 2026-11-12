export type Lang = 'en' | 'es'
export type LineId = 'software' | 'data' | 'sales'

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/daniel-steven-rodr%C3%ADguez-pachon-4a0690159/',
  github: 'https://github.com/danielPachon',
  cv: '/Daniel-Pachon-CV.pdf',
  source: 'https://github.com/danielPachon/danielpachon.github.io',
  taskManagerDemo: 'https://task-manager-web-cn5q.onrender.com',
  taskManagerWeb: 'https://github.com/danielPachon/task-manager-web',
  taskManagerApi: 'https://github.com/danielPachon/task-manager-api',
  taskManagerDocs: 'https://task-manager-api-0uhq.onrender.com/docs',
}

/** A stop on a career line. `planned` stops are drawn as a route under construction. */
type Station = {
  kind: 'job' | 'study' | 'planned'
  title: string
  org: string
  period: string
  detail?: string
}

type Line = {
  id: LineId
  name: string
  stations: Station[]
}

/** Keeps every station typed as a Station, so optional fields read cleanly in templates. */
const defineNetwork = (lines: Line[]) => lines

const en = {
  meta: {
    title: 'Daniel Pachón · Software Engineer',
    description:
      'Software engineer from Colombia building full stack web products with Java, Python and TypeScript, specializing in data analytics. Open to remote roles and opportunities in Spain.',
  },
  nav: {
    skip: 'Skip to content',
    project: 'Project',
    route: 'Route',
    stack: 'Stack',
    contact: 'Contact',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    menu: 'Sections',
  },
  lines: { software: 'Software', data: 'Data', sales: 'Sales' } satisfies Record<LineId, string>,
  hero: {
    role: 'Software engineer, full stack web, data and AI',
    pitch: 'I build web products end to end, and I know the customer side from years in sales.',
    terminus: 'Remote or Spain',
    terminusLabel: 'Heading to',
    facts: ['Calarcá, Colombia', 'English C1'],
    ctaProject: 'See the project',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Download CV',
    photoAlt: 'Portrait of Daniel Pachón in a dark suit',
    mapLabel: 'Career map: the Software, Data and Sales lines meet at Daniel Pachón and continue to remote work or Spain.',
  },
  project: {
    heading: 'Task Manager',
    tagline: 'A full stack Kanban app, from database to deployment.',
    facts: [
      'REST API in Node.js and TypeScript with JWT auth over PostgreSQL',
      'React board with drag and drop, English and Spanish, light and dark',
      '45 automated tests, CI on GitHub Actions, Docker, deployed on Render and Neon',
    ],
    demo: 'Open live demo',
    codeWeb: 'Frontend code',
    codeApi: 'API code',
    docs: 'API docs',
    imageAltLight: 'Task Manager board in English with the light theme, tasks in To do, In progress and Done',
    imageAltDark: 'Task Manager board in Spanish with the dark theme',
    note: 'Free hosting: the first load can take up to a minute.',
  },
  route: {
    heading: 'Route',
    intro: 'Every job and study, newest first.',
    present: 'Now',
    planned: 'Under construction',
    more: 'Details',
  },
  network: defineNetwork([
    {
      id: 'software',
      name: 'Software',
      stations: [
        {
          kind: 'job',
          title: 'Web Layout Developer',
          org: 'Konecta, Páginas Amarillas',
          period: '2025',
          detail: 'Migrated client websites between layout platforms, keeping them rendering and working correctly, with design and development teams.',
        },
        { kind: 'study', title: 'Software Engineering', org: 'Universidad EAM', period: '2023 – 2026' },
        {
          kind: 'job',
          title: 'Full Stack Developer',
          org: 'Fundecompe',
          period: '2023 – 2024',
          detail: 'Led design, development and maintenance of web applications with React, Node.js, Express, PostgreSQL and AWS, using agile practices.',
        },
        { kind: 'study', title: 'Software Development Technologist', org: 'Universidad EAM', period: '2021 – 2023' },
        { kind: 'study', title: 'Information Systems Technologist', org: 'SENA', period: '2021 – 2022' },
        {
          kind: 'job',
          title: 'IT Support and Projects',
          org: 'Self-employed',
          period: '2020 – Now',
          detail: 'Computers, licences, CCTV and local networks for small businesses, from planning to after-sales support.',
        },
        { kind: 'study', title: 'Software Development Technician', org: 'SENA', period: '2019 – 2020' },
      ],
    },
    {
      id: 'data',
      name: 'Data',
      stations: [
        { kind: 'planned', title: 'AI assistant over internal documents', org: 'Next project', period: '' },
        { kind: 'planned', title: 'Telecom churn prediction API', org: 'Next project', period: '' },
        { kind: 'study', title: 'Specialization in Data Analytics', org: 'Universidad EAM', period: '2025 – Now' },
        { kind: 'study', title: 'English, C1', org: 'American School Way', period: '2025 – Now' },
      ],
    },
    {
      id: 'sales',
      name: 'Sales',
      stations: [
        {
          kind: 'job',
          title: 'Sales Advisor',
          org: 'Movistar (Tigo)',
          period: '2026 – Now',
          detail: 'Sales, retention, loyalty and win-back of telecom customers.',
        },
        {
          kind: 'job',
          title: 'Financial Accounts Agent',
          org: 'Gmor IT Solution',
          period: '2025 – 2026',
          detail: 'Consultative selling and personalised advice for investors, from first contact to onboarding.',
        },
        {
          kind: 'job',
          title: 'Sales Advisor, Colombian market',
          org: 'Adecco',
          period: '2024 – 2025',
          detail: 'Full phone sales cycle, from prospecting to closing.',
        },
        {
          kind: 'job',
          title: 'Customer Service and Sales, Chilean market',
          org: 'PeopleBPO',
          period: '2024',
          detail: 'Support by phone, email and chat, then outbound sales.',
        },
      ],
    },
  ]),
  stack: {
    heading: 'Stack',
    groups: [
      { name: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'REST APIs'] },
      { name: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
      { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Power BI', 'Looker Studio'] },
      { name: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'GitHub Actions'] },
    ],
  },
  contact: {
    heading: 'Next stop: your team',
    body: 'A developer who understands the code and the customer. Message me or take the CV.',
    linkedin: 'Message me on LinkedIn',
    cv: 'Download CV (PDF)',
    github: 'GitHub',
  },
  footer: {
    built: 'Built with Astro, GSAP and Lenis.',
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
    route: 'Recorrido',
    stack: 'Stack',
    contact: 'Contacto',
    language: 'Idioma',
    theme: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    menu: 'Secciones',
  },
  lines: { software: 'Software', data: 'Datos', sales: 'Comercial' },
  hero: {
    role: 'Ingeniero de software, web full stack, datos e IA',
    pitch: 'Construyo productos web de principio a fin, y conozco el lado del cliente por mis años en ventas.',
    terminus: 'Remoto o España',
    terminusLabel: 'Destino',
    facts: ['Calarcá, Colombia', 'Inglés C1'],
    ctaProject: 'Ver el proyecto',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Descargar CV',
    photoAlt: 'Retrato de Daniel Pachón con traje oscuro',
    mapLabel: 'Mapa de carrera: las líneas Software, Datos y Comercial se cruzan en Daniel Pachón y siguen hacia trabajo remoto o España.',
  },
  project: {
    heading: 'Task Manager',
    tagline: 'Una app Kanban full stack, de la base de datos al despliegue.',
    facts: [
      'API REST en Node.js y TypeScript con autenticación JWT sobre PostgreSQL',
      'Tablero en React con arrastrar y soltar, inglés y español, claro y oscuro',
      '45 tests automatizados, CI en GitHub Actions, Docker, desplegado en Render y Neon',
    ],
    demo: 'Abrir demo en vivo',
    codeWeb: 'Código del frontend',
    codeApi: 'Código de la API',
    docs: 'Docs de la API',
    imageAltLight: 'Tablero de Task Manager en inglés con el tema claro, tareas en Por hacer, En progreso y Hecho',
    imageAltDark: 'Tablero de Task Manager en español con el tema oscuro',
    note: 'Alojamiento gratuito: la primera carga puede tardar hasta un minuto.',
  },
  route: {
    heading: 'Recorrido',
    intro: 'Cada trabajo y estudio, del más reciente al más antiguo.',
    present: 'Hoy',
    planned: 'En construcción',
    more: 'Detalles',
  },
  network: defineNetwork([
    {
      id: 'software',
      name: 'Software',
      stations: [
        {
          kind: 'job',
          title: 'Maquetador Web',
          org: 'Konecta, Páginas Amarillas',
          period: '2025',
          detail: 'Migración de sitios web de clientes entre plataformas de maquetación, con equipos de diseño y desarrollo.',
        },
        { kind: 'study', title: 'Ingeniería de Software', org: 'Universidad EAM', period: '2023 – 2026' },
        {
          kind: 'job',
          title: 'Desarrollador Full Stack',
          org: 'Fundecompe',
          period: '2023 – 2024',
          detail: 'Lideré el diseño, desarrollo y mantenimiento de aplicaciones web con React, Node.js, Express, PostgreSQL y AWS, con prácticas ágiles.',
        },
        { kind: 'study', title: 'Tecnólogo en Desarrollo de Software', org: 'Universidad EAM', period: '2021 – 2023' },
        { kind: 'study', title: 'Tecnólogo en Sistemas de Información', org: 'SENA', period: '2021 – 2022' },
        {
          kind: 'job',
          title: 'Soporte y Proyectos TI',
          org: 'Independiente',
          period: '2020 – Hoy',
          detail: 'Equipos, licencias, CCTV y redes locales para pymes, desde la planificación hasta el soporte posventa.',
        },
        { kind: 'study', title: 'Técnico en Desarrollo de Software', org: 'SENA', period: '2019 – 2020' },
      ],
    },
    {
      id: 'data',
      name: 'Datos',
      stations: [
        { kind: 'planned', title: 'Asistente de IA sobre documentos internos', org: 'Próximo proyecto', period: '' },
        { kind: 'planned', title: 'API de predicción de abandono en telecom', org: 'Próximo proyecto', period: '' },
        { kind: 'study', title: 'Especialización en Analítica de Datos', org: 'Universidad EAM', period: '2025 – Hoy' },
        { kind: 'study', title: 'Inglés, C1', org: 'American School Way', period: '2025 – Hoy' },
      ],
    },
    {
      id: 'sales',
      name: 'Comercial',
      stations: [
        {
          kind: 'job',
          title: 'Asesor Comercial',
          org: 'Movistar (Tigo)',
          period: '2026 – Hoy',
          detail: 'Ventas, retención, fidelización y recuperación de clientes de telecomunicaciones.',
        },
        {
          kind: 'job',
          title: 'Agente de Cuentas Financieras',
          org: 'Gmor IT Solution',
          period: '2025 – 2026',
          detail: 'Venta consultiva y asesoría personalizada a inversionistas, del primer contacto a la vinculación.',
        },
        {
          kind: 'job',
          title: 'Asesor de Ventas, mercado colombiano',
          org: 'Adecco',
          period: '2024 – 2025',
          detail: 'Ciclo completo de ventas telefónicas, de la prospección al cierre.',
        },
        {
          kind: 'job',
          title: 'Servicio al Cliente y Ventas, mercado chileno',
          org: 'PeopleBPO',
          period: '2024',
          detail: 'Atención por teléfono, correo y chat; luego ventas salientes.',
        },
      ],
    },
  ]),
  stack: {
    heading: 'Stack',
    groups: [
      { name: 'Lenguajes', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'APIs REST'] },
      { name: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
      { name: 'Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Power BI', 'Looker Studio'] },
      { name: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'GitHub Actions'] },
    ],
  },
  contact: {
    heading: 'Próxima parada: tu equipo',
    body: 'Un desarrollador que entiende el código y al cliente. Escríbeme o llévate el CV.',
    linkedin: 'Escríbeme por LinkedIn',
    cv: 'Descargar CV (PDF)',
    github: 'GitHub',
  },
  footer: {
    built: 'Hecho con Astro, GSAP y Lenis.',
    source: 'Código fuente',
  },
}

export const content: Record<Lang, Content> = { en, es }

export const pathFor = (lang: Lang) => (lang === 'en' ? '/' : '/es/')
