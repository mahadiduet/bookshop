import './App.css'
import Books from './conponents/Books'
import Navbar from './conponents/share/Navbar'
import Slider from './conponents/Slider'

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Books />

      <h1 className='text-red-500 font-semibold text-2xl text-center'>Vite + React</h1>

    </>
  )
}

export default App
