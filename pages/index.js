import Head from 'next/head';
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='overflow-auto'>
      {/* <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <div>
        <Image
          src={'/images/bg-img-3.jpg'}
          alt={`Cover Image for`}
          className={'z-0 opacity-30'}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className="relative left-0 right-0 w-50 font-extrabold  text-black z-20">
          <p className="text-center text-base md:text-3xl pt-10 pb-10">Welcome to my fictional world!</p>
          <Link href='/stories'>
            <a className='flex items-center justify-center'>
              <button className="px-5 py-2 text-white text-base md:text-2xl font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-md shadow-sm">Let's Get Started</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}