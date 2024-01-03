import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container, Wrapper } from '../../components'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <article className='flex flex-col gap-4'>
          <h1 className='text-6xl font-bold tracking-wider leading-tight dark:text-gray-300'>
            Hello <br /> im <span className='text-secondary'>Armando</span>
          </h1>
          <h2 className='text-3xl text-secondary font-semibold'>Front-End Web Developer</h2>
          <p className='text-lg text-primary font-medium max-w-[700px]'>
          ¡Hola! Soy Armando, un desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. 
          Dispuesto a explorar continuamente nuevas tecnologías para mejorar mis habilidades.
          </p>
          <ul className='flex gap-6'>
            <li><a href='https://github.com/Chencho34' target='BLANK'><FaGithub className='dark:fill-gray-300' size={22}/></a></li>
            <li><a href='https://www.linkedin.com/in/armando-cr/' target='BLANK'><FaLinkedin className='dark:fill-gray-300' size={22}/></a></li>
          </ul>
          <button className='bg-[#161616] dark:bg-gray-300 dark:text-[#161616] rounded-sm w-28 text-white font-semibold text-sm py-1'>Resume</button>
        </article>
      </Container>
    </Wrapper>
  )
}
