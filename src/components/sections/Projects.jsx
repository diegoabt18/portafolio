import React, { useState } from 'react'
import CardProject from '../cards/CardProject'
import covid19 from '../../images/covid19.png'
import ecommerce from '../../images/ecommerce.png'
import json from '../../../Data.js'
import CategoryButton from '../actions/CategoryButton'

const Projects = () => {

  const [data, setData] = useState(json.productos)
  console.log(ecommerce)


  return (
    <div className='bg-color10'>
      <div id="Projects" className='  pt-4 flex flex-col lg:mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50 '>
        <div className='flex flex-col justify-center items-center text-color5 font-light pb-6'>
          <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[3rem]  text-center font-bold text-color4'>Mis Proyectos</h1>
          <p className='xl:w-[60%]  text-center sm:text-[1.1rem] pt-2 pb-4 font-Poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, tenetur ipsa suscipit delectus repellendus sed,
            quod adipisci in dicta ut ad nobis inventore deleniti!
            Ipsa exercitationem itaque tenetur vero suscipit.
          </p>
        </div>
        <div>
          <div className='flex flex-wrap items-center w-full justify-center gap-2'>
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 pt-10  overflow-hidden'>
            {
              data.map(item => {
                return <CardProject key={item.id} image={item.image} description={item.descripcion} title={item.titulo} id={"card" + item.id} iditem={item.id} github={item.github} desploy={item.despligue} language={item.lenguajes} icons={item.icons} />
              })
            }
            <br />
            <br />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects