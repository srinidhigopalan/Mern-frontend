import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Login from './components/SignIn.js';
import SignIn from './components/SignIn.js';


function App() {
  return (
    <div class="container">
    <HashRouter>
      <Routes>
          <Route path="/" element={<SignIn/>}/>      
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;