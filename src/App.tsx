import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  Landing,
  Services,
  Portfolio,
  Contact,
} from './pages';
import './styles/global.css';

const HomePage = () => (
  <>
    <Landing />
    <Services />
    <Portfolio />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const preloadLinks = document.querySelectorAll<HTMLLinkElement>('link[rel="preload"]');
    preloadLinks.forEach(link => {
      if (link.as === 'image') {
        new Image().src = link.href;
      }
    });
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
