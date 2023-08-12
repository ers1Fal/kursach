import './App.css';
import Nav from './component/Nav/Nav';
import News from './component/News/News';
import Gamses from './component/Games/Gamses';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     hahah
    //     </a>
    //   </header> */}
      
    // </div>
    <>
    <Nav/>  
   
  
    <Routes>
      <Route path='/News' element={<News/>}></Route>
      <Route path='/Gamses' element={<Gamses/>}></Route>
  
    </Routes>
  </>
  )
  }

export default App;
