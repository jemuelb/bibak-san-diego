import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <Head>
                <title>BIBAK San Diego</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
              <Container>
                  <Row>
                      <h1>BIBAK San Diego</h1>
                  </Row>
                  <Row>
                      <Col>
                          This is a temporary holding page.
                      </Col>
                  </Row>
              </Container>
            </main>
        </>
    )
}
