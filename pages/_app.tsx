import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import type {AppProps} from 'next/app'
import {Analytics} from '@vercel/analytics/react';

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics/>
        </>
    );
}
