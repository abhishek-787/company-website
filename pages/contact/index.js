import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Circles from '../../components/Circles'

import {BsArrowRight} from 'react-icons/bs'




const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <div className='flex flex-col w-full max-[700px] '>
        <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden'
         className='h2 text-center mb-12'>Let's <span className='text-accent'>connect.</span></motion.h2>
        <motion.form variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' 
         className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='name' className='input' />
            <input type='text' placeholder='email' className='input' />
          </div>
          <input type='text' placeholder='subject' className='input' />
          <textarea placeholder='message' className='textarea'></textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px]
          px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
            <BsArrowRight/>
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
