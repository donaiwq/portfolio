import { useState, useEffect } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import { Navbar,Nav,Container} from 'react-bootstrap';
import { FaLinkedinIn,FaInstagram,FaGithub } from 'react-icons/fa'
import logo from '../assets/img/logo.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    
       <Navbar expand="md" className={scrolled ? 'scrolled' : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        {/* aria-controls="basic-navbar-nav" */}
        <Navbar.Toggle  />
          
    

        <Navbar.Collapse>

          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">

            <div className="social-icon">
              <a target='_blank' href="https://github.com/donaiwq"> <FaGithub /> </a>
              <a target='_blank' href="https://www.instagram.com/"> <FaInstagram /> </a>
              <a target='_blank' href="https://www.linkedin.com/feed/"> <FaLinkedinIn /> </a>
            </div>


          </span>

        </Navbar.Collapse>

      </Container>
    </Navbar>
   
   
  )
}
export default Navbar
