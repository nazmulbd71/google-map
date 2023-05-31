import { useState } from 'react'
import './App.css'
import MyLocation from './components/MyLocation'
import Direction from './components/Direction'

function App() {
  const [origins, setOrigins] = useState('')
  const [destinations, setDestinations] = useState('')

  const displayDirection = event => {
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigins(start)
    setDestinations(end)
  }
  return (
    <>
      <form onSubmit={displayDirection}>
        <input type="text" name='origin' required />
        <br />
        <input type="text" name='destination' required />
        <br />
        <input type="submit" value="show Direction" />
      </form>
      {/* <MyLocation></MyLocation> */}
      <Direction origins={origins} destinations={destinations}></Direction>
    </>
  )
}

export default App
