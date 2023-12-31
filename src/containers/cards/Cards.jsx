import { Card } from '../../components'
import { projects } from '../../constants'

export default function Cards () {
  return (
    <>
      {projects.map(({ id, title, image, description, tecnologies, github }) => (
          <Card key={id} image={image} title={title} description={description} tecnologies={tecnologies} github={github} /> 
      ))}
    </>
  )
}
