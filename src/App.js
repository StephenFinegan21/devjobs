import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import useFilter from './Components/useFilter';
import Container from './Components/Container';


function App() {

  const {render, filterValue, locationValue, isChecked} = useFilter()
  return (
    <>
    <div className=" bg-gray-100 w-full h-full pb-5">
       <Nav />
        {render}
          <Container {...{filterValue, locationValue, isChecked}} />
      
    
    </div>
      
      
    </>
  );
}

export default App;
