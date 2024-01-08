import { Fade } from 'react-awesome-reveal'
import { Container, Wrapper } from '../../components'
import { skills } from '../../constants'

export default function About() {
  return (
    <Wrapper>
      <Container>
        <section className='flex flex-col justify-center w-full gap-8'>
          <Fade direction='left' duration={300}>
            <h1 className='text-6xl/tight font-bold text-[#242424] dark:text-gray-300  mb-10'>Welcome</h1>
          </Fade>
          <section className='flex flex-col gap-20'>
            <article className='lg:flex gap-9 items-start justify-between'>
              <Fade direction='left' duration={400}>
                <article className='w-40'>
                  <div className='w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg' />
                  <h1 className='text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4'>About</h1>
                </article>
              </Fade>
              <Fade duration={400} direction='down'>
                <p className='text-sm font-medium text-primary text-balance lg:w-[500px]'>Hola! Soy Armando, un universitario de 21 años apasionado del desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. El desarrollo web me ha permitido adquirir un amplio conocimiento en diferentes áreas, desde el diseño frontend hasta la implementación backend.</p>
              </Fade>
            </article>
            <article className='lg:flex items-start gap-9 justify-between'>
              <Fade direction='left' duration={400} delay={400}>
                <article className='w-40'>
                  <div className='w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg' />
                  <h1 className='text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4'>Skills</h1>
                </article>
              </Fade>
              <Fade duration={400} direction='down' delay={400}>
                <figure className='flex gap-9 flex-wrap lg:w-[500px]'>
                 {
                  skills.map(({id, img}) => (
                    <div key={id} className='p-2 dark:bg-[#242424] rounded-xl'>
                      <img className='h-6 w-6 hover:scale-150 duration-150 hover:rotate-3' src={img} key={id}/>
                    </div>
                  ))
                 }
                </figure>
              </Fade>
            </article>
          </section>
        </section>
      </Container>
    </Wrapper>
  )
}
