import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function Sidenav() {
    const [nav, setNav] = useState(false);
    const handleNAv = () => {
        setNav(!nav);
    };
    const { isAuthenticated } = useAuthContext();
    return (
        <div>
            <AiOutlineMenu
                onClick={handleNAv}
                className='absolute top-4 right-4 z-[99] md:hidden'
            />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <Link onClick={handleNAv} to="main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </Link>
                        {/* <Link onClick={handleNAv} to="work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Work</span>
                        </Link> */}
                        <Link onClick={handleNAv} to="projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </Link>
                        {/* <Link onClick={handleNAv} to="maiprojects/createn" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>Create</span>
                        </Link> */}
                        {/* <Link onClick={handleNAv} to="contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </Link> */}
                    </div>
                ) : (
                    ''
                )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    {/* <Link to="main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20} />
                        </Link> */}
                    <Link to="projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </Link>
                    {isAuthenticated ? 
                    (<Link to="work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20} />
                    </Link>):('')}
                    {isAuthenticated ?
                        (<Link to="projects/create" className='rounded-full z-20 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPerson size={20} />
                        </Link>) : ('')};

                    <Link to="contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20} />
                        </Link>
                </div>
            </div>
        </div>
    );
};