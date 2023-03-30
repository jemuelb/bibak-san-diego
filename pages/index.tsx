import Link from 'next/link'
import Layout from "@/components/Layout";

const Home = () => {
    return (
        <Layout title={'BIBAK San Diego'}>
            <>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Grand Canao 2023</h1>
                        <p className="col-md-8 fs-4">September 1 - 3, Town & Country, San Diego, CA</p>
                        <Link href="/event-details">
                            <button className="btn btn-primary btn-lg" type="button">Event Details</button>
                        </Link>

                    </div>
                </div>

                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Things to do...</h2>
                            <p>More content about the </p>
                            <Link href="/additional-info">
                                <button className="btn btn-outline-light" type="button">More info</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h2>About us</h2>
                            <p>Something something, about the details talking about BIBAK San Diego, the
                                organization</p>
                            <Link href="/about">
                                <button className="btn btn-outline-secondary" type="button">More...</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home;
