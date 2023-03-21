import Head from "next/head";
import {Container} from "react-bootstrap";
import Link from "next/link";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>BIBAK San Diego</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Container>
                    <header className="pb-3 mb-4 border-bottom">
                        <Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
                            <span className="fs-4">BIBAK San Diego</span>
                        </Link>
                    </header>
                    <div>
                        <h1>Additional Information</h1>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default AboutPage;