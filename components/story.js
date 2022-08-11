import Link from 'next/link'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

export default function Story(props) {
    console.log(props);
    const id = props.currentStory.id;
    const title = props.currentStory.title;
    const date = props.currentStory.date;
    const description = props.currentStory.description;
    const coverImage = props.currentStory.coverImage;
    return (
        <section>
            <div className='mb-8 md:mb-16 grid place-items-center'>
                <CoverImage
                    title={title}
                    src={coverImage}
                    id={id}
                    height={740}
                    width={740}
                />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
                <div>
                    <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
                        <Link as={`/posts/${id}`} href='/posts/[id]'>
                            <a className='hover:underline'>{title}</a>
                        </Link>
                    </h3>
                    <div className='mb-4 md:mb-0 text-lg'>
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className='text-lg leading-relaxed mb-4'>{description}</p>
                </div>
            </div>
        </section>
    )
}