import teamImg01 from '../assets/img/img-team-01.jpg';
import teamImg02 from '../assets/img/img-team-02.jpg';
import teamImg03 from '../assets/img/img-team-03.jpg';
import teamImg04 from '../assets/img/img-team-04.jpg';

export const configFile = {
  theme: {
    colors: {},
  },
  translations: {
    'fr-FR': {
      messages: {
        header: {
          contactUs: 'Contactez-nous',
          phoneNumber: '0800 14 245',
          openingDays: 'LUN-VEN',
          openingHours: '9:00-17:00',
          calculator: 'Calc',
          faq: 'FAQ',
          contact: 'Contact'
        },

        aboutHero: {
          title: 'Qui sommes nous?',
          text: 'Découvrez sur cette page l\'historie et la mission de Qlikbeton.be, et faites connaissance avec toute l\'équipe!'
        },

        projectHero: {
          title: 'Fondation en béton',
          text: 'Découvrez sur cette page l\'historie et la mission de Qlikbeton.be, et faites connaissance avec toute l\'équipe!'
        }
      },
      dateTime: {},
    },
    'en-US': {
      messages: {
        header: {
          contactUs: 'Contact US',
          phoneNumber: '0800 14 245',
          openingDays: 'Mon-Fri',
          openingHours: '9:00-17:00',
          calculator: 'Calc',
          faq: 'FAQ',
          contact: 'Contact'
        },

        aboutHero: {
          title: 'Who we are?',
          text: 'Discover on this page the history and the mission of Qlikbeton.be, and get to know the whole team!'
        },

        projectHero: {
          title: 'Concrete Foundation',
          text: 'Découvrez sur cette page l\'historie et la mission de Qlikbeton.be, et faites connaissance avec toute l\'équipe!'
        }
      },
      dateTime: {},
    },
  },
  defaultLocale: 'en-US',
  currency: 'USD',
};

export const teamMembers = [
  {
    name: 'Jann',
    title: 'Fondateur et administrateur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: teamImg01
  },
  {
    name: 'Eric',
    title: 'Fondateur et administrateur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: teamImg02
  },
  {
    name: 'Jean-Marie',
    title: 'Fondateur et administrateur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: teamImg03
  },
  {
    name: 'Michel et Jessica',
    title: 'Fondateur et administrateur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: teamImg04
  }
];