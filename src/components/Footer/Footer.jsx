import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Container fluid className={styles.container}>
        <Row className={styles.components}>
          <Col className={styles.modules}>
            <h1 className={styles.moduleTitle}>test row</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className={styles.modules}>
            <h1 className={styles.moduleTitle}>test row</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className={styles.modules}>
            <h1 className={styles.moduleTitle}>test row</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
        <Row >  
          <span className={styles.copyright}>© 2023 Derechos Reservados: MiProyecto.com</span>
        </Row>
      </Container>
    </footer>
  );
}
