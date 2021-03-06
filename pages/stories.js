import Story from '../components/story';
import { getAllPosts } from '../lib/posts';
import MoreStories from '../components/more-stories'

export default function Stories({ allPosts }) {
    const currentStory = allPosts[0];
    console.log(allPosts);
    const morePosts = allPosts.slice(1);
    console.log(morePosts);
    return (
        // linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))
        <div className='overflow-auto bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-400'>
            <div className="container mx-auto px-5">
                <section className='flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12'>
                    <h1 className='text-6xl md:text-8xl font-bond tracking-tighter leading-tight md:pr-8'>
                        Stories.
                    </h1>
                    <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
                        This is a work of pure fiction.
                    </h4>
                </section>
                {currentStory && (
                    <Story
                        title={currentStory.title}
                        coverImage={currentStory.coverImage}
                        date={currentStory.date}
                        id={currentStory.id}
                        description={currentStory.description}
                    />
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