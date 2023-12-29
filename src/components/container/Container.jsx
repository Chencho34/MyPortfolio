export default function Container({ children }) {
  return <section className='w-4/5 h-full mx-auto flex items-center justify-between pt-28 pb-16'>
    {children}
  </section>
}
