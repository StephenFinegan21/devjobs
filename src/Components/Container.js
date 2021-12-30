import React from 'react'
import Job from './Job'

const Container = () => {
    return (
        <div class="w-4/5 mx-auto h-full grid grid-cols-3 gap-6">
           <Job /> 
           <Job /> 
           <Job /> 

           <Job /> 
           <Job /> 
           <Job /> 
        </div>
    )
}

export default Container
