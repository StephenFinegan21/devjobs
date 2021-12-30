import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import Container from './Components/Container';

function App() {
  return (
    <>
    <div className=" bg-gray-100 w-full h-full pb-5">
       <Nav />
        <Filter />
          <Container />
      
    
    </div>
      
      
    </>
  );
}

export default App;
