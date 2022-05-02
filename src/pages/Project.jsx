import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../images/ecommerce.png'
import json from '../../Data.js'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';

const color = [{ 'html': '#F1662A' }, { 'css': '##33A9DC' }, { 'js': '#F5DE19' }, { 'nodejs': '#83CD29' }, { 'react': '#00D8FF' }, { 'tailwind': '#44A8B3' }, { 'bootstrap': '#563D7C' }]

const Project = () => {
    const { id } = useParams()
    const filter = json.productos.filter(item => item.id == id)
    console.log(filter)


    return (
        <div className='bg-color13 font-Poppins overflow-auto flex justify-center items-center'>

            <div id="Project" className='h-[100vh] grid gap-8 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 items-center justify-center'>
                <div className='flex flex-col gap-8 items-start'>
                    <div className='flex flex-col justify-center items-center text-color5 font-light'>
                        <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  text-center font-bold text-color4'>PROYECTO WEB</h1>

                    </div>
                    <div className='grid xl:grid-rows-none gap-4 xl:grid-cols-2 xl:justify-center xl:items-start'>

                        <div className=''>

                            <img src={filter[0].image2} alt="not fount" />


                        </div>
                        <div className='flex flex-col w-full h-full gap-6 lg:gap-8 justify-center items-center'>
                            <h1 className=' text-color4 font-bold sm:text-[2rem] xl:text-[2.8rem] '>{filter[0].titulo}</h1>

                            <div>
                                <p className='text-color5 font-extralight sm:text-[1.3rem]  pb-4'>
                                    {filter[0].descripcion}
                                </p>
                                <h1 className='text-color3 font-bold  xl:text-[1.5rem]'>Front-end:</h1>
                                <div className='text-color9 w-full flex flex-wrap gap-2 justify-center items-center text-center font-bold lg:text-[1.1rem] xl:text-[1.2rem]'>

                                    {filter[0].lenguajes.map((item, index) => {
                                        return <div key={item} className=' p-2 rounded-md'>
                                            <InlineIcon style={{ display: "inline" }} className='flex items-center justify-center text-[1rem] sm:text-[1.5rem] text-color1 sm:text-white lg:text-[3.5rem] ' icon={filter[0].icons[index]} />
                                        </div>
                                    })}

                                </div>
                                {
                                    (filter[0].iconsback.length == 0 ? "" :
                                        <div>
                                            <h1 className='text-color3 font-bold  xl:text-[1.5rem]'>Back-end:</h1>
                                            <div className='text-color9 w-full flex flex-wrap gap-2 justify-center items-center text-center font-bold lg:text-[1.1rem] xl:text-[1.2rem]'>

                                                {filter[0].iconsback.map((item, index) => {
                                                    return <div key={item} className=' p-2 rounded-md'>
                                                        <InlineIcon style={{ display: "inline" }} className='flex items-center justify-center text-[1rem] sm:text-[1.5rem] text-color1 sm:text-white lg:text-[3.5rem] ' icon={filter[0].iconsback[index]} />
                                                    </div>
                                                })}

                                            </div>
                                        </div>
                                    )
                                }

                                <div className='flex items-center justify-center pt-6 gap-8'>
                                    <a className='bg-color3 flex items-center justify-center gap-4   border-b-4 border-pink-900 hover:bg-pink-600  p-2  sm:text-[1.2rem] xl:text-[1.3rem]  font-Dhyana text-center  lg:w-1/3 xl:w-1/2 text-white  rounded-full' target="_blank" href={filter[0].despligue}>
                                        <InlineIcon style={{ display: "inline" }} className='flex items-center justify-center text-[1rem] sm:text-[1.5rem] text-color1 sm:text-white lg:text-[2rem] ' icon="eos-icons:deploy" />
                                        Despliegue
                                    </a>
                                    <a className='bg-color1 flex items-center justify-center gap-4   border-slate-900 hover:bg-color4 border-b-4  p-2  sm:text-[1.2rem] xl:text-[1.3rem]  font-Dhyana text-center  lg:w-1/3 xl:w-1/2 text-white  rounded-full hover:border-slate-800' target="_blank" href={filter[0].github}>
                                        <InlineIcon style={{ display: "inline" }} className='flex items-center justify-center text-[1rem] sm:text-[1.5rem] text-color1 sm:text-white lg:text-[2rem] ' icon="akar-icons:github-fill" />
                                        Github
                                    </a>


                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Project