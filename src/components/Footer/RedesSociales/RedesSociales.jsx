import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './RedesSociales.module.scss';

const RedesSociales = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className={styles.title}>Marca de la empresa</h1>
        </Col>
      </Row>
      <Row>
        <Col className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook_w.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/twitterx_w.png" alt="Twitter" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram_w.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/youtube_w.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/tiktok_w.png" alt="LinkedIn" width={30} height={30} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default RedesSociales;
