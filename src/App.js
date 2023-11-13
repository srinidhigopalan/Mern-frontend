import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import SignIn from './components/UserLogin/SignIn.js';
import Navbar from './components/NavBar/Navbar.js';
import EditAccountForm from './components/EditAccount/EditAccountForm.js';
import MaybeShowNavbar from './components/NavBar/MaybeShowNavbar.js';
function App() {
  return (
    <div class="container">
    <BrowserRouter>
      <MaybeShowNavbar>
      <Navbar/>
      </MaybeShowNavbar>
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/edit-account" element={<EditAccountForm/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;