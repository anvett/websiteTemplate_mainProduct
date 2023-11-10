import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container>
          <Row>
            <h1 className={styles.title}>Test index</h1>
          </Row>
          <Row>
            <Col>
              <h2 className={styles.subtitle}>Prueba de grid</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquid
                repudiandae praesentium quia maiores iure doloribus ducimus similique iusto magni?
              </p>
            </Col>
            <Col>
              <h2 className={styles.subtitle}>Prueba de estilos</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquid
                repudiandae praesentium quia maiores iure doloribus ducimus similique iusto magni?
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
