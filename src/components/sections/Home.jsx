import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';

const Home = () => {
    function whatsapp() {

        window.open('https://api.whatsapp.com/send?text=hello&phone=3124068077')
    }

    function github() {
        window.open("https://github.com/diegoabt18")

    }

    function linkendin() {
        window.open("https://www.linkedin.com/in/diego-botello/")
    }
    return (
        < div className='css-fondos'>
            <div id="Home" className='xl:h-screen pt-4 flex flex-col lg:mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>
                {/*<div className='flex h-fit'>
                    <h1 className='pt-4 font-Dhyana text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Inicio</h1>
    </div>*/}
                <div className='text-white h-full grid grid-cols-1 xl:grid-cols-2 justify-center items-center'>
                    <div className='flex flex-col flex-wrap'>
                        <div className='flex gap-4 justify-end items-center'>

                            <InlineIcon onClick={whatsapp} style={{ display: "inline" }} className='text-[2.6rem] text-color4 cursor-pointer' icon="fa-brands:whatsapp-square" />
                            <InlineIcon onClick={github} style={{ display: "inline" }} className='text-[2.3rem] text-color4  cursor-pointer' icon="fa:github-square" />
                            <InlineIcon onClick={linkendin} style={{ display: "inline" }} className='text-[2.3rem] text-color4 cursor-pointer' icon="brandico:linkedin-rect" />
                            
                        </div>
                        <h1 className='font-Poppins text-[1.7rem] md:text-[2rem] font-bold xl:text-[3rem]'>Hola,</h1>
                        <h1 className='font-Poppins text-[1.3rem] md:text-[1.6rem] font-normal xl:text-[2rem]'>Bienvenidos a mi portafolio web</h1>
                        <p className='font-Poppins font-extralight text-color5 xl:text-[1.5rem]'> Mi nombre es Diego Botello, soy desarrollador web full stack y profesional en el area de ingenieria de sistemas.</p>
                        <NavLink to={"/"} className="bg-color3  border-b-4 border-pink-900 hover:bg-pink-600 font-bold mt-4 w-1/2  lg:w-1/2 rounded-full text-center py-2 font-Poppins text-[1.3rem]">Ver CV</NavLink>

                    </div>
                    <div>
                        <div className='flex justify-center pt-4 '>
                            <div className='w-40 h-40 bg-bgcolor2 rounded-full sm:w-52 sm:h-52 lg:w-72 lg:h-72'></div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className=' font-BlackOpsOne text-center border-b-4 border-color4  text-[2.3rem] sm:text-[2.8rem] lg:text-[3rem] leading-none'>
                                <span className='my-[-15px] text-[4rem] font-BlackOpsOne sm:text-[5rem] sm:pr-1 lg:text-[6rem] lg:pr-1 css-logo-animate leading-none'>Δ</span >IEGO BOTELLO
                                
                                
                            </h1>
                            <h1 className='text-center lg:text-[1.2rem] pt-2 font-IndieFlower'>SYSTEMS ENGINEER / FULL STACK DEVELOPER</h1>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Home