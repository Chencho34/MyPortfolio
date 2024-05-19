import { FaGithub } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'

export default function Card({ title, image, description, tecnologies, github, demo }) {
  return (
    <section className='w-[340px] bg-slate-50 dark:bg-[#191919] hover:shadow-lg shadow-md dark:hover:shadow-neutral-950  rounded-md transition-all duration-500 overflow-hidden '>
      <figure className='h-48 rounded-b-xl overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='object-fill hover:scale-110 duration-500 w-full h-full overflow-hidden'
        />
      </figure>
      <section className='px-4 py-4 flex flex-col gap-4'>
        <article className='flex flex-col gap-2 h-28'>
          <h3 className='text-lg font-semibold text-secondary'>{title}</h3>
          <p className='text-sm font-medium text-primary'>{description}</p>
        </article>
        <article className='flex flex-row px-1  gap-6 text-xl text-[#242424] dark:text-gray-300'>
          {tecnologies?.map(({ tecnologie }, index) => (
            <span key={index}>{tecnologie}</span>
          ))}
        </article>
        <article className='flex gap-3'>
          <a href={demo}>
            <button className='flex items-center justify-evenly bg-[#242424] dark:bg-gray-300 dark:text-gray-950  py-1 rounded-md text-white hover:text-gray-300 dark:hover:text-gray-800 font-semibold text-sm w-20 duration-500 transition-colors'>
              Demo <MdNavigateNext />
            </button>
          </a>
          <a href={github} target='_blank' className='flex items-center justify-evenly border border-[#242424] dark:border-gray-300  dark:text-gray-300  py-1 rounded-md text-[#242424] hover:text-gray-300 dark:hover:text-gray-700 font-semibold text-sm w-20 duration-500 transition-colors' rel='noreferrer'>
            Git <FaGithub />
          </a>
        </article>
      </section>
    </section>
  )
}
