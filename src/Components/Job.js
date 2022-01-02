import React from 'react'
//import blogr from '../assets/logos/blogr.svg'
import JobPage from '../Pages/JobPage'
import { Link } from 'react-router-dom'


const Job = ({ id, company, location, postedAt, position , contract}) => {
    
    return (
        <div className='w-full bg-white h-auto flex-col pt-8 pb-6'>
            <div className='w-60 grid grid-cols-3 text-sm text-gray-500  pl-6 pt-6'>
                <p>{postedAt}</p>
                <span className="h-1 w-1 bg-purple rounded-full  mx-auto mt-2 -translate-x-4"></span>
                <p>{contract}</p>
            </div>
            <h2 className='pl-6 pt-6 font-medium md:text-lg '> 
                    <Link to={`jobpage/${id}`}>{position}</Link>
            </h2>
            <p className='pl-6 pt-6 text-gray-500'>{company}</p>
            <p className='pl-6 pt-12 bottom-0 text-purple '>{location}</p>
            
        </div>
    )
}

export default Job
