import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryButton = ({text, link}) => {
    return (
        <div className='mt-6'>
            <NavLink to={link} className="bg-color1   border-slate-900 hover:bg-color4 text-white font-semibold py-2 px-4 border-b-4 hover:border-slate-800 rounded-full">
                {text}
            </NavLink>
        </div>
    )
}

export default CategoryButton