import Link from "next/link";
import Layout from "@/components/Layout";

const AboutPage = () => {
    return (
        <Layout title={'Additional Information'}>
            <div>
                <h1>Additional Information</h1>
                <Link href='/'>Go Back</Link>
            </div>
        </Layout>
    )
}

export default AboutPage;