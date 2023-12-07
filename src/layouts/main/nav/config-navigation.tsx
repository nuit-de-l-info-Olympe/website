import SvgColor from '../../../components/svg-color';
// config
import {PATH_AFTER_LOGIN} from '../../../config-global';
import {PATH_AUTH, PATH_DASHBOARD, PUBLIC_PAGE} from '../../../routes/paths';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  dashboard: icon('ic_dashboard'),
  message: icon('ic_chat'),
  factory: icon('ic_factory'),
  brand: icon('ic_brands'),
  news: icon('ic_news_feed'),
  searchBrand: icon('ic_search_brand'),
  searchFactory: icon('ic_search_factory'),
  searchFreelance: icon('ic_search_freelance'),
};

const navConfig = [
  {
    title: 'Lancer une production',
    path: PATH_DASHBOARD.requests.root,
  },
  {
    title: 'Forfaits',
    path: PUBLIC_PAGE.needHelp.offers,
  },
  {
    title: 'Recherche ...',
    path: '/pages',
    children: [
      {
        subheader: 'Les marques',
        hideResponsive: true,
        items: [
          {
            title: 'Les marques',
            icon: ICONS.searchBrand,
            path: PUBLIC_PAGE.searchBrand,
            img: '/assets/illustrations/bigmenu/brand.jpg',
            alt: 'Les marques',
            span: 4,
          },
        ],
      },
      {
        subheader: 'Les usines',
        hideResponsive: true,
        items: [
          {
            title: 'Les usines',
            icon: ICONS.searchFactory,
            path: PUBLIC_PAGE.searchFactory,
            img: '/assets/illustrations/bigmenu/factory.jpg',
            alt: 'Les usines',
            span: 4,
          },
        ],
      },
      {
        subheader: 'Les freelances',
        hideResponsive: true,
        items: [
          {
            title: 'Les freelances',
            icon: ICONS.searchFreelance,
            path: PUBLIC_PAGE.searchFreelance,
            img: '/assets/illustrations/bigmenu/freelance.jpg',
            alt: 'Les freelances',
            span: 4,
          },
        ],
      },
    ],
  },
  {
    title: 'Espace PRO',
    classBtn: 'overlined',
    showAuth: true,
    path: PATH_AFTER_LOGIN,
  },
  {
    title: 'Créer un compte',
    classBtn: 'overlined',
    hideAuth: true,
    path: PATH_AUTH.register,
  },
  {
    title: 'Me connecter',
    classBtn: 'outlined',
    hideAuth: true,
    path: PATH_AUTH.login,
  },
];

export default navConfig;
