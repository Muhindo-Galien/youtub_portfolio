/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { AiOutlineTwitter,AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div  className='max-w-7xl  flex flex-col p-5 pb-0 mx-auto justify-center items-center  text-gray-300 font-globalFont'>
        <div className='relative mb-10 pt-10'>
          <img src="https://i.ibb.co/p17bsGC/DSC-3662.jpg" alt="profile" className='w-60 h-34 border-2 border-orange-500 rounded-lg '/>
          <div className='flex items-center justify-center'>
            <Link href="/">
              <FaLinkedinIn className='text-white bg-orange-600 text-5xl p-1 rounded-full absolute -bottom-5  border-orange-500 z-1 cursor-pointer'/>
            </Link>
            <Link href="/">
              <AiOutlineGithub className='text-white bg-orange-600 text-5xl p-1 rounded-full absolute  -bottom-5  right-6 border-orange-500 cursor-pointer'/>
            </Link>
            <Link href="/">
              <AiOutlineTwitter className='text-white bg-orange-600 text-5xl p-1 rounded-full absolute -bottom-5  left-6 border-orange-500 cursor-pointer'/>
            </Link>
          </div>
        </div>
        <div className='text-gray-300 flex flex-col justify-center items-center'>
            <span>Hello there !</span>
            <h1 className='text-2xl font-bold pt-2'> I'm Galien Dev</h1>
            <h1 className='text-xl text-gray-300'>Web developer</h1>
        </div>
        <div className='flex mt-6'>
          <a href="./assets/CV galien.pdf" className='p-2 mx-2 border-2 border-gray-200 rounded  bg-gray-200 text-gray-900 hover:text-gray-200 hover:bg-gray-900  font-semibold'>Download Cv</a>
          <a href="#about" className='p-2 mx-2 border-2 border-gray-200 rounded  bg-gray-200 text-gray-900 hover:text-gray-200 hover:bg-gray-900  font-semibold'>About Me</a>
        </div>

    </div>
  )
}

export default Hero