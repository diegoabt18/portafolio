import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        < div className='css-fondos'>
            <div id="Home" className='h-screen grid mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>
                <div className='flex h-fit'>
                    <h1 className='pt-4 font-Dhyana text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Inicio</h1>
                </div>
                <div className='font-Audiowide text-white pt-2 lg:flex xl:grid xl:gap-4 xl:grid-cols-2 w-full xl:justify-around'>
                    <div className='lg:flex lg:flex-col lg:justify-center lg:gap-6 lg:w-[50%]'>
                        <div className='text-[2.3rem] sm:text-[2.5rem] lg:text-[4rem] leading-none'>
                        Hola, <span className='text-[2rem] sm:text-[2.3rem] lg:text-[2.7rem]'> soy</span>
                        </div>
                        
                            
                            
                            <h1 className=' font-BlackOpsOne text-center border-b-4 border-color4  text-[2.3rem] sm:text-[2.8rem] lg:text-[3rem] '>  
                            <span className='my-[-15px] text-[4rem] font-BlackOpsOne sm:text-[5rem] sm:pr-1 lg:text-[6rem] lg:pr-1 css-logo-animate'>Δ</span >iego  Botello</h1>
                            <h1 className='text-center lg:text-[1.2rem] pt-2 font-IndieFlower'>SYSTEMS ENGINEER / FULL STACK DEVELOPER</h1>
                            <span className='text-[2rem] sm:text-[2.3rem] lg:text-[2.7rem]'> Bienvenido a mi portafolio web.</span>
                            <NavLink to={"/"} className="bg-color3 lg:w-1/2 rounded-full text-center py-2">Ver CV</NavLink>
                        {/*
                        <div>
                        <div className='flex justify-center '>
                        <h1 className=' font-Audiowide text-center border-b-4 border-color4  text-[2.3rem] sm:text-[2.8rem] lg:text-[3rem] '>  <span className='my-[-15px] text-[4rem] font-BlackOpsOne sm:text-[5rem] sm:pr-1 lg:text-[6rem] lg:pr-1 css-logo-animate'>Δ</span >iego  Botello</h1>

                        </div>
                        <h1 className='text-center font-IndieFlower'>SYSTEMS ENGINEER / FULL STACK DEVELOPER</h1>
                        </div>*/}

                    </div>
                    <div className='flex justify-center  pt-4 lg:w-[50%]'>
                        <div className='w-40 h-40 bg-bgcolor2 rounded-full sm:w-52 sm:h-52 lg:w-72 lg:h-72'></div>
                    </div>
                </div>
                {/*
                <h1 className=' hidden font-ShadowsIntoLight text-white pt-2 text-[1.5rem] sm:text-[2rem] lg:text-[3rem]'>soy profesional en el area de ingeniera de sistemas enfocado y apasionado en el mundo del desarrollo de plataformas web. </h1>
                <h1 className='font-ShadowsIntoLight text-white pt-2 text-[1.5rem] sm:text-[2rem] lg:text-[3rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod earum eligendi explicabo, natus eveniet molestiae atque fugiat  </h1>
                */}
                <br /><br /><br />

            </div>
        </div>
    )
}

export default Home