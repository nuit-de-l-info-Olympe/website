

const navConfig = [
  {
    title: 'Lancer une production',
    path: 'PATH_DASHBOARD.requests.root',
  },
  {
    title: 'Forfaits',
    path: 'PUBLIC_PAGE.needHelp.offers',
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
            path: 'PUBLIC_PAGE.searchBrand',
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
            path: 'PUBLIC_PAGE.searchFactory',
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
            path: 'PUBLIC_PAGE.searchFreelance',
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
    path: 'PATH_AFTER_LOGIN',
  },
  {
    title: 'Créer un compte',
    classBtn: 'overlined',
    hideAuth: true,
    path: 'PATH_AUTH.register',
  },
  {
    title: 'Me connecter',
    classBtn: 'outlined',
    hideAuth: true,
    path: 'PATH_AUTH.login',
  },
];

export default navConfig;
