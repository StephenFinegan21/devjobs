import {React, useEffect, useReducer, useCallback} from 'react'
import Job from './Job'
import Data from '../data/data.json'

const jobsReducer = (state, action) => {
    switch (action.type) {
        case 'JOBS_FETCH_INIT':
          return {
            ...state,
            isLoading: true,
            isError: false,
          };
        case 'JOBS_FETCH_SUCCESS':
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        case 'JOBS_FETCH_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
       
        default:
          throw new Error();
      }
    };


const Container = ( { filterValue, locationValue, isChecked, isSubmitted }) => {

        /*  Was initially using useState, switched to useReducer to ensure more consistent data
    const [jobsArray , setJobsArray] = useState()  //List that will hold Jobs
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false); //Any error values held here
    */
    const [jobsArray, dispatchJobs] = useReducer(
        jobsReducer,
        { data: [], isLoading: false, isError: false }
      );

    

    const getAsyncJobs = () =>
    new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { jobs: Data } }),
      500 //Just for testing the isLoading variable and displaying loading message
     )
  );

        const handleGetJobs = useCallback(() => {
            dispatchJobs({ type: 'JOBS_FETCH_INIT' });
            getAsyncJobs().then(result => {
                
                //Filtering by Job and Location
                if(locationValue && filterValue){ 
                    dispatchJobs({
                        type: 'JOBS_FETCH_SUCCESS',
                        payload: result.data.jobs.filter(m => 
                            m.location.toLowerCase().includes(locationValue.toLowerCase()) && 
                            (m.company.toLowerCase().includes(filterValue.toLowerCase()) || m.position.toLowerCase().includes(filterValue.toLowerCase())) 
                            )
                        });
                    }
               //Filtering by Location only
               else if(locationValue){
                dispatchJobs({
                    type: 'JOBS_FETCH_SUCCESS',
                    payload:  result.data.jobs.filter(m => m.location.toLowerCase().includes(locationValue.toLowerCase())) 
                });}

                //Filtering by Job Value only
                else if(filterValue){
                    
                    dispatchJobs({
                        type: 'JOBS_FETCH_SUCCESS',
                        payload:  result.data.jobs.filter(m => m.company.toLowerCase().includes(filterValue.toLowerCase()) | m.position.toLowerCase().includes(filterValue.toLowerCase())) 
                    });
                }
                //No Filters
                else{
                    dispatchJobs({
                        type: 'JOBS_FETCH_SUCCESS',
                        payload:  result.data.jobs
                    });
                }
                
                //setNewArray (isChecked ? newArray.filter(job => job.contract === 'Full Time') : newArray  )
                // Filtering by Contract (Full time vs Part time is now done in JSX below with conditional rendering)

              
            }).catch(() =>
            dispatchJobs({ type: 'JOBS_FETCH_FAILURE' }));
    
        },[isSubmitted]);
        useEffect(() => {
            
            handleGetJobs()

          }, [handleGetJobs]);        

    //console.log(jobsArray)
        
        

    return (
        
        <div className=" w-4/5 mx-auto h-full grid grid-cols-1  gap-x-8 gap-y-12  md:grid-cols-2 lg:grid-cols-3 ">
          {jobsArray.isError && <p>Something went wrong ...</p> /*Show error if exists */} 
            
            {/* Map through the Data taken from JSON file and render a Job component 
             If isChecked is True (Box ticked) - only map through Full time jobs*/}
            {jobsArray.isLoading ? <p>Loading ...</p> :
     
            jobsArray &&  jobsArray.data.filter(jobItem => 
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
