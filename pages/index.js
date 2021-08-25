import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../components/layout.module.css";

import Date from "../components/date";
import Layout from "../components/layout";

import { getSortedPostData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostData();
    return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
    return (
        <Layout shortTitle="FLOURISH: An Adam Anthology">
            {allPostsData.some(x => x.showInList === 'true') ? <h1>recent posts:</h1> : ''}
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title, shortTitle, showInList }) => showInList == 'true' ? (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ) : "")}
            </ul>
        </Layout>
    );
}
