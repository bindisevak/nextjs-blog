import Head from 'next/head';
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <div>
        <Image
          src={'/images/bg-img-3.jpg'}
          alt={`Cover Image for`}
          className={'z-0 opacity-40'}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className="relative left-0 right-0 w-50 h-screen font-extrabold  text-black text-3xl z-20">
          <p className="text-center pt-10 pb-10">Welcome to my fictional world!</p>
          <Link href='/stories'>
            <a className='flex items-center justify-center'>
              <button className="px-6 py-3 text-white text-base md:text-xl font-semibold bg-green-900 opacity-100 hover:bg-green-800 rounded-md shadow-sm">Let's Get Started</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}