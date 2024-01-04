import { FaBook, FaHome, FaCss3 } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiRedux, SiFirebase, SiExpress, SiHtml5, SiNodedotjs, SiCss3, SiSass, SiReact, SiStyledcomponents, SiReactrouter } from 'react-icons/si'
import { SiMui } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { GrProjects } from 'react-icons/gr'
// import { SiTypescript } from 'react-icons/si'

const skills = [
  { id: 1, img: 'svg/html-5.svg' },
  { id: 2, img: 'svg/css-3_official.svg' },
  { id: 3, img: 'svg/javascript.svg' },
  { id: 4, img: 'svg/react.svg' },
  { id: 5, img: 'svg/tailwindcss-icon.svg' },
  { id: 6, img: 'svg/nextjs-icon.svg' },
  { id: 7, img: 'svg/git-icon.svg' },
  { id: 8, img: 'svg/github-icon.svg' },
  { id: 9, img: 'svg/postgresql.svg' },
  { id: 10, img: 'svg/java.svg' },
  { id: 11, img: 'svg/sass.svg' }
]

const projects = [
  {
    id: 1,
    title: 'Disney Plus Clone App',
    image: 'images/disney-plus-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiRedux /> },
      { tecnologie: <SiFirebase /> },
      { tecnologie: <SiReactrouter /> },
    ],
    github: 'https://github.com/Chencho34/disney-plus-clone-app',
    demo: ''
  },
  { 
    id: 2,
    title: 'KTM Web Page',
    image: 'images/ktm-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus ',
    tecnologies: [
      { tecnologie: <SiHtml5 /> },
      { tecnologie: <FaCss3 /> },
    ],
    github: 'https://github.com/Chencho34/ktm-web-page',
    demo: ''
  },
  {
    id: 3,
    title: 'Pokedex | PokeApi',
    image: 'images/pokedex.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiTailwindcss /> },
      { tecnologie: <SiReactrouter /> },
    ],
    github: 'https://github.com/Chencho34/pokedex-with-poke-api',
    demo: ''
  },
  {
    id: 4,
    title: 'tic-tac-toe',
    image: 'images/tic-tac-toe.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> }, 
      {tecnologie: <FaCss3 />}
    ],
    github: 'https://github.com/Chencho34/tic-tac-toe',
    demo: ''
  },
  {
    id: 5,
    title: 'Tesla Clone',
    image: 'images/tesla-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiRedux /> },
      { tecnologie: <SiStyledcomponents /> },
    ],
    github: 'https://github.com/Chencho34/tesla-clon',
    demo: ''
  },
  {
    id: 6,
    title: 'Login Form | Firebase',
    image: 'images/login-page.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiFirebase /> },
      { tecnologie: <FaCss3 /> },
    ],
    github: 'https://github.com/Chencho34/login-form-firebase',
    demo: ''
  },
  {
    id: 7,
    title: 'Todo App',
    image: 'images/todo-app.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },  
      { tecnologie: <BiLogoPostgresql /> },
      { tecnologie: <SiExpress  /> },
      { tecnologie: <SiNodedotjs /> },
      { tecnologie: <SiReactrouter /> },
      { tecnologie: <SiMui /> },
    ],
    github: 'https://github.com/Chencho34/todo-app-pern-stack',
    demo: ''
  },
  {
    id: 8,
    title: 'Landing Page',
    image: 'images/landing-pg.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },  
      { tecnologie: <SiCss3 /> },
    ],
    github: 'https://github.com/Chencho34/mechanical-website',
    demo: ''
  },
  {
    id: 9,
    title: 'Interactive Card Form',
    image: 'images/card-form.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiHtml5 /> },
      { tecnologie: <SiSass /> },
      { tecnologie: <SiJavascript /> },
    ],
    github: 'https://github.com/Chencho34/interactive-card-form',
    demo: ''
  },
]

const items = [
  {
    id: 1,
    icon: <FaHome size={13} />,
    item: 'Home',
    to: 'MyPortfolio/',
  },
  {
    id: 2,
    icon: <FaBook size={13} />,
    item: 'About',
    to: 'MyPortfolio/about',
  },
  {
    id: 3,
    icon: <GrProjects size={13} />,
    item: 'Projects',
    to: 'MyPortfolio/projects',
  },
]

export { 
  projects, 
  items, 
  skills 
}
