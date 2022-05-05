import React from 'react'
import CardService from '../cards/CardService'


const Services = () => {

    const array = [
        {
            'id': 1,
            'logo': 'akar-icons:github-fill',
            'title': 'Desarrollador web',
            'description': ['Aplicaciones web','Paginas web personalizadas','Landing Page', 'Mantenimiento de paginas web']
        },
        {
            'id': 2,
            'logo': 'fa-solid:cube',
            'title': 'Diseño web',
            'description': ['Diseño responsivo', 'Diseño creativo', 'Intefaces intuitivas para el usuario']
        },
        {
            'id': 3,
            'logo': 'fluent:design-ideas-20-filled',
            'title': 'Diseño funcional',
            'description': ['Clean code', 'buenas practicas de desarrollo']
        },
        {
            'id': 4,
            'logo': 'el:group',
            'title': 'Trabajo en equipo',
            'description': ['Trabajo colaborativo', 'Buena comunicación', 'Apoyo a las decisiones de grupo', 'Capacidad e aprender de los demas', 'Trabajo activo']
        }
    ]

    return (
        <div className='bg-color12'>
            <div id="Services" className=' flex flex-col sm:mr-6 gap-2 pt-16 px-4 sm:pt-0 sm:ml-28 lg:ml-60 xl:ml-50'>
                {/*<div className='flex h-fit'>
                <h1 className='pt-4 font-Dhyana text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Servicios</h1>
             </div>*/}
                <div className=' lg:pt-12'>

                </div>
                <div className='text-white font-Poppins '>
                    <div className='flex flex-col justify-center items-center text-color5 font-light'>
                        <h1 className='text-[1.9rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  text-center font-bold text-color4'>Mis servicios</h1>
                        <p className='xl:w-[50%] sm:text-[1.1rem] text-center'>
                            Diseñar y programar sitios web responsivas, crear 
                            y definir interfazes gráficas para que resulte 
                            atractiva al usuario. buena comunicacion y exelente trabajo en equipo.
                        </p>
                    </div>

                    <div className='grid xs:gap-4 sm:gap-4 sm:grid-cols-2 xl:gap-8 xl:grid-cols-3 pt-10'>
                        {array.map(item => {
                            return <CardService key={item.id} logo={item.logo} title={item.title} description={item.description} />
                        })}


                    </div>

                </div>

                <br />
            </div>
        </div>
    )
}

export default Services