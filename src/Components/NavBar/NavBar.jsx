import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../Assets/IADS logo horizontal.png";
import logo from "../../Assets/logo.svg";
// import lock from "../../Assets/lock.svg";
// import lock1 from "../../Assets/lock1.svg";
// import LoginModal from "../LoginModal";

// import { AuthContext } from "../Context/AuthContext";

const NavBar = (props) => {
  // const navigate = useNavigate();
  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const Auth = useContext(AuthContext);

  // console.log(Auth);
  // console.log(showLoginModal);
  return (
    <Navbar
      className={
        props.path == "/" || props.path == "/home"
          ? "navbar navbar-dark navbarWithOutBg"
          : "navbar navbar-dark navbarWithBg"
      }
      bg="none"
      expand="xl"
    >
      {/* {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          setShow={setShowLoginModal}
          description="Welcome back! Login to your account."
        />
      )} */}
      <Container fluid>
        <Navbar.Brand href="/" style={{ zIndex: "10" }}>
          <img className="iads-logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-items me-auto my-2 my-lg-0"
            style={{ maxHeight: "1000px" }}
            navbarScroll
          >
            <Nav.Link className="nav-item nav-item-White home" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/about">
              About us
            </Nav.Link>
            {/* <NavDropdown
              className="nav-item nav-item-White"
              title="Governance"
              id="navbarScrollingDropdownWhite"
            >
              <NavDropdown.Item className="" href="/governance">
                IADS Governance
              </NavDropdown.Item>
              <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className="nav-item nav-item-White" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/projects">
              Projects
            </Nav.Link>
            {/* <NavDropdown
              className="nav-item nav-item-White"
              title="Committees"
              id="navbarScrollingDropdownWhite"
            >
              <NavDropdown.Item className="" href="/committees/workforce">
                Workforce
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="" href="/committees/internal">
                Internal Affairs
              </NavDropdown.Item>
              <NavDropdown.Item href="/committees/editorial">
                
                Editorial Board
              </NavDropdown.Item>
              <NavDropdown.Item href="/committees/exchange">
                Exchange Board
              </NavDropdown.Item>

              <NavDropdown.Item href="/committees/prophylaxis">
                Public Health
              </NavDropdown.Item>
              <NavDropdown.Item href="/committees/SCORE">
                SCORE
              </NavDropdown.Item>
              <NavDropdown.Item href="/committees/training">
                Training
              </NavDropdown.Item>
              <NavDropdown.Item href="/committees/voluntary">
                Voluntary
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className="nav-item nav-item-Blue" href="/certificates">
              Certificates
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-Blue" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          {/* {!Auth.isLogged && (
            <div className="auth d-flex">
              <div
                onClick={() => setShowLoginModal(!showLoginModal)}
                className="login-btn"
              >
                <img
                  src={
                    props.path == "/" || props.path == "/home" ? lock : lock1
                  }
                />
                <p>Login</p>
              </div>
              <a
                style={{ textDecoration: "none" }}
                href="/signup"
                className="signup-btn"
              >
                Signup
              </a>
            </div>
          )}
          {Auth.isLogged && (
            <div className="auth d-flex" style={{ justifyContent: "center" }}>
              <p style={{ color: "#3EB542", fontFamily: "Poppins medium" }}>
                Hello {Auth.name.split(" ")[0]}
              </p>
              <div
                onClick={() => {
                  Auth.logout();
                  navigate("/");
                }}
                className="login-btn"
              >
                <img
                  src={
                    props.path == "/" || props.path == "/home" ? lock : lock1
                  }
                />
                <p>Logout</p>
              </div>
            </div>
          )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
