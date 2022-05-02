import React from 'react'
import emailjs from 'emailjs-com'
import { NavLink } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';

const Contac = () => {

    function sendMessage(e) {
        const item1 = document.getElementById("message");
        const item2 = document.getElementById("name");
        const item3 = document.getElementById("email");
        const item4 = document.getElementById("company");
        const item5 = document.getElementById("position");


        e.preventDefault();
        emailjs.init('BzKLYbHp5Rc_hZrlS');
        emailjs.sendForm('service_jv7b3s9', 'template_myvqx0e', e.target)
            .then(res => {
                console.log(res)
                item1.value = ""
                item2.value = ""
                item3.value = ""
                item4.value = ""
                item5.value = ""
                alert("Mensaje enviado exitosamente")
            })
    }

    return (
        <div className='bg-color12'>
            <div id="Contac" className='flex  font-Poppins flex-col pt-12 xl:mr-6 gap-2 mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-60 xl:ml-50'>
                <div className='flex flex-col justify-center items-center text-color5 font-light'>
                    <h1 className='text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  text-center font-bold text-color4'>Contactame</h1>
                </div>
                <div className='grid grid-cols-3 gap-8 text-color5 font-Poppins'>
                    <div className='css-fondos p-6 shadow-shadow-menu rounded-xl flex gap-8 justify-center items-center '>
                        <div>
                            <InlineIcon style={{ display: "inline" }} className='text-[3rem] sm:text-[1.8rem] lg:text-[2.2rem]  w-full text-center text-color3 ' icon="bi:telephone-fill" />
                        </div>
                        <div>
                            <h1>Numero telefonico</h1>
                            <p>+57 3124068077</p>
                        </div>
                    </div>
                    <div className='css-fondos p-6 shadow-shadow-menu rounded-xl flex gap-8 justify-center items-center '>
                        <div>
                            <InlineIcon style={{ display: "inline" }} className='text-[3rem] sm:text-[1.8rem] lg:text-[2.2rem]  w-full text-center text-color3 ' icon="clarity:email-solid-badged" />
                        </div>
                        <div>
                            <h1>Correo electronico</h1>
                            <p>diegoalbertbt@gmail.com</p>
                        </div>
                    </div>
                    <div className='css-fondos p-6 shadow-shadow-menu rounded-xl flex gap-8 justify-center items-center '>
                        <div>
                            <InlineIcon style={{ display: "inline" }} className='text-[3rem] sm:text-[1.8rem] lg:text-[2.2rem]  w-full text-center text-color3 ' icon="bi:linkedin" />
                        </div>
                        <div>
                            <h1>linkedin</h1>
                            <p>Diego Botello</p>
                        </div>
                    </div>

                </div>
                <div className='pt-10 font-Poppins '>
                    <form onSubmit={sendMessage} >
                        <label htmlFor="message" className='text-color5 text-[1.3rem] lg:text-[1.5rem] font-bold'>
                            Mensaje
                        </label>
                        <div className='flex bg-transparent rounded-xl'>

                            <textarea name="message" id="message" cols="auto" rows="8" placeholder='Ingrese un mensaje' className='bg-transparent border-2   border-color9 text-color5 lg:text-[1.2rem] p-2 w-full  rounded-md' required ></textarea>
                        </div>
                        <br />
                        <label htmlFor="you" className='text-color5 text-[1.3rem] lg:text-[1.5rem] font-bold  '>Acerca de ti</label>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <div className='grid gap-2'>
                                <div className='bg-transparent rounded-xl'>
                                    <input type="text" name="name" id="name" placeholder='Nombre Completo' className='bg-transparent text-color5 p-2 border-2 w-full border-color9 rounded-md lg:text-[1.2rem]' required />
                                </div>
                                <div className='bg-transparent rounded-xl'>
                                    <input type="text" name="email" id="email" placeholder='Correo electronico' className='bg-transparent text-color5 p-2 border-2 w-full border-color9 rounded-md lg:text-[1.2rem]' required />
                                </div>
                            </div>
                            <div className='grid gap-2'>
                                <div className='bg-transparent rounded-xl'>
                                    <input type="text" name="company" id="company" placeholder='Compañia o empresa' className='bg-transparent text-color5 p-2 border-2 w-full border-color9 rounded-md lg:text-[1.2rem]' required />
                                </div>
                                <div className='bg-transparent rounded-xl'>
                                    <input type="text" name="position" id="position" placeholder='Cargo' className='bg-transparent text-color5 p-2 border-2 w-full border-color9 rounded-md lg:text-[1.2rem]' required />
                                </div>
                            </div>
                        </div>
                        <br />
                        <button type='submit' className='border-b-4  bg-color3  border-pink-900 hover:bg-pink-600 text-white w-1/2 text-[1.3rem] lg:text-[1.5rem] p-2  rounded-full'>Contactame</button>
                    </form>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Contac