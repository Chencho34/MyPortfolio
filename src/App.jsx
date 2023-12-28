import { Route, Routes } from 'react-router-dom'
import { Home, About,   Projects } from './pages'
import { Nav } from './components'

export default function App () {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' index element={ <Home />} />
        <Route path='/about' index element={ <About />} />
        <Route path='/projects' index element={ <Projects />} />
      </Routes>
    </>
  )
}

