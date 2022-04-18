import React from 'react'
import './Style.css'
import Hexagon from '../actions/Hexagon'
import imgCss from '../../images/css.png'
import imgHtml from '../../images/html.png'
import imgJs from '../../images/js.png'
import { Icon, InlineIcon } from '@iconify/react';

const Skills = () => {

    const icons = ['icomoon-free:html-five', 'simple-icons:css3', 'simple-icons:javascript', 'fontisto:nodejs', 'akar-icons:react-fill', 'simple-icons:tailwindcss', 'akar-icons:bootstrap-fill', 'bxl:java']
    const imagIcons = ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'vscode-icons:file-type-js-official']

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
        <div id="Skills" className='pt-10 font-Poppins  flex flex-col mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>

            <div className='flex flex-col justify-center items-center text-color5 font-light'>
                <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[3rem]  text-center font-bold text-color4'>Mis Skills</h1>
            </div>
            <div className='flex flex-col lg:flex-row '>

                <div className="flex flex-col gap-5 sm:gap-8 xl:gap-12  justify-center items-center h-1/2 ">
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"html1"} image={imgHtml} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"css2"} image={imgCss} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"js3"} image={imgJs} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"react4"} image={imgHtml} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"java5"} image={imgHtml} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                    <div className='flex gap-1 lg:gap-3'>
                        <Hexagon idclass={"php6"} image={imgHtml} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                        <Hexagon idclass={"laravel7"} image={imgHtml} color={''} OnHoverLeave={OnHoverLeave} OnHoverEnter={OnHoverEnter} />
                    </div>
                </div>

                <div className="code-description   text-white lg:pl-8 md:pr-2 w-full lg:h-[400px]">

                    <div id="profile" className="html-desc ">
                        <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]   font-bold text-color3'>Experiencia</h1>

                        <p className='text-color5 sm:text-[1.1rem] '>
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
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[0]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color6  font-bold lg:text-[2.5rem] '>HTML</h1>
                            <p><span className='font-bold text-color5 '>Duración: </span>6 meses</p>
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
                    <div id="css2" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[1]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color7  font-bold lg:text-[2.5rem]'>CSS</h1>
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
                    <div id="js3" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color4  font-bold lg:text-[2.5rem]'>JavaScript</h1>
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
                    <div id="react4" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color6  font-bold lg:text-[2.5rem]'>HTML5</h1>
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
                    <div id="java5" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color6  font-bold lg:text-[2.5rem]'>HTML5</h1>
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
                    <div id="php6" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                        <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color6  font-bold lg:text-[2.5rem]'>HTML5</h1>
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
                    <div id="laravel7" className="relative html-desc hidden h-full w-full sm:text-[1.1rem]">
                    <InlineIcon className='top-0 right-0 absolute opacity-20  lg:text-[20rem] text-color4 cursor-pointer' icon={imagIcons[2]} />
                        <div className='absolute flex flex-col gap-2'>
                            <h1 className='text-color6  font-bold lg:text-[2.5rem]'>HTML5</h1>
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
            </div>
        </div>



    )
}

export default Skills