import LandingPage from './pages/LandingPage.svelte';
import AboutPage from './pages/AboutPage.svelte';

export const trophyRoutes = [
  {
    name: '/trophy',
    component: LandingPage,
  },
  {
    name: '/trophy/about',
    component: AboutPage,
  },
];
