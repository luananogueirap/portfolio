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

document.querySelector('[data-year]').textContent = new Date().getFullYear();

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
  ];

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
    title.textContent = track.title;
    meta.textContent = track.meta;
    duration.textContent = formatTime(track.duration);
    albumIndex.textContent = String(trackIndex + 1).padStart(2, '0');
    stackIcon.src = track.icon;
    player.dataset.skin = track.skin;
  };

  const renderPlayback = () => {
    const track = tracks[trackIndex];
    const percent = Math.min((elapsed / track.duration) * 100, 100);
    currentTime.textContent = formatTime(elapsed);
    progress.style.width = `${percent}%`;
    player.classList.toggle('is-playing', isPlaying);
    const stackNumber = String(trackIndex + 1).padStart(2, '0');
    const stackTotal = String(tracks.length).padStart(2, '0');
    state.textContent = `${isPlaying ? 'PLAYING' : 'PAUSED'} / STACK ${stackNumber} OF ${stackTotal}`;
    playIcon.textContent = isPlaying ? 'Ⅱ' : '▶';
    playLabel.textContent = isPlaying ? 'PAUSE' : 'PLAY';
    playButton.setAttribute('aria-pressed', String(isPlaying));
    playButton.setAttribute('aria-label', isPlaying ? 'Pausar faixa' : 'Reproduzir faixa');
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
