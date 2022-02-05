import {React, useEffect, useReducer, useCallback, useRef} from 'react'
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

    //for keeping a reference of whether form has been submitted
    const sumbittedRef = useRef(isSubmitted); 

    const getAsyncJobs = () =>
    new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { jobs: Data } }),
      200 
     )
  );

  //Initial page load - load all jobs
    useEffect(() => {
      getAsyncJobs().then(result => {
      dispatchJobs({ type: 'JOBS_FETCH_INIT' });
      dispatchJobs({
        type: 'JOBS_FETCH_SUCCESS',
        payload:  result.data.jobs
      })
    })
    }, []);   

    
    const handleGetJobs = useCallback(() => {
        if (sumbittedRef.current !== isSubmitted) { //Stops data from loading unless isSumbitted has changed (sumbit btn clicked)
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
            }).catch(() =>
            dispatchJobs({ type: 'JOBS_FETCH_FAILURE' }));}
            sumbittedRef.current = isSubmitted;  //Reset the reference - ensures data is not loaded again until submit is clicked

        },[isSubmitted, filterValue, locationValue]);


        useEffect(() => {
            handleGetJobs()

          }, [handleGetJobs]);
        
       // console.log(jobsArray.data[0].logo)

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
