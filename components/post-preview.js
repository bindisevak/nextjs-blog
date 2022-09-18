import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import Styles from '../styles/animation.module.css';
import { motion } from 'framer-motion';

export default function PostPreview({
    title,
    coverImage,
    date,
    description,
    id
}) {

    return (
        <div>
            <div className="mb-5">
            <motion.figure className='image' layoutId='image'>
                <CoverImage
                    id={id}
                    title={title}
                    src={coverImage}
                    height={278}
                    width={300}
                    layout='fill'
                    objectFit='contain'
                    placeholder='blur'
                    priority
                />
                </motion.figure>
            </div>
            <h3 className='text-3xl mb-3 leading-snug'>
                <Link href={`/posts/${id}`}>
                    <a className={Styles.hoverUnderlineBlack}>{title}</a>
                </Link>
            </h3>
            <div className='text-lg mb-4'>
                <DateFormatter dateString={date} />
            </div>
            <p className='text-lg leading-relaxed mb-4'>{description}</p>
        </div>
    )
}