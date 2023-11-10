import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from './Header.module.scss';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Navbar.Brand href="/">Mi Proyecto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
          {/* Agrega más enlaces según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
