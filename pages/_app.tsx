import type {AppProps} from 'next/app'
import {Analytics} from '@vercel/analytics/react';
import {MantineProvider} from "@mantine/core";

export default function App(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
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
