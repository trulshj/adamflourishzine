import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

import Menu from './menu';
import Footer from './footer';

export default function Layout({ children, shortTitle }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Flourish</title>
                <meta name='description' content='Adam Flourish Zine' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                ></meta>
                <link rel='icon' href='/favicon.ico?v=2' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <main className={styles.main}>
                <Menu />
                <div className={styles.screen}>
                    <div className={styles.screenContent}>
                        <h1 id="mainTitle" className={styles.mainTitle}>Flourish</h1>
                        {children}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
