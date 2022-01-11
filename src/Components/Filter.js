import {React} from 'react'

const Filter = ( {onFilterUpdate, onLocationUpdate, onCheckUpdate} ) => {
//Three Callback functions passed from App.js
// Called by 3 different inputs below
//Values that user passes in for the filters are passed back up to the App.js component
    
    return (
        <form className="w-full mx-auto h-20 bg-white relative -translate-y-7 grid grid-cols-4 text-xs md:text-sm md:w-4/5">
            <div className="w-full border border-lightGray p-6 text-gray-400 col-span-2">
                <input className="w-full" placeholder='Filter by title, companies, expertise' onChange={ onFilterUpdate}/>
            </div>
            <div className="w-full border border-lightGray p-6 col-span-1" >
                <input className="w-full"  placeholder='Filter by location' className='text-gray-400' onChange={ onLocationUpdate}/>
            </div>
            <div className="w-full border border-lightGray p-6 col-span-1">
                <label htmlFor="full-time-only" className="text-gray-400 text-xs"> Full Time Only</label>
                <input className='ml-2'type="checkbox" id="full-time-only" name="full-time-only"  onChange={onCheckUpdate} />
            </div>
        </form>
    )}


export default Filter
