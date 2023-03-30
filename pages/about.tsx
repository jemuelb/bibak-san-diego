import Link from "next/link";
import Layout from "@/components/Layout";

const AboutPage = () => {
    return (
        <Layout title={'About BIBAK San Diego'}>
            <div>
                <h1>About Page</h1>
                <Link href='/'>Go Back</Link>
            </div>
        </Layout>
    )
}

export default AboutPage;