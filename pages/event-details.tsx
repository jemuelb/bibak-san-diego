import Link from "next/link";
import Layout from "@/components/Layout";
import {Col, Row} from "react-bootstrap";

const EventDetails = () => {
    return (
        <Layout title={'Event Details'}>
            <Row>
                <Col className="d-flex justify-content-center mb-3">
                    <div className="d-flex flex-column justify-content-center mb-3">
                        <h1>Grand Canao</h1>
                        <h3>The Beat Must Go On</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        September 2, 2023
                        Town and Country San Diego
                        500 Hotel Circle North
                        San Diego, CA 92108
                    </div>
                    <div>
                        Tickets: $90 per person
                        $45 12 years old & below
                    </div>
                    <div>
                        Additional Events:
                        Welcome Party
                        5:00 PM, September 1, 2023
                        1852 Camino Mojave
                        Chula Vista, CA 91914
                    </div>
                    <div>
                        Send Off Party
                        12:00 PM, September 3, 2023
                        Rhor Park, 4548 Sweetwater Rd
                        Bonita, CA 91902
                    </div>
                    <div>
                        Contact for more information:
                        Carlo J. Basallo - Carlene07@hotmail.com
                        Kaila Domingo - domingokaila@gmail.com
                        Kirin Macapugay - kirin568@gmail.com
                        Jackie Fianza - jackie.fianza@gmail.com
                    </div>
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