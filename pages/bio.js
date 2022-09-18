import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Bio() {
    return (
        <div className="overflow-auto h-screen grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 px-10">
            <div className="pt-10 pl-10 pr-5">
                <p className="font-sans font-semibold text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-black via-gray-700 to-gray-600 pb-5">Hi, I'm Bindi Sevak</p>
                <p className="font-sans font-semibold text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-600">I write short realistic fictional stories. I've been writing them since a decade now.
                    Earlier, I had a blog hosted at some other place, but since I'm also a Software Engineer (that's my day job)
                    I decided to create this from scratch. My stories are pure fictional, and the inspiration comes from meeting
                    new people, visiting new places, and through happenings of my own life.
                </p>
            </div>
            <motion.figure className='image' layoutId='image'>
                <Image
                    src={'/images/about-me.jpg'}
                    alt={`Cover Image for`}
                    className={'z-0 opacity-50'}
                    layout='responsive'
                    width="500"
                    height="500"
                    objectFit='contain'
                    objectPosition='right top'
                />
            </motion.figure>
        </div>
    )
}