import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Form from './Forms/Form';
import Form1 from './Forms/Form1';
import Navbar from './Navbar/Navbar';
import Navbar1 from './Navbar/Navbar1';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>


     {/* these are for check */}
     {/* <Form/> */}

     {/* <Form1/> */}
     {/* <Navbar1/> */}
    </div>
  );
}

export default App;
