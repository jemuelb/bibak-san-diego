import Link from "next/link";
import Layout from "@/components/Layout";
import {Col, Row} from "react-bootstrap";

const EventDetails = () => {
    return (
        <Layout title={'Event Details'}>
            <Row>
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
            <Row className="mb-3">
                <Col>
                    <address>
                        <div>Town and Country San Diego</div>
                        <div>500 Hotel Circle North</div>
                        <div>San Diego, CA 92108</div>
                    </address>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    Tickets: $90 per person
                    $45 12 years old & below
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <div>
                        Additional Events:
                        Welcome Party
                        5:00 PM, September 1, 2023
                        1852 Camino Mojave
                        Chula Vista, CA 91914
                    </div>
                </Col>
                <Col>
                    <div>
                        Send Off Party
                        12:00 PM, September 3, 2023
                        Rhor Park, 4548 Sweetwater Rd
                        Bonita, CA 91902
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <div>
                        Contact information
                    </div>
                    <div>
                        Carlo J. Basallo - Carlene07@hotmail.com
                        Kaila Domingo - domingokaila@gmail.com
                        Kirin Macapugay - kirin568@gmail.com
                        Jackie Fianza - jackie.fianza@gmail.com
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