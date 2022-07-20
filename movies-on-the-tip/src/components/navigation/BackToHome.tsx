import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BackToHome = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
          Back to Home
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default BackToHome;
