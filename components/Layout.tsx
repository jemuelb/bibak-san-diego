import Head from 'next/head'
import {Container} from 'react-bootstrap';
import Header from "@/components/Header";
import React from 'react';

type LayoutProps = {
    children?: React.ReactNode;
    title: string;
}

const Layout = ({children, title}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Container>
                    <Header/>
                    {children}
                </Container>
            </main>
        </>
    )
}

export default Layout;
