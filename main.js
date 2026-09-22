const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

const setMenu = (open) => {
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
};

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });
header.classList.toggle('is-scrolled', window.scrollY > 24);

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const translations = {
  pt: {
    title: 'Luana Nogueira — Backend & Full Stack',
    languageLabel: 'Selecionar idioma',
    skipLink: 'Pular para o conteúdo',
    menuLabel: 'Abrir menu',
    technologiesLabel: 'Tecnologias',
    closeImage: 'Fechar imagem',
    homeLabel: 'Voltar ao início',
    navigationLabel: 'Navegação principal',
    profilesLabel: 'Perfis profissionais',
    playerLabel: 'Player retrô interativo',
    toughtsTechnologies: 'Tecnologias do Toughts',
    petTechnologies: 'Tecnologias do Get A Pet',
    toughtsDiagramAlt: 'Diagrama completo da arquitetura do projeto Toughts',
    petDiagramAlt: 'Diagrama completo da arquitetura do projeto Get A Pet',
    toughtsOverviewAlt: 'Visão geral do diagrama do Toughts',
    petOverviewAlt: 'Visão geral do diagrama do Get A Pet',
    toughtsArchitectureTitle: 'Arquitetura do Toughts',
    petArchitectureTitle: 'Arquitetura do Get A Pet',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navArchitecture: 'Arquitetura',
    navContact: 'Vamos conversar',
    status: '<span class="status-dot"></span> system status: disponível',
    heroTitle: 'Oi, eu sou a Luana.<br /><span>Transformo ideias em aplicações.</span>',
    heroLead: 'Desenvolvedora <strong>Backend & Full Stack</strong> em formação, criando APIs REST, interfaces e integrações de banco de dados que funcionam de ponta a ponta.',
    viewProjects: 'Ver meus projetos <span aria-hidden="true">↘</span>',
    downloadResume: 'Baixar currículo <span aria-hidden="true">↓</span>',
    aboutLabel: '<span>01</span> sobre mim',
    aboutTitle: 'Tecnologia com lógica, cuidado e um pouco de rosa.',
    aboutIntro: 'Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> em Taubaté, com foco em desenvolvimento Backend e Full Stack.',
    aboutText: 'Minha prática combina regras de negócio, autenticação, bancos relacionais e NoSQL, APIs REST e interfaces em React. Gosto de entender o fluxo inteiro da aplicação e transformar cada etapa em uma experiência clara para quem usa e para quem mantém.',
    location: '<span aria-hidden="true">⌖</span> Taubaté, São Paulo',
    catAlt: 'Gato digitando em um computador',
    stackLabel: '<span>02</span> stack',
    stackTitle: 'Ferramentas que viram produto.',
    stackIntro: 'Da rota da API ao último detalhe da interface.',
    backendTitle: 'Backend',
    backendText: 'Servidores, regras de negócio, autenticação e APIs REST.',
    frontendTitle: 'Frontend',
    frontendText: 'Interfaces responsivas com componentes e navegação fluida.',
    dataTitle: 'Dados',
    dataText: 'Modelagem, relacionamentos e persistência de dados.',
    deliveryTitle: 'Entrega',
    deliveryText: 'Versionamento, integração e publicação de aplicações.',
    projectsLabel: '<span>03</span> projetos selecionados',
    projectsTitle: 'Problemas reais, soluções completas.',
    projectsIntro: 'Dois projetos que mostram arquitetura, interface, banco de dados e deploy trabalhando juntos.',
    toughtsTagline: 'Um espaço para registrar, organizar e compartilhar pensamentos.',
    toughtsText: 'Aplicação full stack com cadastro, login, busca, ordenação e um dashboard protegido. Cada pessoa pode criar, editar e excluir seus próprios pensamentos, com senhas criptografadas e sessão persistente.',
    relationText: 'relação usuário e pensamentos',
    crudText: 'fluxo completo e protegido',
    petTagline: 'Uma plataforma que aproxima pets de novas famílias.',
    petText: 'Web app de adoção com autenticação, perfis, cadastro de pets, pré-visualização de imagens e acompanhamento das adoções. O frontend em React consome uma API Express conectada ao MongoDB pelo mesmo domínio.',
    restText: 'API integrada ao frontend',
    jwtText: 'rotas e ações autenticadas',
    openProject: 'Abrir projeto <span>↗</span>',
    viewCode: 'Ver código ↗',
    viewArchitecture: 'Ver arquitetura ↓',
    architectureLabel: '<span>04</span> por trás do código',
    architectureTitle: 'Arquitetura que dá para enxergar.',
    architectureIntro: 'Mapeei cada projeto do navegador ao banco de dados. Clique para ampliar ou baixe o arquivo editável.',
    enlarge: 'Ampliar desenho <b>↗</b>',
    toughtsDiagram: 'Rotas, autenticação, CRUD, modelos, sessões, estrutura de pastas e deploy.',
    petDiagram: 'Frontend React, API, endpoints, fluxo de adoção, modelos e infraestrutura.',
    downloadDiagram: 'Baixar .excalidraw <span>↓</span>',
    contactKicker: 'tem uma ideia?',
    contactTitle: 'Vamos construir algo <em>juntos.</em>',
    contactText: 'Estou aberta a oportunidades, colaborações e projetos que me façam aprender e criar soluções úteis.',
    sendEmail: 'Enviar um e-mail <span>↗</span>',
    talkLinkedin: 'Conversar no LinkedIn <span>↗</span>',
    footerRole: 'Backend & Full Stack',
    footerCopy: 'Desenhado & desenvolvido por Luana',
    playerKicker: 'NOW PLAYING · STACK FM',
    previous: 'Faixa anterior',
    next: 'Próxima faixa',
    previousLabel: 'PREV',
    nextLabel: 'NEXT',
    play: 'PLAY',
    pause: 'PAUSE',
    playing: 'PLAYING',
    paused: 'PAUSED',
    playTrack: 'Reproduzir faixa',
    pauseTrack: 'Pausar faixa',
  },
  en: {
    title: 'Luana Nogueira — Backend & Full Stack Developer',
    languageLabel: 'Select language',
    skipLink: 'Skip to content',
    menuLabel: 'Open menu',
    technologiesLabel: 'Technologies',
    closeImage: 'Close image',
    homeLabel: 'Back to the top',
    navigationLabel: 'Main navigation',
    profilesLabel: 'Professional profiles',
    playerLabel: 'Interactive retro player',
    toughtsTechnologies: 'Toughts technologies',
    petTechnologies: 'Get A Pet technologies',
    toughtsDiagramAlt: 'Complete architecture diagram for the Toughts project',
    petDiagramAlt: 'Complete architecture diagram for the Get A Pet project',
    toughtsOverviewAlt: 'Overview of the Toughts diagram',
    petOverviewAlt: 'Overview of the Get A Pet diagram',
    toughtsArchitectureTitle: 'Toughts architecture',
    petArchitectureTitle: 'Get A Pet architecture',
    navAbout: 'About',
    navProjects: 'Projects',
    navArchitecture: 'Architecture',
    navContact: 'Let’s talk',
    status: '<span class="status-dot"></span> system status: available',
    heroTitle: 'Hi, I’m Luana.<br /><span>I turn ideas into applications.</span>',
    heroLead: 'A <strong>Backend & Full Stack</strong> developer in training, building REST APIs, interfaces, and database integrations that work from end to end.',
    viewProjects: 'View my projects <span aria-hidden="true">↘</span>',
    downloadResume: 'Download résumé <span aria-hidden="true">↓</span>',
    aboutLabel: '<span>01</span> about me',
    aboutTitle: 'Technology with logic, care, and a little pink.',
    aboutIntro: 'I am a <strong>Systems Analysis and Development</strong> student in Taubaté, focused on Backend and Full Stack development.',
    aboutText: 'My work combines business rules, authentication, relational and NoSQL databases, REST APIs, and React interfaces. I enjoy understanding the entire application flow and turning each step into a clear experience for users and maintainers.',
    location: '<span aria-hidden="true">⌖</span> Taubaté, São Paulo, Brazil',
    catAlt: 'Cat typing on a computer',
    stackLabel: '<span>02</span> stack',
    stackTitle: 'Tools that become products.',
    stackIntro: 'From the API route to the last interface detail.',
    backendTitle: 'Backend',
    backendText: 'Servers, business rules, authentication, and REST APIs.',
    frontendTitle: 'Frontend',
    frontendText: 'Responsive interfaces with components and fluid navigation.',
    dataTitle: 'Data',
    dataText: 'Data modeling, relationships, and persistence.',
    deliveryTitle: 'Delivery',
    deliveryText: 'Version control, integration, and application deployment.',
    projectsLabel: '<span>03</span> selected projects',
    projectsTitle: 'Real problems, complete solutions.',
    projectsIntro: 'Two projects showing architecture, interface, databases, and deployment working together.',
    toughtsTagline: 'A place to record, organize, and share thoughts.',
    toughtsText: 'A full stack application with registration, login, search, sorting, and a protected dashboard. Each person can create, edit, and delete their own thoughts with encrypted passwords and persistent sessions.',
    relationText: 'user and thoughts relationship',
    crudText: 'complete and protected flow',
    petTagline: 'A platform bringing pets and new families together.',
    petText: 'An adoption web app with authentication, profiles, pet registration, image previews, and adoption tracking. The React frontend consumes an Express API connected to MongoDB on the same domain.',
    restText: 'API integrated with the frontend',
    jwtText: 'authenticated routes and actions',
    openProject: 'Open project <span>↗</span>',
    viewCode: 'View code ↗',
    viewArchitecture: 'View architecture ↓',
    architectureLabel: '<span>04</span> behind the code',
    architectureTitle: 'Architecture you can see.',
    architectureIntro: 'I mapped each project from the browser to the database. Click to enlarge or download the editable file.',
    enlarge: 'Enlarge diagram <b>↗</b>',
    toughtsDiagram: 'Routes, authentication, CRUD, models, sessions, folder structure, and deployment.',
    petDiagram: 'React frontend, API, endpoints, adoption flow, models, and infrastructure.',
    downloadDiagram: 'Download .excalidraw <span>↓</span>',
    contactKicker: 'have an idea?',
    contactTitle: 'Let’s build something <em>together.</em>',
    contactText: 'I am open to opportunities, collaborations, and projects that help me learn and create useful solutions.',
    sendEmail: 'Send an email <span>↗</span>',
    talkLinkedin: 'Talk on LinkedIn <span>↗</span>',
    footerRole: 'Backend & Full Stack',
    footerCopy: 'Designed & developed by Luana',
    playerKicker: 'NOW PLAYING · STACK FM',
    previous: 'Previous track',
    next: 'Next track',
    previousLabel: 'PREV',
    nextLabel: 'NEXT',
    play: 'PLAY',
    pause: 'PAUSE',
    playing: 'PLAYING',
    paused: 'PAUSED',
    playTrack: 'Play track',
    pauseTrack: 'Pause track',
  },
  es: {
    title: 'Luana Nogueira — Desarrolladora Backend & Full Stack',
    languageLabel: 'Seleccionar idioma',
    skipLink: 'Saltar al contenido',
    menuLabel: 'Abrir menú',
    technologiesLabel: 'Tecnologías',
    closeImage: 'Cerrar imagen',
    homeLabel: 'Volver al inicio',
    navigationLabel: 'Navegación principal',
    profilesLabel: 'Perfiles profesionales',
    playerLabel: 'Reproductor retro interactivo',
    toughtsTechnologies: 'Tecnologías de Toughts',
    petTechnologies: 'Tecnologías de Get A Pet',
    toughtsDiagramAlt: 'Diagrama completo de la arquitectura del proyecto Toughts',
    petDiagramAlt: 'Diagrama completo de la arquitectura del proyecto Get A Pet',
    toughtsOverviewAlt: 'Vista general del diagrama de Toughts',
    petOverviewAlt: 'Vista general del diagrama de Get A Pet',
    toughtsArchitectureTitle: 'Arquitectura de Toughts',
    petArchitectureTitle: 'Arquitectura de Get A Pet',
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navArchitecture: 'Arquitectura',
    navContact: 'Hablemos',
    status: '<span class="status-dot"></span> system status: disponible',
    heroTitle: 'Hola, soy Luana.<br /><span>Convierto ideas en aplicaciones.</span>',
    heroLead: 'Desarrolladora <strong>Backend & Full Stack</strong> en formación, creando APIs REST, interfaces e integraciones de bases de datos que funcionan de principio a fin.',
    viewProjects: 'Ver mis proyectos <span aria-hidden="true">↘</span>',
    downloadResume: 'Descargar currículum <span aria-hidden="true">↓</span>',
    aboutLabel: '<span>01</span> sobre mí',
    aboutTitle: 'Tecnología con lógica, cuidado y un poco de rosa.',
    aboutIntro: 'Soy estudiante de <strong>Análisis y Desarrollo de Sistemas</strong> en Taubaté, enfocada en desarrollo Backend y Full Stack.',
    aboutText: 'Mi trabajo combina reglas de negocio, autenticación, bases de datos relacionales y NoSQL, APIs REST e interfaces en React. Me gusta comprender todo el flujo de la aplicación y convertir cada etapa en una experiencia clara para quien la usa y mantiene.',
    location: '<span aria-hidden="true">⌖</span> Taubaté, São Paulo, Brasil',
    catAlt: 'Gato escribiendo en una computadora',
    stackLabel: '<span>02</span> stack',
    stackTitle: 'Herramientas que se convierten en productos.',
    stackIntro: 'Desde la ruta de la API hasta el último detalle de la interfaz.',
    backendTitle: 'Backend',
    backendText: 'Servidores, reglas de negocio, autenticación y APIs REST.',
    frontendTitle: 'Frontend',
    frontendText: 'Interfaces responsivas con componentes y navegación fluida.',
    dataTitle: 'Datos',
    dataText: 'Modelado, relaciones y persistencia de datos.',
    deliveryTitle: 'Entrega',
    deliveryText: 'Control de versiones, integración y publicación de aplicaciones.',
    projectsLabel: '<span>03</span> proyectos seleccionados',
    projectsTitle: 'Problemas reales, soluciones completas.',
    projectsIntro: 'Dos proyectos que muestran arquitectura, interfaz, bases de datos y despliegue trabajando juntos.',
    toughtsTagline: 'Un espacio para registrar, organizar y compartir pensamientos.',
    toughtsText: 'Aplicación full stack con registro, inicio de sesión, búsqueda, ordenación y un panel protegido. Cada persona puede crear, editar y eliminar sus propios pensamientos con contraseñas cifradas y sesiones persistentes.',
    relationText: 'relación entre usuario y pensamientos',
    crudText: 'flujo completo y protegido',
    petTagline: 'Una plataforma que acerca mascotas a nuevas familias.',
    petText: 'Aplicación web de adopción con autenticación, perfiles, registro de mascotas, vista previa de imágenes y seguimiento de adopciones. El frontend en React consume una API Express conectada a MongoDB en el mismo dominio.',
    restText: 'API integrada con el frontend',
    jwtText: 'rutas y acciones autenticadas',
    openProject: 'Abrir proyecto <span>↗</span>',
    viewCode: 'Ver código ↗',
    viewArchitecture: 'Ver arquitectura ↓',
    architectureLabel: '<span>04</span> detrás del código',
    architectureTitle: 'Arquitectura que puedes ver.',
    architectureIntro: 'Mapeé cada proyecto desde el navegador hasta la base de datos. Haz clic para ampliar o descarga el archivo editable.',
    enlarge: 'Ampliar diagrama <b>↗</b>',
    toughtsDiagram: 'Rutas, autenticación, CRUD, modelos, sesiones, estructura de carpetas y despliegue.',
    petDiagram: 'Frontend React, API, endpoints, flujo de adopción, modelos e infraestructura.',
    downloadDiagram: 'Descargar .excalidraw <span>↓</span>',
    contactKicker: '¿tienes una idea?',
    contactTitle: 'Construyamos algo <em>juntos.</em>',
    contactText: 'Estoy abierta a oportunidades, colaboraciones y proyectos que me permitan aprender y crear soluciones útiles.',
    sendEmail: 'Enviar un correo <span>↗</span>',
    talkLinkedin: 'Hablar en LinkedIn <span>↗</span>',
    footerRole: 'Backend & Full Stack',
    footerCopy: 'Diseñado y desarrollado por Luana',
    playerKicker: 'REPRODUCIENDO · STACK FM',
    previous: 'Pista anterior',
    next: 'Siguiente pista',
    previousLabel: 'ANTERIOR',
    nextLabel: 'SIGUIENTE',
    play: 'PLAY',
    pause: 'PAUSA',
    playing: 'REPRODUCIENDO',
    paused: 'PAUSA',
    playTrack: 'Reproducir pista',
    pauseTrack: 'Pausar pista',
  },
};

