import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import SignIn from './components/UserLogin/SignIn.js';
import Nav from './components/NavBar/Nav.js';
import EditAccountForm from './components/EditAccount/EditAccountForm.js';
import MaybeShowNavbar from './components/NavBar/MaybeShowNavbar.js';
import Forgot from './components/ForgotPassword/Forgot.js';
import OTP from './components/ForgotPassword/OTP.js';
import NavMain from './components/NavBar/NavMain.js';
function App() {
  return (



    <div class="container">
    <BrowserRouter>
      <MaybeShowNavbar>
      <Nav/>
      </MaybeShowNavbar> 
       <Routes>
        
          <Route path="/" element={<SignIn/>}/>
          <Route path='/edit-account' element={<EditAccountForm/>}/>
          <Route path='/forgot-password' element={<Forgot/>}/>
          <Route path='/otp' element={<OTP/>}/>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;