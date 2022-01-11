import {React, useState} from 'react'
import './App.css';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import Container from './Components/Container';
import JobPage from './Pages/JobPage';

//Imports for React-Router
import {
  BrowserRouter,
  Routes,
  Route
}  from 'react-router-dom';
 

function App() {

  //Values that hold user filter requests - Are passed down to container component - tells container  what jobs to show
  const  [filterValue, setFilterValue] = useState(localStorage.getItem('filterValue' || '')) // Filters by Job Title / Company, 
  const  [locationValue, setLocationValue] = useState() //Filters by Location
  const [isChecked, setIsChecked] = useState(false) //Filters by if Full time only box is ticked

  //Callback handlers passed down to the 'Filter' Component
  const handleFilterValue = (event) =>{
    //Takes passed in value from Filter component
    //Sets the Filter with the value
    setFilterValue(event.target.value) 
  }
  const handleLocationValue = (event) =>{
    //Takes passed in value from Filter component
    //Sets the Filter with the value
    setLocationValue(event.target.value)
  }
const handleCheck = () =>{
  //Takes passed in value from Filter component
  //If False (unticked box) change to true and vice versa
    setIsChecked(!isChecked)
  }

  return (
    <>
    <div className=" bg-lightGray w-full h-full pb-5 text-midnight">
     <BrowserRouter>
      <Nav />
      <Routes>
            <Route path="/" 
            element={<>
                      <Filter 
                      onFilterUpdate = {handleFilterValue}
                      onLocationUpdate = {handleLocationValue}
                      onCheckUpdate = {handleCheck}
                      />
                      <Container {...{filterValue, locationValue, isChecked}}/>
                    </>}/>
            {/* Uses the relevant Job id to load up that Jobs information in Jobpage commponent */}
            <Route path=":id"  element={<JobPage />} />
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
