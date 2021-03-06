import Head from "next/head";
import styles from "./layout.module.css";

import Menu from "./menu";
import Footer from "./footer";
import Image from "next/image";

import leftbush from "@/public/bush-left.png";
import rightbush from "@/public/bush-right.png";

export default function Layout({ children }) {
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
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <h1 id='mainTitle' className={styles.mainTitle}>
        Flourish
      </h1>
      <main className={styles.main}>
        <Menu />
        <div className={styles.screenContent}>
          {children}
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </main>
      <div className={styles.bushes}>
        <div className={styles.leftBush}>
          <Image src={leftbush} />
        </div>
        <div className={styles.rightBush}>
          <Image src={rightbush} />
        </div>
      </div>
    </div>
  );
}
