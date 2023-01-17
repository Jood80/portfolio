import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoLogoStackoverflow
} from 'react-icons/io5'

import crwn from '/public/images/works/crwn.png'
import strapiBlog from '/public/images/works/strapiBlog.png'
import blog from '/public/images/works/jereer.png'
import quiz from '/public/images/works/quiz.png'
import tesla from '/public/images/works/tesla.png'
import cloudflare from '/public/images/works/cloudflare.png'
import kanban from '/public/images/works/kanban.png'
import recipes from '/public/images/works/recipes.png'
import space from '/public/images/works/spacex.png'
import kittens from '/public/images/works/kittens.png'
import boilerplate from '/public/images/works/boilerplate.png'
import nextupLogo from '/public/images/works/nextup-logo.png'
import lectura from '/public/images/works/lectura.png'
import urban from '/public/images/works/urban2.png'
import next from '/public/images/works/next.png'

export const socialMedia = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nujoodKadhem',
    icon: IoLogoLinkedin
  },
  {
    name: 'Github',
    link: 'https://github.com/Jood80',
    icon: IoLogoGithub
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/user/Nujood#5153',
    icon: IoLogoDiscord
  },
  {
    name: 'StackOverflow',
    link: 'https://stackoverflow.com/users/15107393/jood80?tab=profile',
    icon: IoLogoStackoverflow
  },
  {
    name: 'Google',
    link: 'mailto:shawar.nujood@gmail.com',
    icon: IoLogoGoogle
  }
]

export const timeline = [
  { id: 1, year: 1995, action: 'Born in Hebron - Palestine. Moved to Jordan' },
  {
    id: 2,
    year: 2016,
    action: 'Joined Erasmus Exchange program, Middle East Technical university'
  },
  {
    id: 3,
    year: 2018,
    action:
      'Graduated with a bachelor&apos;s degree in Mechanical Engineering,Palestine Polytechnic university'
  },
  {
    id: 4,
    year: 2020,
    action: 'Joined CodeAcademy Bootcamp, GazaSkyGeeks (GSG)      '
  },
  {
    id: 5,
    year: 2020,
    action:
      'Frontend Developer at Zaat.dev || Mentor at Fundamental web course, (GSG)'
  },
  {
    id: 6,
    year: 2021,
    action: 'Backend Developer, Kiitos technologies || React Mentor, GSG'
  },
  { id: 7, year: 2022, action: 'FullStack Developer at Google for Startups' }
]

export const personalProjects = [
  { id: 'blog', title: 'Strapi blog', thumbnail: strapiBlog },
  { id: 'ecommerce', title: 'ecommerce', thumbnail: crwn },
  { id: 'jereer', title: 'Jereer', thumbnail: blog },
  {
    id: 'urgency',
    title: 'Urgency',
    thumbnail: blog
  },
  {
    id: 'react-quiz',
    title: 'Quiz',
    thumbnail: quiz
  },
  {
    id: 'tesla-calc-range',
    title: 'Tesla Calc Range',
    thumbnail: tesla
  },
  {
    id: 'unsplash-serverless',
    title: 'Serverless pic',
    thumbnail: cloudflare
  },
  { id: 'kanban', title: 'Kanban board', thumbnail: kanban },
  { id: 'kittens', title: 'Kittens Rolodex', thumbnail: kittens },
  { id: 'recipes', title: 'Food recipes', thumbnail: recipes },
  { id: 'spaceX', title: 'SpaceX Launch', thumbnail: space },
  {
    id: 'node-graphql-boilerplate',
    title: 'Node GraphQL',
    thumbnail: boilerplate
  }
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
    description:
      'a blog backend   Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque cumque fugiat non similique quas praesentium eos dolores, nobis fugit molliti'
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

// {
//   href: 'https://github.com/MyTindy/mytindy-app',
//   thumbnail: myTindyLogo,
//   title: 'MyTindy'
// },
