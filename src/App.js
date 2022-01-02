import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import useFilter from './Components/useFilter';
import Container from './Components/Container';
import JobPage from './Pages/JobPage';

import {
  BrowserRouter,
  Routes,
  Route
}  from 'react-router-dom';
 

function App() {

  const {render, filterValue, locationValue, isChecked} = useFilter()
  return (
    <>
    <div className=" bg-gray-100 w-full h-full pb-5 text-midnight">
     
      <BrowserRouter>
      <Routes>
            <Route path="/" 
            element={<>
                      <Nav />
                      {render}
                      <Container {...{filterValue, locationValue, isChecked}}/>
                    </>}/>
            <Route path="jobPage/:id" element={<JobPage />} />
          </Routes>
       
          
          
        </BrowserRouter>
           
     
      </div>
      
    </>
  );
}

export default App;
