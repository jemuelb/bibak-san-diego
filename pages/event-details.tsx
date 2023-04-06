import Link from "next/link";
import Layout from "@/components/Layout";
import {Col, Row} from "react-bootstrap";

const EventDetails = () => {
    return (
        <Layout title={'Event Details'}>
            <Row className="mb-5">
                <Col>
                    <div className="text-center">
                        <h1>Grand Canao</h1>
                    </div>
                    <div className="text-center">
                        <h3>The Beat Must Go On</h3>
                    </div>
                    <div className="text-center">September 2, 2023</div>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col md={6}>
                    <div>
                        <h2><i className="bi bi-map"></i> Venue</h2>
                    </div>
                    <address>
                        <div><a href="https://www.towncountry.com/">Town and Country Resort - San Diego</a></div>
                        <div>500 Hotel Circle North</div>
                        <div>San Diego, CA 92108</div>
                    </address>
                </Col>
                <Col md={6}>
                    <div>
                        <h2><i className="bi bi-ticket"></i> Tickets</h2>
                    </div>
                    <div>
                        <div>
                            <span className="fw-bold">$90</span> per person
                        </div>
                        <div>
                            <span className="fw-bold">$45</span> 12 years old & below
                        </div>
                        <div className="mt-3">For tickets reach out to one of our contacts below.</div>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <div>
                    <h2><i className="bi bi-calendar-event"></i> Additional Events</h2>
                </div>
                <Col md={6}>
                    <div>
                        <h5>Welcome Party 🥳</h5>
                    </div>
                    <div>
                        <div>
                            5:00 PM, September 1, 2023
                        </div>
                        <address>
                            <div>1852 Camino Mojave</div>
                            <div>Chula Vista, CA 91914</div>
                        </address>
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <h5>Send Off Party 👋</h5>
                    </div>
                    <div>
                        <div>
                            12:00 PM, September 3, 2023
                        </div>
                        <address>
                            <div>Rhor Park, 4548 Sweetwater Rd</div>
                            <div>Bonita, CA 91902</div>
                        </address>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <div>
                    <h2><i className="bi bi-person"></i> Contact Information</h2>
                </div>
                <Col md={6}>
                    <div>
                        <div>
                            Carlo J. Basallo - <a href="mailto:Carlene07@hotmail.com">Carlene07@hotmail.com</a>
                        </div>
                        <div>
                            Kaila Domingo - <a href="mailto:domingokaila@gmail.com">domingokaila@gmail.com</a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        Kirin Macapugay - <a href="mailto:kirin568@gmail.com">kirin568@gmail.com</a>
                    </div>
                    <div>
                        Jackie Fianza - <a href="mailto:jackie.fianza@gmail.com">jackie.fianza@gmail.com</a>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <div>
                        <a href='/flyer.jpg'>Link to the flyer</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link href='/'>Go Back</Link>
                </Col>
            </Row>
        </Layout>
    )
};

export default EventDetails;