
import './App.css';
// import Tictactoe from './pages/dashboard/component/tictactoe.jsx'
import MenstrualApp from './pages/dashboard/component/menstrualApp';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import MensPage2 from './pages/dashboard/component/mensPage2';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path= "/" element={<MenstrualApp/>} />
          <Route path = "/page2" element={<MensPage2/>}/>
          
        </Routes>

      </Router>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
