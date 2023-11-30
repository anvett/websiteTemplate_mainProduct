import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./TextoImagen.module.scss";

const TextoImagen = ({ ladoTexto, titulo, texto, imageUrl, className }) => {
  const esTextoIzquierda = ladoTexto === "izquierda";

  return (
    <Container fluid className={`${styles.textoImagenContainer} ${className}`}>
      <Row>
        {esTextoIzquierda && (
          <Col md={6} className={styles.textoImagenCol}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{texto}</p>
           
          </Col>
        )}
        <Col md={6} className={styles.textoImagenCol}>
          <Image className={styles.imagen} src={imageUrl} alt="Imagen" fluid />
        </Col>
        {!esTextoIzquierda && (
          <Col md={6} className={styles.textoImagenCol}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{texto}</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

TextoImagen.propTypes = {
  ladoTexto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextoImagen;
