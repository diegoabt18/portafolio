import React from 'react'
import ima from '../../images/covid19.png'
import { NavLink } from 'react-router-dom';
import 'animate.css';

const animations=["animate__fadeInUpBig", "animate__fadeInTopLeft", "animate__fadeInTopRight","animate__fadeInBottomLeft","animate__fadeInBottomRight"]
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

   
    <div className={"relative  hvr-shrink overflow-hidden  shadow-shadow-menu border-2 border-color8 animate__animated " +animations[ Math.ceil(Math.random() * animations.length)]} onMouseEnter={OnHover} onMouseLeave={OutHover}>
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