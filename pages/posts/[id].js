import Layout from '../../components/layout'
import Head from 'next/head'
import DateFormatter from '../../components/date-formatter'
import { getPostById, getAllPosts } from '../../lib/posts'
import markdownToHtml from '../../lib/markdownToHtml'
import CoverImage from '../../components/cover-image'
import markdownStyles from '../../components/markdown-styles.module.css'

export default function Post({ post }) {
    console.log(post);
    return (
        // <Layout>
            <article>
                <Head>
                    <title>{post.title}</title>
                </Head>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                    {post.title}
                </h1>
                <div className='mb-8 md:mb-16 sm:mx-0'>
                    <CoverImage title={post.title} src={post.coverImage} height={540} width={540} />
                </div>
                <div className='md-6 text-lg'>
                    <DateFormatter dateString={post.date} />
                </div>
                <div className='max-w-2xl mx-auto'>
                    <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </article>
        // </Layout>
        // <div>Hello World</div>
    )
}

export async function getStaticPaths() {
    const posts = getAllPosts(['id']);
    console.log(posts);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    id: post.id,
                },
            }
        }),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostById(params.id, [
        'title',
        'date',
        'id',
        'content',
        'coverImage',
    ])

    const content = await markdownToHtml(post.content || '');
    console.log(post);
    console.log(content);

    return {
        props: {
            post: {
                ...post,
                content,
            }
        }
    }
}