import { Link } from 'react-router-dom'
import { items } from '../../constants'
import { useEffect, useState } from 'react'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import ChangeTheme from './changeTheme/ChangeTheme'

export default function Nav() {
  const [itemActive, setItemActive] = useState(0)
  const handleClick = (id) => setItemActive(id)

  useEffect(() => {
    setItemActive(1)
  }, [])


  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  return (
    <>
      <nav className='h-16 w-full fixed top-0 bg-slate-100/90 dark:bg-[#242424]/90 transition-all duration-500 backdrop-blur-sm z-10'>
        <section className='w-10/12 mx-auto flex items-center h-full justify-between'>
          <Link onClick={() => handleClick(1)} className='text-3xl font-bold text-[hsl(207,90%,54%)] tracking-widest' to='/'>Checho</Link>
          <section className='hidden md:flex flex-row items-center gap-6'>
            <ul className='flex flex-row gap-9 text-gray-500 font-normal text-md'>
              { items.map(({icon, id, item, to}) => (
                <li
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`hover:text-[#2196f3] ${itemActive === id ? 'text-[#2196f3]' : ''}`}
                >
                  <Link className='flex items-center gap-1.5'to={to}>{icon}{item}</Link>
                </li>
              ))}
            </ul>
            <ChangeTheme />
          </section>
          <article className='md:hidden flex text-gray-500 cursor-pointer'>
            { toggleMenu 
              ? <CgClose onClick={handleToggleMenu} size={27} ></CgClose>
              : <CgMenuRightAlt onClick={handleToggleMenu} size={27} ></CgMenuRightAlt>
            }
          </article>
        </section>
      </nav> 
      { toggleMenu &&
        <section className='md:hidden block fixed top-16 right-0 left-0 z-50 h-auto bg-slate-100/90 dark:bg-[#242424]/90 shadow-md rounded-b-3xl backdrop-blur-sm'>
          <article className='flex flex-col gap-7 px-10 py-6'>
            <ul className='flex flex-col items-end gap-9 text-gray-400 font-normal text-md'>
                { items.map(({icon, id, item, to}) => (
                  <li
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`hover:text-[#2196f3] ${itemActive === id ? 'text-[#2196f3]' : ''}`}
                  >
                    <Link className='flex flex-row-reverse items-center gap-1.5'to={to}>{icon}{item}</Link>
                  </li>
                ))}
              </ul>
              <div className='w-[100%] h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg'/>
              <article className='flex items-center justify-around'>
                <p className='text-gray-400'>Switch theme</p>
                <ChangeTheme />
              </article>
          </article>
        </section>
      }
    </>
  )
}


