import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import ContactInfo from "./ContactInfo/ContactInfo";
import RedesSociales from "./RedesSociales/RedesSociales";
import LegalInfo from "./LegalInfo/LegalInfo";
import EnlacesRapidos from "./EnlacesRapidos/EnlacesRapidos";

export default function Footer() {
 
  return (
    <footer>
      <Container fluid className={styles.container}>
        <Row className={styles.components}>
          <Col className={styles.modules1}>
            <ContactInfo
              address="123 Main St, City, Country"
              phoneNumbers={["123-456-7890", "987-654-3210"]}
              email="info@example.com"
              whatsappNumber="+593992543979"
              googleMapsUrl="https://maps.app.goo.gl/B8Rdt8ajrWB5gHvc8"
            />
          </Col>
          <Col className={styles.modules2}>
            <RedesSociales/>
          </Col>
          <Col className={styles.modules3}>
            <EnlacesRapidos/>
          </Col>
        </Row>
        <Row>
          <LegalInfo/>
        </Row>
      </Container>
    </footer>
  );
}
