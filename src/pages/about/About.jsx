import { skills } from '../../constants'

export default function About() {
  return (
    <section className='h-screen w-full bg-slate-100 dark:bg-[#121212]  transition-all duration-500 bg-cover bg-fixed bg-no-repeat'>
      <article className='w-[70%] h-full mx-auto'>
        <section className='flex flex-col justify-center pt-28 w-full gap-8'>
          <h1 className='text-6xl/tight font-bold text-[#242424] dark:text-gray-300  mb-10'>welcome</h1>
          <section className='flex flex-col gap-20'>
            <article className='lg:flex gap-9 items-start justify-between'>
              <article className='w-40'>
                <div className='w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg' />
                <h1 className='text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4'>About</h1>
              </article>
              <p className='text-sm font-medium text-gray-500 text-balance lg:w-[500px]'>Hola! Soy Armando, un universitario de 21 años apasionado del desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. El desarrollo web me ha permitido adquirir un amplio conocimiento en diferentes áreas, desde el diseño frontend hasta la implementación backend.</p>
            </article>
            <article className='lg:flex items-start gap-9 justify-between'>
              <article className='w-40'>
                <div className='w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg' />
                <h1 className='text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4'>Skills</h1>
              </article>
              <figure className='flex gap-9 flex-wrap lg:w-[500px]'>
               {
                skills.map(({id, img}) => (
                  <div key={id} className='p-2 dark:bg-[#242424] rounded-xl'>
                    <img className='h-6 w-6 hover:scale-150 duration-150 hover:rotate-3' src={img} key={id}/>
                  </div>
                ))
               }
              </figure>
            </article>
          </section>
        </section>
      </article>
    </section>
  )
}
