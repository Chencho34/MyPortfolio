import { Fade } from 'react-awesome-reveal'
import { Cards } from '../../containers'

export default function Projects () {
  return (
    <main className='h-auto lg:h-screen w-full bg-light dark:bg-dark transition-colors duration-500'>
      <article className='w-[90%] h-full mx-auto lg:flex'>
        <section className='lg:w-[35%] lg:p-0 pt-28 pb-12 h-full flex items-center justify-center'>
          <Fade direction='left' duration={400} triggerOnce>
            <p className='flex flex-col  text-6xl/tight font-bold text-[#242424] dark:text-gray-300 tracking-widest '>Welcome <span>To My</span> Projects</p>
          </Fade>
        </section>
        <section className='lg:w-[65%]  h-full lg:h-auto overflow-hidden overflow-y-auto no-scrollbar'>
          <article className='grid  2xl:grid-cols-2 xl:grid-cols-2  place-items-center lg:pt-32 lg:pb-16 py-4 gap-8'>
            <Cards />
          </article>
        </section>
      </article>  
    </main>
  )
}
