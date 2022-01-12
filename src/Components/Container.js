import {React, useEffect, useState} from 'react'
import Job from './Job'
import Data from '../data/data.json'




const Container = ( { filterValue, locationValue, isChecked, isSubmitted }) => {

    const [jobsArray , setJobsArray] = useState()  //List that will hold Jobs
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false); //Any error values held here

    

    const getAsyncJobs = () =>
    new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { jobs: Data } }),
      500 //Just for testing the isLoading variable and displaying loading message
     )
  );

        
        useEffect(() => {
            setIsLoading(true);
            getAsyncJobs().then(result => {
                
                //Filtering by Job and Location
                if(locationValue && filterValue){ 
                    setJobsArray( 
                         Data.filter(m => 
                            m.location.toLowerCase().includes(locationValue.toLowerCase()) && 
                            (m.company.toLowerCase().includes(filterValue.toLowerCase()) || m.position.toLowerCase().includes(filterValue.toLowerCase())) 
                            ))
                }
               //Filtering by Location only
               else if(locationValue){
                setJobsArray(  Data.filter(m => m.location.toLowerCase().includes(locationValue.toLowerCase())) )
                }

                //Filtering by Job Value only
                else if(filterValue){
                    setJobsArray( Data.filter(m => m.company.toLowerCase().includes(filterValue.toLowerCase()) | m.position.toLowerCase().includes(filterValue.toLowerCase()) ) )
                }
                //No Filters
                else{
                    setJobsArray( Data )
                }
                
                //setNewArray (isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray  )
                // Filtering by Contract (Full time vs Part time is now done in JSX below with conditional rendering)

                setIsLoading(false);
            })
            .catch(() => setIsError(true));

            //Use effect will run whenever one of the dependcies below changes (ie when user interacts with a filter)
          }, [isSubmitted]);        

    
        
        

    return (
        
        <div className=" w-4/5 mx-auto h-full grid grid-cols-1  gap-x-8 gap-y-12  md:grid-cols-2 lg:grid-cols-3 ">
          {isError && <p>Something went wrong ...</p> /*Show error if exists */} 
            
            {/* Map through the Data taken from JSON file and render a Job component 
             If isChecked is True (Box ticked) - only map through Full time jobs*/}
            {isLoading ? <p>Loading ...</p> :
     
            jobsArray &&  jobsArray.filter(jobItem => 
                isChecked ? jobItem.contract === 'Full Time': jobItem)
                    .map((job) => 
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
                /> )} 
        </div>
    )
}

export default Container
