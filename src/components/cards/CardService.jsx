import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';

const CardService = ({ logo, title, description }) => {
    return (
        <div className='flex w-full h-full flex-col content-start xs:aspect-auto  xs:py-8 sd:py-8 sm:py-8 sd:flex-row  p-2 css-fondos shadow-shadow-menu  text-color9 sm:grid  sm:aspect-square sm:p-2 md:p-6'>

            <div className='flex items-center justify-center xs:pb-8'>
                <div className='w-40 flex flex-col items-center'>
                    <InlineIcon style={{ display: "inline" }} className='text-[3rem]  sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem]  text-center text-color3 ' icon={logo} />

                    <h1 className='text-white  sm:text-left'>{title}</h1>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden '>
                {description.map(item => {
                    return <div className=' sm:w-auto  flex gap-2 pb-2 lg:gap-6'>
                        <div className='w-[1rem] h-[1rem] pr-6'>
                            <InlineIcon style={{ display: "inline" }} className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem]  text-color4 ' icon="akar-icons:check-box" />
                        </div>
                        <p className=''>{item}</p>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default CardService