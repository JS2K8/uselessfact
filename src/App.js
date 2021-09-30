import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {
    let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    let data = await response.json()
    setData(data)
  }

  return (
    <div className="container">
      <h1 className="title">Useless Facts</h1>    
      <button className="btn" onClick={handleFetch}>FACT!</button>
      <p className="fact" >{data.text}</p>
    </div>
  )
}

export default App