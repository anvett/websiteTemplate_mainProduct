import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.scss";
import { MdPets } from "react-icons/md";

export default function Header() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand className={styles.navBrand} href="/">
        <MdPets className={styles.navIcon} />
        <span className={styles.navTitle} >Macotas Sanas</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navLinks}>
        <Nav className="mr-auto">
          <Nav.Link className={styles.navLink} href="/">Inicio</Nav.Link>
          <Nav.Link className={styles.navLink} href="/about">Sobre Nosotros</Nav.Link>
          <Nav.Link className={styles.navLink} href="/">Servicios</Nav.Link>
          <Nav.Link className={styles.navLink} href="/about">Testimonios</Nav.Link>
          <Nav.Link className={styles.navLink} href="/about">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
