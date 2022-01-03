import {React, useState} from 'react'

const useFilter = () => {

    const  [filterValue, setFilterValue] = useState()
    const  [locationValue, setLocationValue] = useState()
    const [isChecked, setIsChecked] = useState(false)

   console.log(isChecked)
    
    return {
        filterValue,
        locationValue,
        isChecked,
        render:(
        <form className="w-full mx-auto h-20 bg-white relative -translate-y-7 grid grid-cols-4 text-xs md:text-sm md:w-4/5">
            <div className="w-full border border-lightGray p-6 text-gray-400 col-span-2">
                <input className="w-full" placeholder='Filter by title, companies, expertise' onChange={(e) => setFilterValue(e.target.value)}/>
            </div>
            <div className="w-full border border-lightGray p-6 col-span-1" >
                <input className="w-full" placeholder='Filter by location' className='text-gray-400' onChange={(e) => setLocationValue(e.target.value)}/>
            </div>
            <div className="w-full border border-lightGray p-6 col-span-1">
                <label htmlFor="full-time-only" className="text-gray-400 text-xs"> Full Time Only</label>
                <input className='ml-2'type="checkbox" id="full-time-only" name="full-time-only"  onChange={(e) => setIsChecked(!isChecked)}/>
                
                
            </div>
        </form>
    )}
}

export default useFilter
