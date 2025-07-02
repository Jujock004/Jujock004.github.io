import './App.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="bg-background text-foreground">
      <Toaster />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
