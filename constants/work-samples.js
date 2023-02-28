import crwn from '/public/images/works/crwn.png'

import strapiBlog from '/public/images/works/strapiBlog.png'
import blog from '/public/images/works/jereer.png'
import quiz from '/public/images/works/quiz.png'
import tesla from '/public/images/works/tesla.png'
import cloudflare from '/public/images/works/cloudflare.png'
import kanban from '/public/images/works/kanban.png'
import recipes from '/public/images/works/recipes.png'
import space from '/public/images/works/space.png'
import kittens from '/public/images/works/kittens.png'
import boilerplate from '/public/images/works/boilerplate.png'
import nextupLogo from '/public/images/works/nextup-logo.png'
import lectura from '/public/images/works/lectura.png'
import urban from '/public/images/works/urban2.png'
import next from '../public/images/works/next.png'
import myTindyLogo from '/public/images/works/mytindy.png'

export const personalProjects = [
  {
    id: 'kanban',
    title: 'Kanban Board',
    thumbnail: kanban,
    date: 'Feb-2022',
    description:
      'Kanban is an interactive board and an authenticated personal board of yours so no none will stalk your progress-it&apos;s not like anyone cares really-, but you&apos;ll have your own account and you can sign out any time you want.in which you can:',
    list: [
      'combine a group of tasks together',
      'drag and drop them',
      'add new tasks and modify them, and remove them',
      'change their priority order and color',
      'dash them if you&apos;ve successfull finish'
    ],
    stack: ['Angular, Firebase, Angular-material'],
    repo: 'https://github.com/Jood80/kanban-board',
    website: 'https://kanban-board-c40c0.web.app/'
  },
  {
    id: 'tweety',
    title: 'Tweety',
    thumbnail: blog,
    date: 'Jan-2022',
    description:
      'With Tweety you can create an account to tweet your thoughts on public and see others&apos; tweets as well. If you forgot your password, you can reset it and an email will be sent back to your account to set a new password.',

    stack: [
      'React.js, Chakra UI, Context API',
      'Node.js, Sequelize, PostgreSQL, Firebase for Auth/Emailing'
    ],
    repo: 'https://github.com/Jood80/bloggy/tree/dev',
    displayRepo: 'https://github.com/Jood80/tweety',
    video: {
      poster: '/images/works/tweety-preview.png',
      src: '/videos/tweety.mp4'
    }
  },
  {
    id: 'blog',
    title: 'Blog',
    thumbnail: strapiBlog,
    date: 'AUG-2021',
    description:
      'The site meant to display blogs for you that&apos;s been added via Strapi CMS beforehand, you can filter them based on their category or all in one place.',
    stack: ['React, Strapi, GraphQL, Docker.'],
    repo: 'https://github.com/Jood80/strapi-blog'
  },
  {
    id: 'tesla-calc-range',
    title: 'Tesla Calculator Range',
    thumbnail: tesla,
    date: 'JUL-2022',
    description:
      'For Tesla users or you Ms/Mr reader who may/may not want to buy one in the future. Here is a calculator that can check Tesla’s battery range for you, based on number of factors: temperature, the car&apos;s speed and its wheels size.',
    stack: ['React, Redux'],
    repo: 'https://github.com/Jood80/tesla-range-calculator',
    website: 'https://tesla-range-calc.surge.sh/'
  },
  {
    id: 'clothing',
    title: 'Clothing App',
    thumbnail: crwn,
    date: 'AUG-2020',
    description: 'A store that is provided with some features, such as:',
    list: [
      'Signup, Signin using email & password.',
      'Preview each collection products. ',
      'Select your products to be added to the cart.',
      'Upcoming feature: add Stripe as payment method.'
    ],
    stack: ['React, Firebase.'],
    repo: 'https://github.com/Jood80/crwn-clothing',
    displayImage: '/images/works/ecm.gif'
  },
  {
    id: 'react-quiz',
    title: 'Quiz',
    thumbnail: quiz,
    date: 'JAN-2020',
    description:
      'You&apos;ll be tested with multiple-choice questions in the computer science field, the difficulty level of each question will be randomized.',
    stack: ['React, Typescript'],
    repo: 'https://github.com/Jood80/Quiz-app',
    website: 'https://comp-quiz.netlify.app/'
  },
  {
    id: 'unsplash-serverless',
    title: 'Picture Viewer ',
    thumbnail: cloudflare,
    description:
      'Serverless cloudflare workers has been used to fetch the users some pictures based on their search input.',
    stack: ['React, Express, cloudflare.'],
    repo: 'https://github.com/Jood80/cloudflare-serverless/',
    websites: 'https://2be32bf9.cloudflare-serverless-6qh.pages.dev/'
  },
  {
    id: 'kittens',
    title: 'Kittens Rolodex',
    thumbnail: kittens,
    date: 'AUG-2020',
    description:
      'One of the early stage learning projects, the site can display you bunch of weird kittens -who seem to be innocent- as animated cards.',
    stack: ['React, Axios'],
    repo: 'https://github.com/Jood80/kittens-rolodex',
    website: 'https://kittens-rolodex.vercel.app/',
    displayWebsite: 'kittens-rolodex.vercel.app/'
  },
  {
    id: 'node-graphql-boilerplate',
    title: 'Node-GQL Boilerplate',
    date: 'MAY-2021',
    thumbnail: boilerplate,
    stack: ['Node.js, GraphQl-Yoga, TS, TypeORM, Argon2, Docker'],
    repo: 'https://github.com/Jood80/node-ts-graphQl-boilerplate',
    displayRepo: 'node-ts-graphQl-boilerplate'
  },
  { id: 'recipes', title: 'Food recipes', thumbnail: recipes },
  { id: 'spaceX', title: 'SpaceX Launch', thumbnail: space }
]

export const collaborations = [
  {
    href: 'https://github.com/NextUp-comedy/documentation',
    thumbnail: nextupLogo,
    title: 'Nextup Comedy',
    description:
      'Automate all the financial operations. Manage all existing users and add new users'
  },
  {
    href: 'https://github.com/Survival-DEV/blog-backend',
    thumbnail: lectura,
    title: 'Lectura',
    description: 'a blog backend '
  },
  {
    href: 'https://github.com/GSG-K3/urban-calendar/',
    thumbnail: urban,
    title: 'Urban Calender',
    description:
      'build a calendar app where we can establish safe and easy contact with customers.  '
  },
  {
    href: 'https://github.com/GSG-K3/next-js-workshop',
    thumbnail: next,
    title: 'Next.js Workshop',
    description: 'What is Next.js and Why we use it'
  }
]
