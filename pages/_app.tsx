import type {AppProps} from 'next/app'
import {Analytics} from '@vercel/analytics/react';
import {MantineProvider} from "@mantine/core";
import Head from "next/head";

export default function App(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>BIBAK San Diego</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
            <Analytics/>
        </>
    );
}
