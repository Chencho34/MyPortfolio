import { Route, Routes } from 'react-router-dom'
import { Home, About,   Projects } from './pages'
import { Nav } from './components'

export default function App () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='MyPortfolio/' index element={ <Home />} />
        <Route path='MyPortfolio/about' element={ <About />} />
        <Route path='MyPortfolio/projects' element={ <Projects />} />        
      </Routes>
    </>
  )
}

