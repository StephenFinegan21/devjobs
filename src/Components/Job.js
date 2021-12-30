import React from 'react'

const Job = () => {
    return (
        <div className='w-full bg-white h-auto flex-col pt-8 pb-6'>
            <div className='w-20 grid grid-cols-3 text-sm text-gray-500 gap-10 pl-6 pt-6'>
                <p className='text-center'>time</p>
                <p className='text-center ml-3'>|</p>
                <p className='text-center'>Type</p>
            </div>
            <h2 className='pl-6 pt-6'>Job Title</h2>
            <p className='pl-6 pt-6 text-gray-500'>Company</p>
            <p className='pl-6 pt-12 bottom-0 text-blue-500 '>Location</p>
            
        </div>
    )
}

export default Job
