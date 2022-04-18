import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import foto from '../../images/foto.jpg'

const AboutMe = () => {
    return (
        < div className='bg-color8'>
            <div id="Profile" className=' flex font-Poppins flex-col pt-12 xl:mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>

                <div className='flex flex-col justify-center items-center text-color5 font-light'>
                    <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  text-center font-bold text-color4'>Mi Perfil</h1>
                    <p className='xl:w-[50%] text-center sm:text-[1.1rem] pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti, tenetur ipsa suscipit delectus repellendus sed,
                        quod adipisci in dicta ut ad nobis inventore deleniti!
                        Ipsa exercitationem itaque tenetur vero suscipit.
                    </p>
                </div>

                <div className='font-Poppins grid sm:grid-cols-2'>
                    <div className='sm:pr-4  flex items-center justify-center   pb-4'>
                        <img className='w-[250px]' src={foto} />
                    </div>
                    <div className='text-color5 flex flex-col justify-center '>
                        <h1 className='text-[1.3rem] sm:text-[1.5rem] xl:text-[2rem] text-color3 font-bold pb-2 '>Sobre mÍ</h1>

                        <p className='sm:text-[1.1rem] pb-4'>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Vero, in dolor. Ipsum,
                            cupiditate at voluptates iusto ducimus
                            voluptatem tempore, recusandae mollitia,
                            impedit laborum nostrum. At sed maxime
                            perspiciatis ex ipsa.
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
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default AboutMe