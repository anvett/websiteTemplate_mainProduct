import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./ContactInfo.module.scss";

export default function ContactInfo({
  address,
  phoneNumbers,
  email,
  whatsappNumber,
  googleMapsUrl,
}) {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Container>
      <Row>
        <h3 className={styles.contactTitle}>Contacto</h3>
      </Row>
      <Row>
        <Col className={styles.contactContent}>
          <a className={styles.linkMap} href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            {address} 
          </a>
          <ul className={styles.phones}>
            {phoneNumbers.map((phoneNumber, index) => (
              <li key={index}>{phoneNumber}</li>
            ))}
          </ul>
          <div className={styles.accion}>
            <p className={styles.accionItem}>¡Contáctanos!</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className={styles.accionImage}>
                <Image src="/images/whatsapp_b.png" alt="WhatsApp" width={30} height={30} />
              </div>
            </a>
          </div>
          <p className={styles.contactItem}>{email} </p>
        </Col>
      </Row>
    </Container>
  );
}
