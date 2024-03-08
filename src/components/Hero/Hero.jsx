import { useState } from 'react';

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

import heroImg from '../../assets/images/orangebg.png';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <main className="md:px-12 md:py-6 bg-primaryDark">
            <section className="relative min-h-[750px] bg-gradient-to-r from-primary to-secondary
                w-full md:rounded-xl shadow-md">
                <div className="container">
                    {/* navbar */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />

                    {/* hero */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center
                        min-h-[650px]">
                        <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
                            <h1
                                data-aos="fade-up"
                                className="text-3xl pl-6 md:pl-14"
                            >
                                01________
                            </h1>
                            <h1
                                data-aos="fade-up" data-aos-delay="300"
                                className="text-5xl font-bold uppercase text-shadow">
                                A Healthy Fruit
                            </h1>
                            <p
                                data-aos="fade-up" data-aos-delay="500"
                                className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Labore, voluptatem est. Tempore, voluptas praesentium.
                            </p>
                            <button
                                data-aos="fade-up" data-aos-delay="700" data-aos-offset="0"
                                className="secondary-btn">
                                Shop Now
                            </button>
                        </div>

                        <div data-aos="zoom-in">
                            <img src={heroImg} alt="home" className='relative z-10 w-[400px] 
                                img-shadow' />
                        </div>

                        <div className='md:hidden'></div>
                    </div>
                </div>

                <h1 data-aos="fade" data-aos-delay="600" data-aos-duration="2200"
                    className='large-text'>
                    Orange
                </h1>

                {sidebar && (
                    <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-r 
                        from-primary to-secondary z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='text-white flex flex-col justify-center items-center
                                gap-6'>
                                <div className='w-[1px] h-[70px] bg-white'></div>

                                <div className='inline-block p-2 rounded-full cursor-pointer border 
                                    border-white'>
                                    <FaFacebookF className='text-2xl' />
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border 
                                    border-white'>
                                    <FaLinkedinIn className='text-2xl' />
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border 
                                    border-white'>
                                    <FaInstagram className='text-2xl' />
                                </div>

                                <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Hero;
