import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects'
import { ProjectCard } from './components/ProjectCard.js'
import { Contact } from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCard />
      <Contact />
      <MailchimpForm/>
      <Footer />
    </div>
  );
}

export default App;
