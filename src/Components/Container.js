import {React} from 'react'
import Job from './Job'
import Data from '../data/data.json'
import { data } from 'autoprefixer'


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
     
       
    

   
    
    //console.log(Data)
    //console.log(filterValue)
    //console.log(locationValue)
    return (
        <div className=" w-4/5 mx-auto h-full grid grid-cols-1  gap-6  md:grid-cols-2 lg:grid-cols-3 ">
        {/* Map through the Data taken from JSON file and render a Job component */}
           {newArray.map((job) => 
            <Job 
            key={job.id}
            company = {job.company}
            contract = {job.contract}
            location = {job.location}
            position = {job.position}
            postedAt = {job.postedAt}
            /> )}
        </div>
    )
}

export default Container
