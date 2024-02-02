import Header from './components/Hero/Header/Header';
import './components/Hero/Header/Header.css';
import Hero from './components/Hero/Hero/Hero';
import './App.css';
import Companies from './components/Hero/Companies/Companies';
import Residencies from './components/Hero/Residencies/Residencies';
import Value from './components/Hero/Value/Value';
import Contact from './components/Hero/Contact/Contact';
import Footer from './components/Hero/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <div>
      <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