const translationTargets = [
  ['.main-nav > a[href="#sobre"]', 'navAbout'],
  ['.main-nav > a[href="#projetos"]', 'navProjects'],
  ['.main-nav > a[href="#arquitetura"]', 'navArchitecture'],
  ['.main-nav > .nav-cta', 'navContact'],
  ['.eyebrow', 'status', 'html'],
  ['#hero-title', 'heroTitle', 'html'],
  ['.hero-lead', 'heroLead', 'html'],
  ['.hero-actions .button-primary', 'viewProjects', 'html'],
  ['.hero-actions .button-ghost', 'downloadResume', 'html'],
  ['#sobre > .section-label', 'aboutLabel', 'html'],
  ['#about-title', 'aboutTitle'],
  ['.about-copy > p:nth-of-type(1)', 'aboutIntro', 'html'],
  ['.about-copy > p:nth-of-type(2)', 'aboutText'],
  ['.location-line', 'location', 'html'],
  ['.skills .section-label', 'stackLabel', 'html'],
  ['#skills-title', 'stackTitle'],
  ['.skills .section-heading > p', 'stackIntro'],
  ['.skill-card:nth-child(1) h3', 'backendTitle'],
  ['.skill-card:nth-child(1) > p', 'backendText'],
  ['.skill-card:nth-child(2) h3', 'frontendTitle'],
  ['.skill-card:nth-child(2) > p', 'frontendText'],
  ['.skill-card:nth-child(3) h3', 'dataTitle'],
  ['.skill-card:nth-child(3) > p', 'dataText'],
  ['.skill-card:nth-child(4) h3', 'deliveryTitle'],
  ['.skill-card:nth-child(4) > p', 'deliveryText'],
  ['#projetos .section-label', 'projectsLabel', 'html'],
  ['#projects-title', 'projectsTitle'],
  ['#projetos .section-heading-row > p', 'projectsIntro'],
  ['.project-toughts .project-tagline', 'toughtsTagline'],
  ['.project-toughts .project-content > p:not(.project-tagline)', 'toughtsText'],
  ['.project-toughts .project-highlights > div:nth-child(1) span', 'relationText'],
  ['.project-toughts .project-highlights > div:nth-child(2) span', 'crudText'],
  ['.project-pet .project-tagline', 'petTagline'],
  ['.project-pet .project-content > p:not(.project-tagline)', 'petText'],
  ['.project-pet .project-highlights > div:nth-child(1) span', 'restText'],
  ['.project-pet .project-highlights > div:nth-child(2) span', 'jwtText'],
  ['.project-actions .button', 'openProject', 'html', true],
  ['.project-actions a:nth-child(2)', 'viewCode', 'text', true],
  ['.project-actions a:nth-child(3)', 'viewArchitecture', 'text', true],
  ['#arquitetura .section-label', 'architectureLabel', 'html'],
  ['#architecture-title', 'architectureTitle'],
  ['#arquitetura .section-heading-row > p', 'architectureIntro'],
  ['.diagram-preview > span', 'enlarge', 'html', true],
  ['#toughts-diagram .diagram-info > p', 'toughtsDiagram'],
  ['#pet-diagram .diagram-info > p', 'petDiagram'],
  ['.diagram-info > a', 'downloadDiagram', 'html', true],
  ['.contact-kicker', 'contactKicker'],
  ['#contact-title', 'contactTitle', 'html'],
  ['.contact-card > p', 'contactText'],
  ['.contact-actions .button-primary', 'sendEmail', 'html'],
  ['.contact-actions .button-ghost', 'talkLinkedin', 'html'],
  ['.footer-brand div > span', 'footerRole'],
  ['[data-footer-copy]', 'footerCopy'],
  ['[data-player-kicker]', 'playerKicker'],
  ['[data-skip-link]', 'skipLink'],
  ['[data-menu-label]', 'menuLabel'],
];

