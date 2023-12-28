import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <section className='lg:h-screen h-screen w-full bg-bg-hom bg-slate-100 dark:bg-[#121212] transition-all duration-500 bg-cover  bg-fixed bg-no-repeat'>
      <article className='w-4/5 mx-auto  my-auto h-full lg:flex items-center justify-between '>
        <article className='lg:pt-0 pt-28 flex flex-col gap-4'>
          <h1 className='text-6xl font-bold tracking-wider leading-tight dark:text-gray-300'>
            Hello <br /> im <span className='text-[#2196f3]'>Armando</span>
          </h1>
          <h2 className='text-3xl text-[#2196f3] font-semibold'>Front-End Web Developer</h2>
          <p className='text-gray-500 text-lg font-medium max-w-[700px]'>
          ¡Hola! Soy Armando, un desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. 
          Dispuesto a explorar continuamente nuevas tecnologías para mejorar mis habilidades.
          </p>
          <ul className='flex gap-5'>
            <li><a href='https://github.com/Chencho34' target='BLANK'><FaGithub className='dark:fill-gray-300' size={22}/></a></li>
            <li><a href='https://www.linkedin.com/in/armando-cr/' target='BLANK'><FaLinkedin className='dark:fill-gray-300' size={22}/></a></li>
          </ul>
          <button className='bg-[#161616] dark:bg-gray-300 dark:text-[#161616] rounded-sm w-28 text-white font-semibold text-sm py-1'>Resume</button>
        </article>
        {/* <picture className='w-1/4  h-2/6 bg-cyan-400 overflow-hidden flex items-center rounded'>
          <img src={image} alt='me' className='' />
        </picture> */}
      </article>
    </section>
  )
}
