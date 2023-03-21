import Head from 'next/head'
import Link from 'next/link'
import {Container} from 'react-bootstrap';

const Home = () => {
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
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Grand Canao 2023</h1>
                            <p className="col-md-8 fs-4">September 1 - 3, Town & Country, San Diego, CA</p>
                            <button className="btn btn-primary btn-lg" type="button">Event Details</button>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-bg-dark rounded-3">
                                <h2>Things to do...</h2>
                                <p>More content about the </p>
                                <button className="btn btn-outline-light" type="button">Example button</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-light border rounded-3">
                                <h2>About us</h2>
                                <p>Something something, about the details talking about BIBAK San Diego, the
                                    organization</p>
                                <button className="btn btn-outline-secondary" type="button">Example button</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default Home;
