import {React, useState} from 'react'
import './App.css';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import Container from './Components/Container';
import JobPage from './Pages/JobPage';
import Job from './Components/Job';

import {
  BrowserRouter,
  Routes,
  Route
}  from 'react-router-dom';
 

function App() {

  const  [filterValue, setFilterValue] = useState(localStorage.getItem('filterValue' || ''))
  const  [locationValue, setLocationValue] = useState()
  const [isChecked, setIsChecked] = useState(false)

  const handleFilterValue = (event) =>{
    setFilterValue(event.target.value)
  }
  const handleLocationValue = (event) =>{
    setLocationValue(event.target.value)
  }
const handleCheck = () =>{
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
            <Route path=":id"  element={<JobPage />} />
          </Routes>
       
          
          
        </BrowserRouter>
           
     
      </div>
      
    </>
  );
}

export default App;