const getActiveLanguage = () => document.documentElement.dataset.language || 'pt';

const applyLanguage = (language, announce = true) => {
  const selectedLanguage = translations[language] ? language : 'pt';
  const copy = translations[selectedLanguage];
  document.documentElement.dataset.language = selectedLanguage;
  document.documentElement.lang = selectedLanguage === 'pt' ? 'pt-BR' : selectedLanguage;
  document.title = copy.title;

  translationTargets.forEach(([selector, key, mode = 'text', all = false]) => {
    const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];
    elements.forEach((element) => {
      if (!element) return;
      if (mode === 'html') element.innerHTML = copy[key];
      else element.textContent = copy[key];
    });
  });

  document.querySelector('.about-note img').alt = copy.catAlt;
  document.querySelector('.brand').setAttribute('aria-label', copy.homeLabel);
  document.querySelector('.main-nav').setAttribute('aria-label', copy.navigationLabel);
  document.querySelector('.hero-links').setAttribute('aria-label', copy.profilesLabel);
  document.querySelector('.hero-visual').setAttribute('aria-label', copy.playerLabel);
  document.querySelector('.project-toughts .tag-list').setAttribute('aria-label', copy.toughtsTechnologies);
  document.querySelector('.project-pet .tag-list').setAttribute('aria-label', copy.petTechnologies);
  document.querySelector('.project-toughts .browser-frame img').alt = copy.toughtsDiagramAlt;
  document.querySelector('.project-pet .browser-frame img').alt = copy.petDiagramAlt;
  document.querySelector('#toughts-diagram .diagram-preview img').alt = copy.toughtsOverviewAlt;
  document.querySelector('#pet-diagram .diagram-preview img').alt = copy.petOverviewAlt;
  document.querySelector('#toughts-diagram .diagram-preview').dataset.title = copy.toughtsArchitectureTitle;
  document.querySelector('#pet-diagram .diagram-preview').dataset.title = copy.petArchitectureTitle;
  document.querySelector('.language-switcher').setAttribute('aria-label', copy.languageLabel);
  document.querySelector('[data-technologies-carousel]').setAttribute('aria-label', copy.technologiesLabel);
  document.querySelector('[data-lightbox-close]').setAttribute('aria-label', copy.closeImage);
  document.querySelector('[data-player-action="previous"]').setAttribute('aria-label', copy.previous);
  document.querySelector('[data-player-action="next"]').setAttribute('aria-label', copy.next);
  document.querySelector('[data-player-action="previous"] small').textContent = copy.previousLabel;
  document.querySelector('[data-player-action="next"] small').textContent = copy.nextLabel;

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selectedLanguage));
  });

  try {
    localStorage.setItem('portfolio-language', selectedLanguage);
  } catch {
    // A página continua funcionando quando o armazenamento local está indisponível.
  }

  if (announce) {
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: selectedLanguage }));
  }
};

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.language;
    const url = new URL(window.location.href);
    if (language === 'pt') url.searchParams.delete('lang');
    else url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url);
    applyLanguage(language);
  });
});

