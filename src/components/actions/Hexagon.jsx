import React from 'react'
//w-[14rem] h-[8.3rem]
const Hexagon = ({ idclass, image, text, OnHoverLeave, OnHoverEnter }) => {
    return (
        <div  onMouseLeave={(e)=>OnHoverLeave(e, idclass)} onMouseEnter={e=>OnHoverEnter(e, idclass)} className=" bg-color5 hover:bg-color1 rounded-md shadow-shadow-menu">
            <div className='w-[4rem] h-[2.5rem] sm:w-[6rem] sm:h-[3.5rem] xl:w-[8rem] xl:h-[4.8rem] rotate-[60deg] m-0 rounded-md bg-inherit shadow-shadow-menu'>
                <div className=' w-full h-full rotate-[60deg] rounded-md bg-inherit '>
                    <div className='w-full h-full rotate-[-120deg] rounded-md  bg-inherit flex justify-center item-center '>
                        <img className='p-1 lg:p-3 ' src={image} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hexagon