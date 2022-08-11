import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
    console.log(posts);
    return (
        <section>
            <h2 className='mb-14 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
                More Stories
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-x-32 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
                {posts.map((post) => (
                    <PostPreview
                        key={post.id}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        id={post.id}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}