import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          necessitatibus tempore optio eligendi earum eius cum. Totam
          exercitationem obcaecati harum eos voluptatibus perferendis minus quos
          facilis. Rerum ipsum impedit minus.
        </p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
