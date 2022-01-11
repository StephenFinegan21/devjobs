import {React, useEffect} from 'react'
import Job from './Job'
import Data from '../data/data.json'




const Container = ( { filterValue, locationValue, isChecked }) => {

    let newArray = [];
    
        

        if(locationValue && filterValue){
             newArray =  Data.filter(m => m.location.toLowerCase().includes(locationValue.toLowerCase()) && (m.company.toLowerCase().includes(filterValue.toLowerCase()) || m.position.toLowerCase().includes(filterValue.toLowerCase())))
             newArray = isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray
        }
       else if(locationValue){
             newArray =  Data.filter(m => m.location.toLowerCase().includes(locationValue.toLowerCase()))
             newArray = isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray

        }
        else if(filterValue){
            newArray = Data.filter(m => m.company.toLowerCase().includes(filterValue.toLowerCase()) | m.position.toLowerCase().includes(filterValue.toLowerCase()) )
            newArray = isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray
         }
        else{
             newArray = Data
             newArray = isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray
        }
        
     

    return (
        
        <div className=" w-4/5 mx-auto h-full grid grid-cols-1  gap-x-8 gap-y-12  md:grid-cols-2 lg:grid-cols-3 ">
        {/* Map through the Data taken from JSON file and render a Job component */}
           {newArray.map((job) => 
            <Job 
            key={job.id}
            id={job.id}
            company = {job.company}
            contract = {job.contract}
            location = {job.location}
            position = {job.position}
            postedAt = {job.postedAt}
            requirements = {job.requirements}
            role = {job.role}
            website ={job.website}

            /> )}
        </div>
    )
}

export default Container