let savedLanguage = 'pt';
try {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  savedLanguage = requestedLanguage || localStorage.getItem('portfolio-language') || 'pt';
} catch {
  savedLanguage = 'pt';
}
applyLanguage(savedLanguage, false);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px' });

  revealItems.forEach((item) => observer.observe(item));
}

const dialog = document.querySelector('[data-lightbox-dialog]');
const dialogImage = dialog.querySelector('[data-lightbox-image]');
const dialogTitle = dialog.querySelector('[data-lightbox-title]');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.lightbox;
    dialogImage.alt = button.dataset.title;
    dialogTitle.textContent = button.dataset.title;
    dialog.showModal();
  });
});

dialog.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener('close', () => {
  dialogImage.src = '';
});

const player = document.querySelector('[data-player]');

if (player) {
  const tracks = [
    {
      title: 'JavaScript — Interface Essentials',
      meta: 'lógica & interações · stack 01',
      duration: 214,
      skin: 'pink',
      icon: './assets/stack-icons/javascript.svg',
    },
    {
      title: 'Node.js — API After Dark',
      meta: 'servidor & regras de negócio · stack 02',
      duration: 198,
      skin: 'orange',
      icon: './assets/stack-icons/nodejs.svg',
    },
    {
      title: 'React — Component Waves',
      meta: 'interfaces & estado · stack 03',
      duration: 226,
      skin: 'berry',
      icon: './assets/stack-icons/react.svg',
    },
    {
      title: 'MongoDB — Document Dreams',
      meta: 'NoSQL & Mongoose · stack 04',
      duration: 205,
      skin: 'pink',
      icon: './assets/stack-icons/mongodb.svg',
    },
    {
      title: 'MySQL — Relational Groove',
      meta: 'dados & Sequelize · stack 05',
      duration: 232,
      skin: 'orange',
      icon: './assets/stack-icons/mysql.svg',
    },
    {
      title: 'Express — Route Runner',
      meta: 'rotas & middlewares · stack 06',
      duration: 189,
      skin: 'berry',
      icon: './assets/stack-icons/express.svg',
    },
    {
      title: 'Handlebars — Template Signals',
      meta: 'views dinâmicas · stack 07',
      duration: 201,
      skin: 'pink',
      icon: './assets/stack-icons/handlebars.svg',
    },
    {
      title: 'Git — Version Control Rewind',
      meta: 'histórico & branches · stack 08',
      duration: 184,
      skin: 'orange',
      icon: './assets/stack-icons/git.svg',
    },
    {
      title: 'Vercel — Production Frequency',
      meta: 'deploy & preview · stack 09',
      duration: 193,
      skin: 'berry',
      icon: './assets/stack-icons/vercel.svg',
    },
    {
      title: 'Docker — Container Transmission',
      meta: 'ambientes & serviços · stack 10',
      duration: 218,
      skin: 'pink',
      icon: './assets/stack-icons/docker.svg',
    },
  ];

  const trackTranslations = {
    pt: [
      ['JavaScript — Interface Essentials', 'lógica & interações · stack 01'],
      ['Node.js — API After Dark', 'servidor & regras de negócio · stack 02'],
      ['React — Component Waves', 'interfaces & estado · stack 03'],
      ['MongoDB — Document Dreams', 'NoSQL & Mongoose · stack 04'],
      ['MySQL — Relational Groove', 'dados & Sequelize · stack 05'],
      ['Express — Route Runner', 'rotas & middlewares · stack 06'],
      ['Handlebars — Template Signals', 'views dinâmicas · stack 07'],
      ['Git — Version Control Rewind', 'histórico & branches · stack 08'],
      ['Vercel — Production Frequency', 'deploy & preview · stack 09'],
      ['Docker — Container Transmission', 'ambientes & serviços · stack 10'],
    ],
    en: [
      ['JavaScript — Interface Essentials', 'logic & interactions · stack 01'],
      ['Node.js — API After Dark', 'server & business rules · stack 02'],
      ['React — Component Waves', 'interfaces & state · stack 03'],
      ['MongoDB — Document Dreams', 'NoSQL & Mongoose · stack 04'],
      ['MySQL — Relational Groove', 'data & Sequelize · stack 05'],
      ['Express — Route Runner', 'routes & middleware · stack 06'],
      ['Handlebars — Template Signals', 'dynamic views · stack 07'],
      ['Git — Version Control Rewind', 'history & branches · stack 08'],
      ['Vercel — Production Frequency', 'deployment & previews · stack 09'],
      ['Docker — Container Transmission', 'environments & services · stack 10'],
    ],
    es: [
      ['JavaScript — Interface Essentials', 'lógica e interacciones · stack 01'],
      ['Node.js — API After Dark', 'servidor y reglas de negocio · stack 02'],
      ['React — Component Waves', 'interfaces y estado · stack 03'],
      ['MongoDB — Document Dreams', 'NoSQL y Mongoose · stack 04'],
      ['MySQL — Relational Groove', 'datos y Sequelize · stack 05'],
      ['Express — Route Runner', 'rutas y middlewares · stack 06'],
      ['Handlebars — Template Signals', 'vistas dinámicas · stack 07'],
      ['Git — Version Control Rewind', 'historial y ramas · stack 08'],
      ['Vercel — Production Frequency', 'despliegue y previews · stack 09'],
      ['Docker — Container Transmission', 'entornos y servicios · stack 10'],
    ],
  };

  const title = player.querySelector('[data-track-title]');
  const meta = player.querySelector('[data-track-meta]');
  const currentTime = player.querySelector('[data-current-time]');
  const duration = player.querySelector('[data-duration]');
  const progress = player.querySelector('[data-progress]');
  const state = player.querySelector('[data-player-state]');
  const playButton = player.querySelector('[data-player-action="toggle"]');
  const playIcon = player.querySelector('[data-play-icon]');
  const playLabel = player.querySelector('[data-play-label]');
  const albumIndex = player.querySelector('[data-stack-index]');
  const stackIcon = player.querySelector('[data-stack-icon]');

  let trackIndex = 0;
  let elapsed = 0;
  let isPlaying = true;

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60).toString().padStart(2, '0');
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const playInterfaceSound = (frequency = 520) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gain.gain.setValueAtTime(0.025, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.09);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.09);
    oscillator.addEventListener('ended', () => audioContext.close());
  };

  const renderTrack = () => {
    const track = tracks[trackIndex];
    const [localizedTitle, localizedMeta] = trackTranslations[getActiveLanguage()][trackIndex];
    title.textContent = localizedTitle;
    meta.textContent = localizedMeta;
    duration.textContent = formatTime(track.duration);
    albumIndex.textContent = String(trackIndex + 1).padStart(2, '0');
    stackIcon.src = track.icon;
    player.dataset.skin = track.skin;
  };

  const renderPlayback = () => {
    const track = tracks[trackIndex];
    const copy = translations[getActiveLanguage()];
    const percent = Math.min((elapsed / track.duration) * 100, 100);
    currentTime.textContent = formatTime(elapsed);
    progress.style.width = `${percent}%`;
    player.classList.toggle('is-playing', isPlaying);
    const stackNumber = String(trackIndex + 1).padStart(2, '0');
    const stackTotal = String(tracks.length).padStart(2, '0');
    state.textContent = `${isPlaying ? copy.playing : copy.paused} / STACK ${stackNumber} / ${stackTotal}`;
    playIcon.textContent = isPlaying ? 'Ⅱ' : '▶';
    playLabel.textContent = isPlaying ? copy.pause : copy.play;
    playButton.setAttribute('aria-pressed', String(isPlaying));
    playButton.setAttribute('aria-label', isPlaying ? copy.pauseTrack : copy.playTrack);
  };

  const changeTrack = (direction) => {
    trackIndex = (trackIndex + direction + tracks.length) % tracks.length;
    elapsed = 0;
    isPlaying = true;
    renderTrack();
    renderPlayback();
    playInterfaceSound(direction > 0 ? 660 : 420);
  };

  player.querySelector('[data-player-action="previous"]').addEventListener('click', () => changeTrack(-1));
  player.querySelector('[data-player-action="next"]').addEventListener('click', () => changeTrack(1));

  window.addEventListener('portfolio-language-change', () => {
    renderTrack();
    renderPlayback();
  });

  playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    renderPlayback();
    playInterfaceSound(isPlaying ? 560 : 360);
  });

  window.setInterval(() => {
    if (!isPlaying) return;
    elapsed += 1;
    if (elapsed >= tracks[trackIndex].duration) {
      trackIndex = (trackIndex + 1) % tracks.length;
      elapsed = 0;
      renderTrack();
    }
    renderPlayback();
  }, 1000);

  renderTrack();
  renderPlayback();
}
