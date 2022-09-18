import Link from 'next/link';
import { useState, useEffect } from 'react';
import Styles from '../styles/animation.module.css';

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

    const textMotion = {
        rest: {
            width: 0,
            height: 0,
            right: 0,
            bottom: 0,
            borderBottom: "2px solid transparent",
            borderRight: "2px solid transparent",
            // color: "grey",
            // x: 0,
            transition: {
                duration: 0.4,
                type: "all",
                ease: "easeIn"
            }
        },
        hover: {
            top: 0,
            left: 0,
            borderTop: "2px solid transparent",
            borderLeft: "2px solid transparent",
            width: "10px",
            height: "10px",
            borderColor: "white",
            // color: "blue",
            // x: 30,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        }
    };

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
                            <a onClick={handleClick} className='hover-underline-animation lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center'>
                            <span className={Styles.hoverUnderlineWhite}>Home</span>
                            </a>
                        </Link>
                        <Link href='/stories'>
                            <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center'>
                                <span className={Styles.hoverUnderlineWhite}>Stories</span>
                            </a>
                        </Link>
                        <Link href='/bio'>
                            <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center'>
                            <span className={Styles.hoverUnderlineWhite}>About me</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}