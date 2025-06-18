import {
  GiChurch,
  GiColumnVase,
  GiGreekTemple,
  GiImperialCrown,
  GiLighthouse,
  GiQaitbayCitadel,
  GiSpookyHouse,
  GiSuspensionBridge,
} from 'react-icons/gi';

export const navbarMenu = [
  {
    text: 'Acasă',
    link: '/',
  },
  {
    text: 'Obiective',
    link: '/obiective-turistice',
  },
  {
    text: 'Trasee',
    link: '/trasee',
  },
  {
    text: 'Proiecte',
    link: '/proiecte',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Despre',
    link: '/despre',
  },
  {
    text: 'Contact',
    link: '/contact',
  },
];

export const categoryInfoHome = [
  {
    text: 'Octogonul confesional',
    icon: <GiChurch />,
    link: '/octogonul-confesional',
    colSpan: 4,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Regalitate',
    icon: <GiImperialCrown />,
    link: '/regalitate',
    colSpan: 2,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Muzee',
    icon: <GiGreekTemple />,
    link: '/muzee',
    colSpan: 3,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Cetăți',
    icon: <GiQaitbayCitadel />,
    link: '/cetati',
    colSpan: 4,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Statui',
    icon: '/images/statui.svg',
    link: '/statui',
    colSpan: 2,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Faruri',
    icon: <GiLighthouse />,
    link: '/faruri',
    colSpan: 3,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Testamentul otoman',
    icon: '/images/otoman.svg',
    link: '/testamentul-otoman',
    colSpan: 3,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Mostenirea grecilor',
    icon: <GiColumnVase />,
    link: '/mostenirea-grecilor',
    colSpan: 4,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Hoteluri antice',
    icon: <GiSpookyHouse />,
    link: '/hoteluri-antice',
    colSpan: 2,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Amintirile armânilor',
    icon: '/images/carliban.svg',
    link: '/amintirile-armanilor',
    colSpan: 3,
    bgImage: '/images/hero.png',
  },
  {
    text: 'Moștenirea lui Anghel Saligny',
    icon: <GiSuspensionBridge />,
    link: '/mostenirea-anghel-saligny',
    colSpan: 3,
    bgImage: '/images/hero.png',
  },
];

export const partnersData = [
  {
    name: 'Test 1',
    image: '/images/partners/not-found.svg',
    link: '',
  },
  {
    name: 'Test 2',
    image: '/images/partners/not-found.svg',
    link: '',
  },
  {
    name: 'Test 3',
    image: '/images/partners/not-found.svg',
    link: '',
  },
  {
    name: 'Test 4',
    image: '/images/partners/not-found.svg',
    link: '',
  },
  {
    name: 'Test 5',
    image: '/images/partners/not-found.svg',
    link: '',
  },
];
