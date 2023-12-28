import { FaBook, FaHome, FaCss3 } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiRedux, SiFirebase, SiExpress, SiHtml5, SiNodedotjs, SiCss3, SiSass, SiReact, SiStyledcomponents, SiReactrouter } from 'react-icons/si'
import { SiMui } from 'react-icons/si'

import { BiLogoPostgresql } from 'react-icons/bi'
import { GrProjects } from 'react-icons/gr'
// import { SiTypescript } from 'react-icons/si'


const skills = [
  { id: 1, img: '../src/assets/svg/html-5.svg' },
  { id: 2, img: '../src/assets/svg/css-3_official.svg' },
  { id: 3, img: '../src/assets/svg/javascript.svg' },
  { id: 4, img: '../src/assets/svg/react.svg' },
  { id: 5, img: '../src/assets/svg/tailwindcss-icon.svg' },
  { id: 6, img: '../src/assets/svg/nextjs-icon.svg' },
  { id: 7, img: '../src/assets/svg/git-icon.svg' },
  { id: 8, img: '../src/assets/svg/github-icon.svg' },
  { id: 9, img: '../src/assets/svg/postgresql.svg' },
  { id: 10, img: '../src/assets/svg/java.svg' },
  { id: 11, img: '../src/assets/svg/sass.svg' }
]

const projects = [
  {
    id: 1,
    title: 'Disney Plus Clone',
    image: '../src/assets/images/disney-plus-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiRedux /> },
      { tecnologie: <SiFirebase /> },
      { tecnologie: <SiReactrouter /> },
    ],
    link: '',
  },
  { 
    id: 2,
    title: 'Bikes Store Webpage',
    image: '../src/assets/images/ktm-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus ',
    tecnologies: [
      { tecnologie: <SiHtml5 /> },
      { tecnologie: <FaCss3 /> },
    ],
    link: '',
  },
  {
    id: 3,
    title: 'Poke api',
    image: '../src/assets/images/pokedex.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiTailwindcss /> },
      { tecnologie: <SiReactrouter /> },
    ],
    link: '',
  },
  {
    id: 4,
    title: 'tic-tac-toe',
    image: '../src/assets/images/tic-tac-toe.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> }, 
      {tecnologie: <FaCss3 />}
    ],
    link: '',
  },
  {
    id: 5,
    title: 'Tesla Clone',
    image: '../src/assets/images/tesla-clone.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tecnologies: [
      { tecnologie: <SiReact /> },
      { tecnologie: <SiRedux /> },
      { tecnologie: <SiStyledcomponents /> },
    ],
    link: '',
  },
  {
    id: 6,
    title: 'Login page',
    image: '../src/assets/images/login-page.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiNodedotjs /> },
      { tecnologie: <BiLogoPostgresql /> },
      { tecnologie: <SiReact /> },
      { tecnologie: <SiExpress /> },
    ],
    link: '',
  },
  {
    id: 7,
    title: 'Todo App',
    image: '../src/assets/images/card-form.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiReact /> },  
      { tecnologie: <BiLogoPostgresql /> },
      { tecnologie: <SiExpress  /> },
      { tecnologie: <SiNodedotjs /> },
      { tecnologie: <SiReactrouter /> },
      { tecnologie: <SiMui /> },
    ],
    link: '',
  },
  {
    id: 8,
    title: 'Icream Web',
    image: '../src/assets/images/card-form.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiHtml5 /> },
      { tecnologie: <SiCss3 /> },
      { tecnologie: <SiJavascript  /> },
    ],
    link: '',
  },
  {
    id: 9,
    title: 'Interactive Card Form',
    image: '../src/assets/images/card-form.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus tempore nihil nemo.',
    tecnologies: [
      { tecnologie: <SiHtml5 /> },
      { tecnologie: <SiSass /> },
      { tecnologie: <SiJavascript /> },
    ],
    link: '',
  },
]

const items = [
  {
    id: 1,
    icon: <FaHome size={13} />,
    item: 'Home',
    to: '/',
  },
  {
    id: 2,
    icon: <FaBook size={13} />,
    item: 'About',
    to: '/about',
  },
  {
    id: 3,
    icon: <GrProjects size={13} />,
    item: 'Projects',
    to: '/projects',
  },
]

export { 
  projects, 
  items, 
  skills 
}
