import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames'

export default function CoverImage({title, src, id, height, width}) {
    console.log(src);
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm', {'hover:shadow-md transition-shadow duration-200': id})}
            //layout='responsive'
            width={width}
            height={height} 
            quality='90'
            priority
        />
    )
    return (
        <div className='sm:mx-0'>
            {id ? (
                <Link as={`/posts/${id}`} href='/posts/[id]'>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    )
}