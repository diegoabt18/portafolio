import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import foto from '../../images/foto.jpg'

const AboutMe = () => {
    return (
        < div className='bg-color13 '>
            <div id="Profile" className=' flex font-Poppins flex-col pt-12 xl:mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>

                <div className='flex flex-col justify-center items-center text-color5 font-light'>
                    <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  text-center font-bold text-color4'>Mi Perfil</h1>
                    <p className='xl:w-[70%] text-center sm:text-[1.1rem] pb-4'>
                        Soy un  desarrollador en crecimiento enfocado en el "front-end"
                        desarrollo de aplicaciones web, actualmente me encuentro estudiando
                        en el bootcamp de Educamas, e culminado mis estudios recientemente en
                        programación con MisionTic en desarrollo de aplicaciones web, y soy
                        ingeniero de sistemas egresado de la Universidad de Pamplona.
                    </p>
                </div>

                <div className='font-Poppins grid sm:grid-cols-2'>
                    <div className='sm:pr-4  flex items-center justify-center   pb-4'>
                        <img className='w-[250px]' src={foto} />
                    </div>
                    <div className='text-color5 flex flex-col justify-center '>
                        <h1 className='text-[1.3rem] sm:text-[1.5rem] xl:text-[2rem] text-color3 font-bold pb-2 '>Sobre mÍ</h1>

                        <p className='sm:text-[1.1rem] pb-4'>
                            ¡Hola! Mi nombre es Diego tengo 24 años y disfruto desarrollando cosas en el mundo tecnológico. Mi interés en el desarrollo comenzó desde mi escuela comencé con los conceptos basicos de programacion creando algorimos sencillos y luego comencé mis sueños de ser un buen desarrollador en el futuro.
                            Avanzando rápidamente hasta hoy e realizado varios curso y culmine la Universidad en ingenieria de sistemas, aprendí mucho del mundo de la tecnología y los lenguajes de programación como java, JavaScript y Python utilizando framework de desarrollo como, Django, Vue, React ahora me estoy enfocando en el desarrollo web y aprendiendo cosas nuevas todos los días para ser un buen desarrollador.
                        </p>
                        <div className='grid grid-cols-1 px-6 sm:px-0 md:grid-cols-2 md:gap-y-6'>
                            <div>
                                <h1 className='text-color3 sm:text-[1.2rem] font-bold'>
                                    Nombre:
                                </h1>
                                <p>Diego Botello Tarazona</p>
                            </div>
                            <div>
                                <h1 className='text-color3 sm:text-[1.2rem] font-bold'>
                                    Telefono:
                                </h1>
                                <p>+57 3124068077</p>
                            </div>
                            <div>
                                <h1 className='text-color3 sm:text-[1.2rem] font-bold'>
                                    Email:
                                </h1>
                                <p>diegoalbertbt@gmail.com</p>
                            </div>
                            <div>
                                <h1 className='text-color3 sm:text-[1.2rem] font-bold'>
                                    LinkendIn:
                                </h1>
                                <p>DiegoBotello</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default AboutMe