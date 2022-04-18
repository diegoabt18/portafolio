import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import 'animate.css';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    console.log(location)

    function Open() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    }

    function activeMenu(id) {
        console.log(id)
        const active = document.querySelectorAll(".menu-item")

        for (let index = 0; index < active.length; index++) {
            active[index].classList.remove("bg-color4");
            //active[index].classList.remove("bg-color5");
            active[index].classList.add("bg-color5");
        }


        active[id].classList.remove("bg-color5");
        active[id].classList.toggle("bg-color4");

    }

    return (
        <header className='w-full top-0 sm:w-20 lg:w-56 sm:h-full bg-color1 fixed z-10 sm:overflow-y-scroll no-scrollbar shadow-md'>
            <nav className="shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between lg:justify-center lg:py-8">
                        <div className="flex  ">
                            <div className=' lg:rounded-full lg:bg-bgcolor1 lg:backdrop-blur-3xl'>
                                <NavLink to={"/"} className="flex items-center css-logo-animate sm:pt-8 sm:pb-6 lg:w-32 lg:h-32 lg:text-center lg:justify-center  ">
                                    <p className='  font-BlackOpsOne text-[4rem] my-[-15px] lg:text-[6.5rem] '>Δ</p>
                                </NavLink>
                            </div>

                        </div>
                        <div className="sm:hidden flex items-center">
                            <button onClick={Open} className="outline-none mobile-menu-button">
                                <Icon className='text-[1.5rem] text-color4' icon="dashicons:menu-alt3" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile-menu bg-color5 sm:flex sm:overflow-hidden sm:bg-color1  ">
                    <ul className="font-Poppins  sm:w-full sm:flex sm:flex-col  ">
                        <li className="sm:flex ">
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            {(location.pathname == "/") ?
                                <a onClick={() => activeMenu(0)} href="#Home" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                    <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] sm:text-[2rem] text-color1 sm:text-white lg:text-[2rem]' icon="clarity:home-line" />
                                    <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Inicio </h1>
                                </a>
                                :
                                <NavLink onClick={() => activeMenu(0)} to={"/"} className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                    <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] sm:text-[2rem] text-color1 sm:text-white lg:text-[2rem]' icon="clarity:home-line" />
                                    <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Inicio </h1>
                                </NavLink>
                            }

                        </li>
                        <li className="sm:flex ">
                            
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            <a onClick={() => activeMenu(1)} href="#Services" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon="carbon:cloud-service-management" />
                                <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Servicios </h1>
                            </a>
                        </li>
                        <li className="sm:flex ">
                            
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            <a onClick={() => activeMenu(2)} href="#Profile" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon="carbon:user-profile" />
                                <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Perfil </h1>
                            </a>
                        </li>
                        <li className="sm:flex ">
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            <a onClick={() => activeMenu(3)} href="#Projects" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon="cil:folder-open" />
                                <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Proyectos </h1>
                            </a>
                        </li>
                        <li className="sm:flex ">
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            <a onClick={() => activeMenu(4)} href="#Contac" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon="clarity:phone-handset-line" />
                                <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> Contacto </h1>
                            </a>
                        </li>
                        <li className="sm:flex ">
                            <div className='menu-item bg-color5 w-3 hidden sm:block'></div>
                            <a onClick={() => activeMenu(5)} href="#CV" className="flex gap-2 sm:gap-0 lg:gap-3 sm:w-full lg:pl-5 pl-4 text-sm px-2 py-4 hover:text-white hover:bg-color4 focus:bg-color4 font-semibold lg:font-light">
                                <InlineIcon style={{ display: "inline" }} className='text-[1.5rem] text-color1 sm:text-white lg:text-[2rem]' icon="iconoir:page-flip" />
                                <h1 className='flex justify-center items-center sm:hidden lg:flex lg:text-[1.3rem] lg:text-white'> CV </h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header