import './App.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background text-foreground">
        <Toaster />
        <Header />
        <Hero />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
