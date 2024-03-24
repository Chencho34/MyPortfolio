export default function Wrapper ({ children }) {
  return <main className='h-auto md:h-screen w-full bg-light dark:bg-dark transition-colors duration-500'>
    {children}
  </main>
}