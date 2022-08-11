import Head from 'next/head';
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='overflow-auto h-screen relative'>
      {/* <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <div className=''>
        <Image
          src={'/images/bg-img-3.jpg'}
          alt={`Cover Image for`}
          className={'opacity-80'}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className="absolute h-full top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-transparent to-gray-600"></div>
        <div className="font-serif relative left-0 right-0 w-50 font-extrabold opacity-100 z-3 text-white">
          <p className="text-center text-base md:text-3xl pt-10 pb-10">Welcome to my fictional world!</p>
          <Link href='/stories'>
            <a className='flex items-center justify-center'>
              <button className="px-20 py-2 text-white text-base md:text-2xl font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-md shadow-sm">Let's Get Started</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}