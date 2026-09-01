import './App.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Writing  from './components/Writing';

import Contact  from './components/Contact';
import Footer          from './components/Footer';
import ResumeUploader from './components/ResumeUploader';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <ResumeUploader />
    </>
  );
}
