import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './Background.module.css'; // Import CSS module

export default function Background() {
    return (
        <div className={styles.backgroundContainer}>
            <img
                className={styles.backgroundImage}
                src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTk4ODY5ODg5MjI4NzQ0NDU1/what-is-introversion-and-do-you-have-it.webp"
                alt="Background"
            />
            <div className={styles.backgroundOverlay}>
                <div className='max-w-[700px] m-auto flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Some One</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', 
                                2000, 
                                'Coder', 
                                2000, 
                                'Tech Enthusiast', 
                                2000, 
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
