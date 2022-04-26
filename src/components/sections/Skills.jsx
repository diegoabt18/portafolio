import React from 'react'
import './Style.css'
import Hexagon from '../actions/Hexagon'
import imgCss from '../../images/css.png'
import imgHtml from '../../images/html.png'
import imgJs from '../../images/js.png'
import { Icon, InlineIcon } from '@iconify/react';
import 'animate.css';

const Skills = () => {

    const icons = ['icomoon-free:html-five', 'simple-icons:css3', 'simple-icons:javascript', 'fontisto:nodejs', 'akar-icons:react-fill', 'simple-icons:tailwindcss', 'akar-icons:bootstrap-fill', 'bxl:java']
    const imagIcons = ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'vscode-icons:file-type-js-official', 'vscode-icons:file-type-node', 'vscode-icons:file-type-reactjs', 'vscode-icons:file-type-tailwind', 'cib:bootstrap']

    function OnHoverEnter(e, idclass) {
        const item1 = document.getElementById("profile");
        const item2 = document.getElementById(idclass);
        item1.classList.toggle("hidden");
        item2.classList.toggle("hidden");
        console.log(e, idclass)
    }

    function OnHoverLeave(e, idclass) {
        const item1 = document.getElementById("profile");
        const item2 = document.getElementById(idclass);
        item1.classList.toggle("hidden");
        item2.classList.toggle("hidden");
        console.warn("Salio", idclass)
    }

    return (
        <div id="Skills" className='lg:pt-10 font-Poppins  flex flex-col mr-6 gap-2 mt-16 px-4 sm:mt-10 xl:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>

            <div className='flex flex-col justify-center items-center text-color5 font-light pb-6'>
                <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[3rem]  text-center font-bold text-color4'>Mis Skills</h1>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>

                <div className="flex flex-col gap-5 sm:gap-8 xl:gap-12  justify-center items-center h-1/2 ">
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"html1"} image={icons[0]} color={'text-[#F1662A]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"css2"} image={icons[1]} color={'text-[#33A9DC]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"js3"} image={icons[2]} color={'text-[#F5DE19]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"nodejs4"} image={icons[3]} color={'text-[#83CD29]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"react5"} image={icons[4]} color={'text-[#00D8FF]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"tailwind6"} image={icons[5]} color={'text-[#44A8B3]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"bootstrap7"} image={icons[6]} color={'text-[#563D7C]'} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                </div>

                <div className="code-description pt-5 lg:pt-0   text-white lg:pl-8 md:pr-2 w-full h-[250px]  sm:h-[300px] lg:h-[400px]">

                    <div id="profile" className="html-desc ">
                        <h1 className='animate__animated animate__zoomIn text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]   font-bold text-color3'>Experiencia</h1>

                        <p className='animate__animated animate__fadeIn animate__delay-1s text-color5 sm:text-[1.1rem] '>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab illo blanditiis libero recusandae in.
                            Placeat libero exercitationem incidunt atque fuga in,
                            blanditiis laudantium omnis ea corporis facilis nihil
                            eligendi mollitia?

                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab illo blanditiis libero recusandae in.
                            Placeat libero exercitationem incidunt atque fuga in,
                            blanditiis laudantium omnis ea corporis facilis nihil
                            eligendi mollitia?
                        </p>

                    </div>

                    <div id="html1" className="relative html-desc bg-transparent hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[0]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-color6 animate__animated animate__zoomIn font-bold lg:text-[2.5rem] '>HTML</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>HTML5 (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="css2" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[1]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-color7 animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>CSS</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>CSS (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="js3" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-[#F5DE19] animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>JavaScript</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>JS (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="nodejs4" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[3]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-[#83CD29] animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>Node</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>3 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>Node.js (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="react5" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[4]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-[#00D8FF] animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>React</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>React Framework (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tailwind6" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[5]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-[#44A8B3] animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>Tailwind</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>Tailwind css (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div id="bootstrap7" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='animate__animated animate__slideInRight   top-0 right-0 absolute opacity-20  lg:text-[20rem] text-[#563D7C] cursor-pointer' icon={imagIcons[6]} />
                        <div className='absolute  flex flex-col gap-2'>
                            <h1 className='text-[#563D7C] animate__animated animate__zoomIn font-bold lg:text-[2.5rem]'>Bootstrap</h1>
                            <div className='asdaswwwwwe animate__animated animate__fadeIn animate__delay-1s'>
                            <p><span className='font-bold text-color5'>Duración: </span>6 meses</p>
                            <p><span className='font-bold text-color5'>Lenguaje: </span>Bootstrap css (most recent)</p>
                            <p><span className='font-bold text-color5'>Descripcción: </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Molestias, officiis ipsum eum accusantium sit
                                voluptas eos fugiat corrupti deleniti est doloremque
                                esse, inventore dolore. Earum ut minus accusantium
                                nisi veritatis?
                            </p>
                            <div className="code-icon"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <br />
        </div>



    )
}

export default Skills