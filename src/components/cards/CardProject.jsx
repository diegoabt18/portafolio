import React from 'react'
import ima from '../../images/covid19.png'
import { NavLink } from 'react-router-dom';
import 'animate.css';
const CardProject = ({ image, id, title, description, github, desploy, language, icons, iditem }) => {

  function OnHover() {
    const item = document.getElementById(id)
    console.log()
    item.classList.remove("hidden")
  }

  function OutHover() {
    const item = document.getElementById(id)
    item.classList.add("hidden")
  }

  return (

    /*<div className='relative hvr-shrink rounded-md shadow-shadow-menu  ' onMouseEnter={OnHover} onMouseLeave={OutHover}>
      <img className='' src={image} alt="example-image" />
      <div id={id} className='bg-color9 overflow-hidden absolute top-0 w-full h-full animate__animated animate__flipInX  hidden '>
        <div className='grid grid-cols-1 p-1 gap-2 h-full'>
          <div className='animate__animated animate__backInDown '>
            <h1 className='font-RobotoMono font-bold text-center w-full cursor-pointer border-b-4 hvr-underline-from-center border-color4 text-color3 lg:text-[1.5rem]'>{title}</h1>
            <p className='text-[1rem] text-color1 font-Dhyana hidden sm:block xl:text-[1.2rem] xl:px-2'>{description} </p>
          </div>
          <div className='flex justify-center items-end pb-2 animate__animated animate__backInUp'>
            <NavLink to={"/project/"+iditem} className='button hvr-pulse border-2 border-color4 bg-color4 lg:bg-color4 lg:hover:bg-color8 rounded-md p-1 w-fit text-[0.8rem] text-white text-center sm:w-1/2 xl:text-[1.3rem]' >Ver mas..</NavLink>

          </div>
        </div>

      </div>
  </div>*/
    <div className='relative  hvr-shrink overflow-hidden  shadow-shadow-menu border-2 border-color8' onMouseEnter={OnHover} onMouseLeave={OutHover}>
      <img className='shadow-inner border-2 border-color1' src={image} alt="example-image" />

      <div id={id} className='hidden absolute outline-8 outline-transparent border-2 border-transparent  bottom-0 bg-color8  w-full h-full animate__animated animate__zoomIn'>
        <div className='relative w-full h-full flex justify-center items-center'>
          <NavLink to={"/project/" + iditem} className='bg-color1   border-slate-900 hover:bg-color4 text-white font-semibold py-2 px-4 border-b-4 hover:border-slate-800 rounded-full animate__animated  animate__zoomIn animate__delay-1s'> {/* animate__delay-1s */}
            <h1 className='xl:text-xl '>Ver mas..</h1>
          </NavLink>
          
          <div className='absolute bottom-0 bg-color8  w-full'>
            <h1 className='font-Poppins font-normal text-center w-full cursor-pointer border-t-4 border-color3 text-color5 lg:text-[1.5rem]'>{title}</h1>
          </div>
        </div>
      </div>
    </div>






  )
}

export default CardProject