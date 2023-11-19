import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './LegalInfo.module.scss';

export default function LegalInfo() {
  return (
    <Container className={styles.legalContainer}>
      <Row>
        <Col className={styles.legalContent}>
          <p className={styles.copyRight}>
            © {new Date().getFullYear()} Derechos Reservados: MiProyecto.com
          </p>
          <p className={styles.legalLinks}>
            <Link href="/politicas-de-privacidad">
              <a className={styles.legalLink}>Políticas de Privacidad</a>
            </Link>
            {' | '}
            <Link href="/terminos-y-condiciones">
              <a className={styles.legalLink}>Términos y Condiciones</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
