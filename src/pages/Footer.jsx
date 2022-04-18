import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';

const Footer = () => {

    function whatsapp() {
      
        window.open('https://api.whatsapp.com/send?text=hello&phone=3124068077')
    }

    function github() {
        window.open("https://github.com/diegoabt18")
        
    }

    function linkendin(){
        window.open("www.linkedin.com/in/diego-botello")
    }

    return (
        <div id='CV' className='bg-color1 lg:bg-color4'>
            <div className=' mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-80'>
                <div className='flex gap-4 justify-center p-4 items-center'>
                    
                    <InlineIcon onClick={whatsapp} style={{ display: "inline" }} className='text-[2.2rem] text-color4 sm:text-color1 ' icon="fa-brands:whatsapp-square" />
                    <InlineIcon onClick={github} style={{ display: "inline" }} className='text-[1.9rem] text-color4 sm:text-color1 ' icon="fa:github-square" />
                    <InlineIcon onClick={linkendin} style={{ display: "inline" }} className='text-[1.9rem] text-color4 sm:text-color1 ' icon="brandico:linkedin-rect" />
                    <InlineIcon style={{ display: "inline" }} className='text-[2.1rem] text-color4 sm:text-color1' icon="academicons:cv-square" />

                </div>

            </div>
        </div>

    )
}

export default Footer