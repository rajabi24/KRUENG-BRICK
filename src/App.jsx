import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Produk from './components/Produk'
import Proses from './components/Proses'
import Swot from './components/Swot'
import Pasar from './components/Pasar'
import Tim from './components/Tim'
import Kontak from './components/Kontak'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Produk />
      <Proses />
      <Swot />
      <Pasar />
      <Tim />
      <Kontak />
    </div>
  )
}

export default App