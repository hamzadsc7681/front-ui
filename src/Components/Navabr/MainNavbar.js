import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import "./styles.css";
import DropdownComp from "./DropdownComp";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const naviagte = useNavigate();

  const btnRegLogin = () => {
    naviagte("/login");
  };

  return (
    <>
      <div className="container-fluid main_navbar">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={logo} alt="care" className="logo" />
              <span className="nav_brand">Care & Care</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="nav">
                <ul className="nav_list">
                  <li>
                    <DropdownComp />
                  </li>
                  <li>Shop</li>
                  <li>Doctor Consultations</li>
                  <li>About Us</li>
                  <li>
                    <button className="btn_reglog" onClick={btnRegLogin}>
                      Login / Register
                    </button>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;
