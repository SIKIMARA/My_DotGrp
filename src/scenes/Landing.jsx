import React from 'react'
import Me from '../assets/IDRISS.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
export default function Landing({setSelectedPage}) {
    const isAboveMediumScreens=useMediaQuery('(min-width:1060px)')
  return (
    <section
        id='home'
        className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
           {
            isAboveMediumScreens ? (
                <div className='relative z-0 before:absolute before:-top-20
                 before:-left-20 before:rounded-t-full before:w-full 
                 before:max-w-[400px] before:h-full before:border-2
                  before:border-blue before:z-[-1]'>
                    <img
                        alt='profile'
                        className='hover:filter hover:saturate-200 transition duration-150 w-full max-w-[400px] rounded-t-full'
                        src={Me}
                    />
                </div>
            ):(
                <img
                        alt='profile'
                        className='hover:filter hover:saturate-200 transition duration-150 w-full max-w-[400px] rounded-t-full'
                        src={Me}
                    />
            )
           }  
        </div>
        <div className='basis-2/5 mt-12 md:mt-32'>
           <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once:true,amount:0.5}}
           transition={{duration:0.4}}
           variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
           }}
           >
            <p className='text-6xl font-poppins text-center md:text-start'>
                DRISS <span className='xs:relative xs:text-black 
                xs:font-bold z-20 xs:before:content-brush before:absolute
                before:-left-6 before:-top-16 before:z-[-1]'>Boug</span>
            </p>
           </motion.div>
        </div>
    </section>
  )
}
