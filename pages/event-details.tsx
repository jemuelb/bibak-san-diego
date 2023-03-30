import Link from "next/link";
import Layout from "@/components/Layout";

const EventDetails = () => {
    return (
        <Layout title={'Event Details'}>
            <div>
                <h1>Event Details Page</h1>
                <Link href='/'>Go Back</Link>
            </div>
        </Layout>
    )
}

export default EventDetails;