import {React} from 'react'

const Filter = ( {onFilterUpdate, onLocationUpdate, onCheckUpdate, search} ) => {
//Three Callback functions passed from App.js
// Called by 3 different inputs below
//Values that user passes in for the filters are passed back up to the App.js component


    
    return (
        <form className="w-full mx-auto h-24 bg-white relative -translate-y-7 grid grid-cols-3 text-xs md:text-sm md:w-4/5">
            <div className=" pl-6 pt-10 border border-lightGray p-6 text-gray-400 col-span-1">
                <input className="w-full" placeholder='Filter by title, companies, expertise' onChange={ onFilterUpdate}/>
            </div>
            <div className=" border border-lightGray pl-6 pt-10 col-span-1" >
                <input className="w-full text-gray-400" placeholder='Filter by location'  onChange={ onLocationUpdate}/>
            </div>
            <div className=" border border-lightGray   col-span-1 grid grid-cols-2">
                <div className='col-span-1 m-auto  '>
                    <label htmlFor="full-time-only" className="text-gray-400 text-xs md:p-6 "> Full Time</label>
                    <input class=" h-4 w-4 rounded " type="checkbox"  name="full-time"  onChange={onCheckUpdate} />
                </div>
                <div className='col-span-1 pt-6 md:plr-6 '>
                <button className="w-full h-10  text-white text-xs rounded-sm bg-purple lg:w-1/2" type="button" onClick={search} >Submit</button>
                </div>
            </div>
            
        </form>
    )}


export default Filter
