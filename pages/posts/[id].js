import Head from 'next/head'
import DateFormatter from '../../components/date-formatter'
import { getPostById, getAllPosts } from '../../lib/posts'
import markdownToHtml from '../../lib/markdownToHtml'
import CoverImage from '../../components/cover-image'
import markdownStyles from '../../components/markdown-styles.module.css'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { IconContext } from "react-icons";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Post({ post, allPosts }) {
    let nextPostId = ''

    for (let curr = 0; curr < allPosts.length; curr++) {
        if (post.id === allPosts[curr].id) {
            nextPostId = curr + 1 === allPosts.length ? allPosts[0].id : allPosts[curr + 1].id;
        }
    }

    return (
        <div className='overflow-auto bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400'>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div className='mt-10 ml-6 mr-6 md:ml-16 md:mr-16'>
                <div className='flex flex-row justify-between pb-14 text-base md:text-lg'>
                    <Link href='/stories'>
                        <a className='md:pr-16'>
                            <IconContext.Provider
                                value={{ style: { color: '#07678B', fontSize: '30px', display: 'inline' } }}
                            >
                                <GoChevronLeft /> <span className='hover:opacity-75'> Back to Stories </span>
                            </IconContext.Provider>
                        </a>
                    </Link>
                    <Link as={`/posts/${nextPostId}`} href='/posts/[nextPostId]'>
                        <a className='md:pr-16'>
                            <IconContext.Provider
                                value={{ style: { color: '#07678B', fontSize: '30px', display: 'inline' } }}
                            >
                                <span className='hover:opacity-75'>Next Story</span> <GoChevronRight />
                            </IconContext.Provider>
                        </a>
                    </Link>
                </div>
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    layoutId="title"
                >
                    {post.title}
                </motion.h1>
                <div className='mb-8 md:mb-16 grid place-items-center'>
                    <CoverImage title={post.title} src={post.coverImage} height={540} width={540} />
                </div>
                <div className='md-6 text-base md:text-lg mb-4'>
                    <DateFormatter dateString={post.date} />
                </div>
                <div className='max-w-2xl mx-auto'>
                    <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className='flex flex-row justify-between pt-10 pb-14 text-base md:text-lg'>
                    <Link href='/stories'>
                        <a className='md:pr-16'>
                            <IconContext.Provider
                                value={{ style: { color: '#07678B', fontSize: '30px', display: 'inline' } }}
                            >
                                <GoChevronLeft /><span className='hover:opacity-75'> Back to Stories </span>
                            </IconContext.Provider>
                        </a>
                    </Link>
                    <Link as={`/posts/${nextPostId}`} href='/posts/[nextPostId]'>
                        <a className='md:pr-16'>
                            <IconContext.Provider
                                value={{ style: { color: '#07678B', fontSize: '30px', display: 'inline' } }}
                            >
                                <span className='hover:opacity-75'>Next Story</span> <GoChevronRight />
                            </IconContext.Provider>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const posts = getAllPosts(['id']);

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

    const allPosts = getAllPosts(['id']);

    return {
        props: {
            post: {
                ...post,
                content,
            },
            allPosts: [
                ...allPosts
            ]
        }
    }
}