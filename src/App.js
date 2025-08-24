import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootstrapNavBar from './components/BootstrapNavBar/BootstrapNavBar';


import './App.css'
import Calc from './components/calc/Calc';
import History from './components/history/History';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <BootstrapNavBar/>
        <Routes>
          <Route path="/" element={<Calc/>}/>
          <Route path="/history" element={<History/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
