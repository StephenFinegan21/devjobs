import React from 'react'
//import blogr from '../assets/logos/blogr.svg'


const Job = ({ company, location, postedAt, position , contract}) => {
    
    return (
        <div className='w-full bg-white h-auto flex-col pt-8 pb-6'>
            <div className='w-20 grid grid-cols-3 text-sm text-gray-500 gap-5 pl-6 pt-6'>
                <p>{postedAt}</p>
                <p className='text-center ml-3'>|</p>
                <p>{contract}</p>
            </div>
            <h2 className='pl-6 pt-6'>{position}</h2>
            <p className='pl-6 pt-6 text-gray-500'>{company}</p>
            <p className='pl-6 pt-12 bottom-0 text-blue-500 '>{location}</p>
            
        </div>
    )
}

export default Job
