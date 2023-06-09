import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';


function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>

        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ethan</span></h1>
                <h1 className='py-4 text-gray-700'>A Full-Stack Software Engineer.</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Versatile full-stack developer with a focus on delivering meaningful and impactful user experiences, proficient in both front-end design and back-end development.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/ethan-lehman-web3/'><FaLinkedinIn /></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://github.com/ETH1Elohim'><FaGithub/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="mailto:elehman.development@gmail.com"><AiOutlineMail/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='/assets/Ethan_Lehman_Software_Engineer_Resume.pdf'><BsFillPersonLinesFill/></Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main