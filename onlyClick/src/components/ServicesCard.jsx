import React from 'react'
import { NavLink } from 'react-router'
import { FaStar } from "react-icons/fa";


function ServicesCard({data}) {
return (
    <NavLink to={`/user/service/${data._id}`} className="w-[35vw] h-[25vh]  flex-shrink-0 relative p-2 bg-slate-200">
        <img src={data.image} alt="" className="object-cover w-full h-[70%]" />
        <div className='flex flex-col justify-start items-start  w-full px-1'>
            <p className="text-black ">{data.name}</p>
            <div className='flex justify-between w-full '>
                <div className='flex gap-1 justify-center items-center'>
                    <FaStar className='text-yellow-400' />  
                    <p className='text-black font-semibold text-sm'>{data.rating}</p>
                </div>
                <p className='text-black font-semibold'>{data.price}</p>
            </div>
        </div>
    </NavLink>
)
}

export default ServicesCard
