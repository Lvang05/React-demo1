import Card from '../components/Card.jsx'
import { FaStar, FaRegStar } from 'react-icons/fa'

const leonsMovies = [
  "The Matrix",
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction",
]

const App = () => {
  return (
    <>
      <Card title="Leon Vang" rating={4}>
        <ul>
          {leonsMovies.map(movie, index => <li key ={index}>{movie}</li>)}
        </ul>
      </Card>
      <Card title="jim" rating={3}>
        <h5>Test</h5>
      </Card>

    </>
  )
}

export default App
