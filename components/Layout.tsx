import Head from 'next/head'
import TopNav from "@/components/TopNav";
import React from 'react';
import {AppShell} from "@mantine/core";

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
                <AppShell
                    padding="md"
                    navbar={<TopNav/>}
                >
                    {children}
                </AppShell>
            </main>
        </>
    )
}

export default Layout;
