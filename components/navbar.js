import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(false);
    const [navColor, setNavColor] = useState('bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900');
    const [navSize, setNavSize] = useState('py-4');

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor('bg-black opacity-90') : setNavColor('bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900');
        window.scrollY > 10 ? setNavSize('py-2') : setNavSize('py-4');
        window.scrollY > 10 ? setActive(false) : setActive(active);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
    }, []);

    const handleClick = () => {
        setActive(!active);
    }


    return (
        <div className={`sticky top-0 z-40 ${navColor}`}>
            <nav className={`flex justify-between  flex-wrap p-3 ${navSize}`}>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4'>
                        <span className='font-mono italic text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-200 tracking-wide'>
                            Fictional
                            <span className='text-yellow-100 hover:text-pink-100 ml-1 not-italic'>
                            Reality
                            </span>
                        </span>
                    </a>
                </Link>
                <button className='inline-flex p-3 hover:bg-gray-300 rounded lg:hidden text-white ml-auto hover:text-black outline-none'
                    onClick={handleClick}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${active ? '' : 'hidden'
                    }   w-full h-full lg:inline-flex lg:flex-grow lg:w-auto hover:text-green`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black'>
                                Home
                            </a>
                        </Link>
                        <Link href='/stories'>
                            <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black'>
                                Stories
                            </a>
                        </Link>
                        <Link href='/bio'>
                            <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black'>
                                About me
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}