import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./EnlacesRapidos.module.scss";

export default function EnlacesRapidos() {
  return (
    <Container className={styles.enlacesRapidosContainer}>
      <Row>
        <Col className={styles.enlacesRapidos} >
          <h4 className={styles.titulo}>Enlaces Rápidos</h4>
          <ul className={styles.listaEnlaces}>
            <li>
              <Link href="/">
                <span className={styles.fastLink} >Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros">
                <span className={styles.fastLink} >Sobre Nosotros</span>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <span className={styles.fastLink} >Servicios</span>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <span className={styles.fastLink} >Contacto</span>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
