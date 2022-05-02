import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';

const CardService = ({ logo, title, description }) => {
    return (
        <div className='flex w-full flex-col  sd:flex-row  p-2 css-fondos shadow-shadow-menu  text-color9 sm:grid  sm:aspect-square sm:p-2 md:p-6'>
            <div className='w-2/3 xs:w-full  sm:w-auto flex flex-col gap-4 items-center justify-center lg:text-[1.2rem]  xl:text-[1.3rem]'>
                <InlineIcon style={{ display: "inline" }} className='text-[3rem] sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] w-full text-center text-color3 ' icon={logo} />
                <h1 className='text-white  sm:text-left'>{title}</h1>
            </div>
            <p className='w-fit  sm:w-auto pt-2'>
                {description}
            </p>
        </div>
    )
}

export default CardService