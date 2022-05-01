import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../images/ecommerce.png'
import json from '../../Data.js'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';

const Project = () => {
    const { id } = useParams()
    const filter = json.productos.filter(item => item.id == id)
    console.log(filter)

    return (
        <div className='bg-color10  overflow-auto flex justify-center items-center'>
            <div id="Project" className='h-[100vh] grid gap-8 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-80'>
                <div className='flex h-fit'>
                    <h1 className=' font-Dhyana pt-4 text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Proyecto</h1>
                </div>
                <div className='grid xl:grid-rows-none xl:grid-cols-2 xl:justify-center xl:items-start'>
                    <div className=''>
                        <img src={filter[0].image2} alt="not fount" />
                        <div className='flex items-center justify-center'>
                            <a className='bg-color5 p-2 xl:p-2 sm:text-[1.2rem] xl:text-[1.3rem]  font-Dhyana text-center  lg:w-1/3 xl:w-1/2 text-white  rounded-md border-4 border-color4 hover:bg-color4' target="_blank" href={filter[0].despligue}>Ver Proyecto</a>
                        </div>
                        <iframe id="inlineFrameExample" className='bg-white overflow-y-hidden'
                            title="Inline Frame Example"
                            width="320"
                            height="520"
                            src={filter[0].despligue}>
                        </iframe>

                    </div>
                    <div className='flex flex-col gap-6 lg:gap-8'>
                        <h1 className='font-Dhyana text-color4 font-extrabold sm:text-[2rem] xl:text-[2.8rem] '>{filter[0].titulo}</h1>
                        <p className='text-white font-IndieFlower sm:text-[1.3rem] xl:text-[1.5rem] pb-4'>
                            {filter[0].descripcion}
                        </p>
                        <h1 className='text-color6 font-bold font-IndieFlower xl:text-[1.5rem]'>Desarrollado:</h1>
                        <div className='text-color9 w-full flex flex-wrap gap-2 justify-center items-center text-center font-bold lg:text-[1.1rem] xl:text-[1.2rem]'>

                            {filter[0].lenguajes.map((item, index) => {
                                return <div key={item} className=' p-2 rounded-md'>
                                    <InlineIcon style={{ display: "inline" }} className='flex items-center justify-center text-[1rem] sm:text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon={filter[0].icons[index]} /> {item}
                                </div>
                            })}

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project