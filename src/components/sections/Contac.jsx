import React from 'react'
import emailjs from 'emailjs-com'

const Contac = () => {

    function sendMessage(e) {
        const item1=document.getElementById("message");
        const item2=document.getElementById("name");
        const item3=document.getElementById("email");
        const item4=document.getElementById("company");
        const item5=document.getElementById("position");
        

        e.preventDefault();
        emailjs.init('BzKLYbHp5Rc_hZrlS');
        emailjs.sendForm('service_jv7b3s9', 'template_myvqx0e',e.target)
        .then(res=>{
            console.log(res)
            item1.value=""
            item2.value=""
            item3.value=""
            item4.value=""
            item5.value=""
            alert("Mensaje enviado exitosamente")
        })
    }

    return (
        <div id="Contac" className=' grid mt-16 px-4 sm:mt-0 sm:ml-28 lg:ml-80'>
            <div className='flex h-fit'>
                <h1 className='pt-4 font-Dhyana text-xl text-white border-b-4 border-color4 lg:text-[1.6rem]'>Contactame</h1>
            </div>
            <div className='pt-10 font-IndieFlower xl:pr-8'>
                <form onSubmit={sendMessage} >
                    <label htmlFor="message" className='text-white text-[1.3rem] lg:text-[1.5rem] font-bold'>
                        Mensaje
                    </label>
                    <div className='flex  bg-bgColor3'>

                        <textarea name="message" id="message" cols="auto" rows="8" placeholder='Ingrese un mensaje' className='bg-transparent text-color5 lg:text-[1.5rem] p-2 w-full border-[1px] border-color5 rounded-md' required ></textarea>
                    </div>
                    <br/>
                    <label htmlFor="you" className='text-white text-[1.3rem] lg:text-[1.5rem] font-bold  '>Acerca de ti</label>
                    <div className='grid md:grid-cols-2 gap-2'>
                        <div className='grid gap-2'>
                            <div className='bg-bgColor3'>
                                <input type="text" name="name" id="name" placeholder='Nombre Completo' className='bg-transparent text-color5 p-2 border-[1px] w-full border-color5 rounded-md lg:text-[1.5rem]' required />
                            </div>
                            <div className='bg-bgColor3'>
                                <input type="text" name="email" id="email" placeholder='Correo electronico' className='bg-transparent text-color5 p-2 border-[1px] w-full border-color5 rounded-md lg:text-[1.5rem]' required />
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <div className='bg-bgColor3'>
                                <input type="text" name="company" id="company" placeholder='Compañia o empresa' className='bg-transparent text-color5 p-2 border-[1px] w-full border-color5 rounded-md lg:text-[1.5rem]' required />
                            </div>
                            <div className='bg-bgColor3'>
                                <input type="text" name="position" id="position" placeholder='Cargo' className='bg-transparent text-color5 p-2 border-[1px] w-full border-color5 rounded-md lg:text-[1.5rem]' required />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button type='submit' className='border-2 border-color4 bg-color5 text-white w-1/2 text-[1.3rem] lg:text-[1.5rem] p-2 hover:bg-color4'>Contactame</button>
                </form>
            </div>
            <br/>
        </div>
    )
}

export default Contac