import React, {useState} from 'react'
import CardProject from '../cards/CardProject'
import covid19 from '../../images/covid19.png'
import ecommerce from '../../images/ecommerce.png'
import json from '../../../Data.js'

const Projects = () => {

  const [data, setData]=useState(json.productos)
 console.log(ecommerce)
  

  return (
    <div id="Projects" className=' grid mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-80 '>
            <div className='flex h-fit'>
                <h1 className='pt-4 font-Dhyana text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Proyectos</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 pt-10 xl:pr-8 overflow-hidden'>
                {
                  data.map(item=>{
                    return <CardProject key={item.id} image={item.image} description={item.descripcion} title={item.titulo} id={"card"+item.id} iditem={item.id} github={item.github} desploy={item.despligue} language={item.lenguajes} icons={item.icons}/>
                  })
                }
                
                
            </div>
        </div>
  )
}

export default Projects