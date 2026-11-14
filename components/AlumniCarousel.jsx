'use client';

// Real logo images live in /public/assets/logos/
// Each entry: the image file + the company name. Optional `cls` adds an extra CSS class.
const ALUMNI = [
  { src: '/assets/logos/ametalis.svg', name: 'Ametalis' },
  { src: '/assets/logos/bezala.svg', name: 'Bezala' },
  { src: '/assets/logos/bonbon.png', name: 'BonBon' },
  { src: '/assets/logos/futucast.png', name: 'Futucast' },
  { src: '/assets/logos/hashlist.svg', name: 'Hashlist' },
  { src: '/assets/logos/Mimmitsijoittaa.png', name: 'Mimmit sijoittaa', cls: 'home-alumni__logo--small' },
  { src: '/assets/logos/munchi.png', name: 'Munchi' },
  { src: '/assets/logos/prifina.png', name: 'Prifina' },
  { src: '/assets/logos/reveel.webp', name: 'Reveel' },
  { src: '/assets/logos/validio.svg', name: 'Validio' },
];

export default function AlumniCarousel() {
  // Rendered twice back-to-back so the scroll loops seamlessly.
  const loop = [...ALUMNI, ...ALUMNI];

  return (
    <section className="home-alumni">
      <p className="small-caps dim home-alumni__heading">FOUNDED BY HANKENES ALUMNI</p>
      <div className="home-alumni__track-wrap">
        <div className="home-alumni__track">
          {loop.map((logo, i) => (
            <img className={`home-alumni__logo-img ${logo.cls || ''}`} src={logo.src} alt={logo.name} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}