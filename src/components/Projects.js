import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description: "SA Fan Shop (MERN Stack)",
      imgUrl: "https://i.ibb.co/8xFWXgT/sa-fan-shop.png",
    },
    {
      description: "Hotel Booking website (MERN STACK)",
      imgUrl: "https://i.ibb.co/JKZfrBT/sa-hotel-boking.png",
    },
    // {
    //   description: "Ecommerce Website (MERN Stack)",
    //   imgUrl: "",
    // },
    {
      description: "Health care website (MERN Stack)",
      imgUrl: "https://i.ibb.co/dG77jr3/sa-health-care.png",
    },
    {
      description: "Agency Website (MERN Stack)",
      imgUrl: "https://i.ibb.co/8zzWT43/agency.png",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Front-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Backed</Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">MERN Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="sixth">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
