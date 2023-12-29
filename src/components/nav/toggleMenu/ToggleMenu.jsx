import { useState } from 'react'
import { CgClose, CgMenuRightAlt } from 'react-icons/cg'

export default function ToggleMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  return (
    <article className='md:hidden flex text-gray-500 cursor-pointer'>
      { toggleMenu 
        ? <CgMenuRightAlt onClick={handleToggleMenu} size={27} ></CgMenuRightAlt>
        : <CgClose onClick={handleToggleMenu} size={27} ></CgClose>
      }
    </article>
  )
}
