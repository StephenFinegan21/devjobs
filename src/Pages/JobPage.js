import React from 'react'
import { useParams } from "react-router-dom"
import Data from '../data/data.json'



const JobPage = () => {
    const params = useParams()

    console.log(params.id)
    console.log(Data[params.id - 1])

    const jobDetails = Data[params.id -1 ]
    
    return (
        <>
        <div className="w-full bg-lightGray h-screen">
            <div className="w-1/2 mx-auto p-5">
            <div className=' bg-white h-auto flex-col pt-8 pb-6'>
            <div className=' grid grid-cols-3 text-sm text-gray-500  pl-6 pt-6'>
                <p className='text-darkGray'>{jobDetails.postedAt}</p>
                <span className="h-1 w-1 bg-purple rounded-full  mx-auto mt-2 -translate-x-4"></span>
                <p className='text-darkGray'>{jobDetails.contract}</p>
            </div>
            <h2 className='pl-6 pt-6 font-medium md:text-lg '> 
                {jobDetails.position}
            </h2>
            <p className='pl-6 pt-3 bottom-0 text-purple text-xs '>{jobDetails.location}</p>
        </div>
       
        <div className=' bg-white h-auto flex-col pt-8 pb-6'>
            <h2 className='pl-6 pt-6 font-medium md:text-lg '>Requirements</h2>
                <p className='pl-6 pt-3 bottom-0 text-s text-darkGray '>{jobDetails.requirements.content}</p>
                {jobDetails.requirements.items.map(requirement => 
                    <li className={'bg-white pl-6 pt-3 bottom-0 text-s text-darkGray'}
                        key={requirement}>{requirement}
                    </li>)}
        </div>

        <div className=' bg-white h-auto flex-col pt-8 pb-6 '>
            <h2 className='pl-6 pt-6 font-medium md:text-lg '>What you will do</h2>
                <p className='pl-6 pt-3 bottom-0 text-s text-darkGray '>{jobDetails.role.content}</p>
                {jobDetails.role.items.map(role => 
                <li className={'bg-white pl-6 pt-3 bottom-0 text-s text-darkGray'} 
                    key={role}>{role}
                </li>)}
        </div>
        </div>
        </div>
        </>
    )
}

export default JobPage
