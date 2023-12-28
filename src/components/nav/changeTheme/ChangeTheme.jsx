import { useEffect, useState } from 'react'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'


export default function ChangeTheme() {

  
  const [toggleThemeIcon, setThemeIcon] = useState(true)

  const [themeColor, setThemeColor] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (themeColor === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  },[themeColor])

  const handleToggleTheme = () => {
    setThemeColor((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'))
    setThemeIcon(!toggleThemeIcon)
  }  

  return (
    <section className='text-gray-500 cursor-pointer hover:text-[#2196f3]'>
      { toggleThemeIcon
        ? <MdOutlineLightMode onClick={handleToggleTheme} size={22} />
        : <MdOutlineNightlight onClick={handleToggleTheme} size={22}/>
      }
   </section>
  )
}
