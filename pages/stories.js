import Story from '../components/story';
import { getAllPosts } from '../lib/posts';
import MoreStories from '../components/more-stories';
import { motion } from 'framer-motion';

export default function Stories({ allPosts }) {
    const currentStory = allPosts[0];
    const morePosts = allPosts.slice(1);
    const storyProps = {
        currentStory: currentStory,
        nextStory: allPosts[1],
    }
    return (
        <div className='overflow-auto bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400'>
            <div className="container mx-auto px-20">
                <section className='flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 mt-12'>

                    <motion.h1
                        className="text-6xl md:text-8xl font-bond tracking-tighter leading-tight md:pr-8"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        layoutId="title"
                    >
                        Stories.
                    </motion.h1>
                    <motion.h4
                        className="text-center md:text-left text-lg mt-5 md:pl-8"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        layoutId="subtitle"
                    >
                        This is a work of pure fiction.
                    </motion.h4>

                </section>
                {currentStory && (
                    <Story {...storyProps} />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'id',
        'coverImage',
        'description',
    ])
    return {
        props: { allPosts }
    }
}