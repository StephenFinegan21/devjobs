import {React, useState} from 'react'

const useFilter = () => {

    const  [filterValue, setFilterValue] = useState()

    const handleChange = (e) => {
        setFilterValue(e.target.value)  
    }
    
    return {
        filterValue,
        render:(
        <form className="w-4/5 mx-auto h-20 bg-white relative -translate-y-7	grid grid-cols-3 text-xs md:text-sm">
            <div className="w-full border border-gray-100 p-6 text-gray-400 ">
                <input placeholder='Filter by title, companies, expertise' onChange={(e) => handleChange(e)}/>
            </div>
            <div className="w-full border border-gray-100 p-6" >
            <input className='text-gray-400'/>
            </div>
            <div className="w-full border border-gray-100 p-6 grid grid-cols-2">
                <span>
                <label htmlFor="full-time-only"> Full Time Only</label>
                <input className='ml-2'type="checkbox" id="full-time-only" name="full-time-only" value="full-time-only"/>
                </span>
                <button className='max-w-xs	 bg-purple text-white p-4 rounded-md  '>Search</button>
            </div>
        </form>
    )}
}

export default useFilter
