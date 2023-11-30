import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './RedesSociales.module.scss';

const RedesSociales = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className={styles.title}>Mascotas Sanas</h1>
        </Col>
      </Row>
      <Row>
        <Col className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook_b.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/xtwitter_b.png" alt="Twitter" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram_b.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/youtube_b.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/tik-tok_b.png" alt="LinkedIn" width={30} height={30} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default RedesSociales;
