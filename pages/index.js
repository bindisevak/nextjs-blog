import Head from 'next/head';
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='overflow-auto h-screen relative'>
      {/* <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <div>
        <motion.figure className='image' layoutId='image'>
          <Image
            src={'/images/bg-img-3.jpg'}
            alt={`Cover Image for`}
            className={'opacity-80'}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority
          />
          <div className="absolute h-full top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-transparent to-gray-600"></div>
          <div className="font-serif relative left-0 right-0 w-50 font-extrabold opacity-100 z-3 text-white">
            <motion.h1
              className="text-center text-base md:text-3xl pt-10 pb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              layoutId="title"
            >
              Welcome to my fictional world!
            </motion.h1>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href='/stories'>
                <a className='flex items-center justify-center'>
                  <button className="px-20 py-2 text-white text-base md:text-2xl font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-md shadow-sm">Let's Get Started</button>
                </a>
              </Link>
            </motion.div>
          </div>
        </motion.figure>
      </div>
    </div>
  );
}