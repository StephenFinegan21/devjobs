import {React} from 'react'
import Job from './Job'
import Data from '../data/data.json'


const Container = ( { filterValue }) => {

   
    
    //console.log(Data)
    console.log(filterValue)
    return (
        <div className=" w-4/5 mx-auto h-full grid grid-cols-1  gap-6  md:grid-cols-2 lg:grid-cols-3 ">
        {/* Map through the Data taken from JSON file and render a Job component */}
           {Data.map((job) => 
            <Job 
            key={job.id}
            company = {job.company}
            contract = {job.contract}
            location = {job.location}
            position = {job.position}
            postedAt = {job.postedAt}
            /> )})
        </div>
    )
}

export default Container
