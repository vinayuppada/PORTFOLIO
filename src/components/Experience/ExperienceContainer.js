// ExperienceContainer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experience from "./Experience";
import Particle from "../Particle";
// import chatify from "../../Assets/Experiences/chatify.jpg"; // replace with your image paths

function ExperienceContainer() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience  </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some of my relevant work experiences.
        </p>
        <>
  <Col md={5} className="experience-card">
    <Experience
      // imgPath={chatify}
      isBlog={false}
      title="Chatify"
      description="Worked on building a real-time chat application using React.js, Material-UI, and Firebase. Implemented features like real-time messaging, image sharing, and reactions on messages."
      demoLink="https://chatify-49.web.app/"
    />
  </Col>

  {/* Horizontal line to separate experiences */}
  <hr className="experience-divider" />

  <Col md={5} className="experience-card">
    <Experience
      // imgPath={anotherProject}
      isBlog={false}
      title="Another Project"
      description="Description of another project. It can contain details about technologies used, features implemented, etc."
      demoLink="https://example.com/"
    />
  </Col>
</>

          {/* <Col md={5} className="experience-card">
            <Experience
              // imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Worked on building a real-time chat application using React.js, Material-UI, and Firebase. Implemented features like real-time messaging, image sharing, and reactions on messages."
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          {/* Add more experiences similarly */}
      </Container>
    </Container>
  );
}

export default ExperienceContainer;
