import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {

  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
