import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'


export default function Post({ postData }) {
  return (
    <LayoutMobile shortTitle={postData.shortTitle}>
      <Head>
        <title>{postData.shortTitle}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </LayoutMobile>
  )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}