import { Container, Row, Col, Tab } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
import projImg1 from "../assets/img/projectImg1.png";
import projImg2 from "../assets/img/projectImg2.png";
import projImg3 from "../assets/img/projectImg3.png";
import projImg4 from '../assets/img/projectimg4.png';
import projImg5 from '../assets/img/projectimg5.png';
import projImg6 from '../assets/img/projectImg6.png';

import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      src:'http://127.0.0.1:5501/coffee.time/index.html'
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      src:'https:todoshka-donaiwq.vercel.app'
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>

            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                        <ProjectCard key={index}  {...project}/>
                     
                        )
                      })
                    }
                  </Row>
                </Tab.Pane >
                <Tab.Pane eventKey='second'>
                  Lorem Ipsum
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  Lorem Ipsum
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='img' />
    </section>
  )
}