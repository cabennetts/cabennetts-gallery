"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const listItems = ['gallery', 'about', 'gear', 'contact', 'socials']
    
    return (           
        <header className="w-full absolute z-10">
            <nav className="w-full flex justify-between items-center md:items-center p-4 px-6 py-4 sm:px-16 md:px-12">         
                <div className="flex flex-row justify-between w-screen"> 
                    <motion.div 
                        className='self-center'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="cursor-pointer">
                            <h1 className='font-light tracking-wider text-white md:text-5xl lg:text-6xl'>cabennetts.gallery</h1>
                        </Link>
                    </motion.div>            
                    <motion.div 
                        className="hidden md:flex justify-end font-switzer font-medium uppercase text-white"
                        initial={{ opacity: 0, x: '-75%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                    >
                        <ul className="flex flex-row gap-4 items-center text-3xl tracking-wide font-light lg:text-4xl">
                            <li>
                                <Link href="/">about</Link>
                            </li>
                            <li>
                                <Link href="/">gear</Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="flex relative">
                    {!menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <FaBars fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setMenuOpen(true)} />
                        </motion.div>                            
                    )}
                    
                    {menuOpen && (
                        <motion.div
                            className="z-10 fixed -top-0 -right-0 py-4 px-8 w-full h-screen md:hidden list-none flex flex-col justify-start items-end rounded-md bg-black text-white"
                            initial={{ x: '-75%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className=" py-2">
                                <AiOutlineClose fontSize={28} onClick={() => setMenuOpen(false)} className="m-0"/>
                            </div>
                            <ul className="text-end text-3xl">
                                {listItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.15 }} // Adjust the delay as needed
                                    >
                                        <button onClick={() => setMenuOpen(false)}>
                                            <Link href={`/`}>{item}</Link>
                                            {/* <Link href={`/${item}`}>{item}</Link> */}
                                        </button>
                                    </motion.li>
                                ))}                                 
                            </ul>
                        </motion.div>
                    )}
                </div>
                    
            </nav>
        </header>
  );
};

export default Navbar;