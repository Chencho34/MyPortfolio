import { Fade } from 'react-awesome-reveal'
import { Card } from '../../components'
import { projects } from '../../constants'

export default function Cards () {
  return (
    <>
      {projects.map(({ id, title, image, description, tecnologies, github, demo }) => (
        <Fade key={id} duration={400}>
          <Card key={id} image={image} title={title} description={description} tecnologies={tecnologies} github={github} demo={demo} /> 
        </Fade>
      ))}
    </>
  )
}
