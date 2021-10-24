import Link from 'next/link';
import utilStyles from '@/styles/utils.module.css';
import layoutStyles from '@/components/layout.module.css';

import Date from '@/components/date';
import Layout from '@/components/layout';

import { getSortedPostData } from '@/lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostData();
    return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
    return (
        <>
            <div className={layoutStyles.rofl}>
                <div className={layoutStyles.lmao}>
                    <div>Flourish</div>
                    <div>tomorrow is a new day</div>
                </div>
                <Layout shortTitle='FLOURISH: An Adam Anthology'>
                    <p>
                        Welcome to the home page of Flourish, an Adam Anthology.
                        Have a look around! If you have any questions, feel free
                        to contact us through{' '}
                        <a
                            href='http://twitter.com/adamsk8flourish'
                            target='_blank'
                        >
                            twitter
                        </a>
                        ,{' '}
                        <a
                            href='https://flourish-adam-zine.tumblr.com'
                            target='_blank'
                        >
                            tumblr
                        </a>
                        ,{' '}
                        <a
                            href='https://instagram.com/adamflourishzine'
                            target='_blank'
                        >
                            instagram
                        </a>
                        , or <a href='mailto:post@adamflourishzine.xyz'>email</a>
                    </p>
                    <ul>
                        <li>
                            {' '}
                            <a
                                href='https://forms.gle/hKMH4DFyyVbncwZQ9'
                                target='_blank'
                            >
                                Writer Applications
                            </a>{' '}
                        </li>{' '}
                        <li>
                            {' '}
                            <a
                                href='https://forms.gle/ezyUoh6w5W7hdyuw9'
                                target='_blank'
                            >
                                Artist Applications
                            </a>{' '}
                        </li>{' '}
                    </ul>
                    {allPostsData.some((x) => x.showInList === 'true') ? (
                        <h1>recent posts:</h1>
                    ) : (
                        ''
                    )}
                    <ul className={utilStyles.list}>
                        {allPostsData.map(
                            ({ id, date, title, shortTitle, showInList }) =>
                                showInList == 'true' ? (
                                    <li className={utilStyles.listItem} key={id}>
                                        <Link href={`/${id}`}>
                                            <a>{title}</a>
                                        </Link>
                                        <br />
                                        <small>
                                            <Date dateString={date} />
                                        </small>
                                    </li>
                                ) : (
                                    ''
                                )
                        )}
                    </ul>
                </Layout>
            </div>
        </>
    );
}
