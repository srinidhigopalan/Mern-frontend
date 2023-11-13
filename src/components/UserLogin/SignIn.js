import React from "react";
import * as Components from './Components';
import ParticleBg from './ParticleBg';
import LoginForm from './LoginForm';
import SignupForm from "./SignupForm";
import Axios from "axios";
import { useState } from "react";
import './Styles.css';

function SignIn() {
    const [signIn, toggle] = React.useState(true);
    const [arr,setArr]=useState([]);
    const getState=(out)=>{
        setArr(out);
    }
    const handleSignup=(event)=>{
        event.preventDefault();
        const data={name:arr[0],email:arr[1],password:arr[2]};
        Axios.post("https://crud-v5x6.onrender.com/users/user-create/signup",data)
        .then((res)=>{
            if(res.status===200)
            alert("record added successfully");
            else
            Promise.reject();
        })
        .catch((err)=>alert(err))
        event.target.reset();
    }

    const handleLogin=(event)=>{
        event.preventDefault();
        const data={email:arr[0],password:arr[1]};
        Axios.post("https://crud-v5x6.onrender.com/user/user-create/login",data)
        .then((res)=>{
            if(res.status===200)
            alert("login successfull");
            else if(res.status===500)
            alert("Invalid Credentials");
            else
            Promise.reject();
        })
        .catch((err)=>alert(err))
        event.target.reset();

    }

     return(
         <>
         <ParticleBg /><Components.Container>
         <Components.SignUpContainer signinIn={signIn}>
         <form class="Form" onSubmit={handleSignup}>
             <SignupForm getState={getState}
                 nameVal="" emailVal="" passwordVal="" />
         </form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
         <form class="Form" onSubmit={handleLogin}>
                 <LoginForm getState={getState} emailVal="" passwordVal=""></LoginForm>
         </form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                     <Components.LeftOverlayPanel signinIn={signIn}>
                         <Components.Title>Welcome Back!</Components.Title>
                         <Components.Paragraph>
                             Proceed with your tasks
                         </Components.Paragraph>
                         <Components.GhostButton onClick={() => toggle(true)}>
                             Sign In
                         </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                         <Components.Title>Welcome User!</Components.Title>
                         <Components.Paragraph>
                             Tackle your tasks
                         </Components.Paragraph>
                         <Components.GhostButton onClick={() => toggle(false)}>
                             Sign Up
                         </Components.GhostButton>
                     </Components.RightOverlayPanel>

                 </Components.Overlay>
             </Components.OverlayContainer>

             </Components.Container>
             </>
         
     )
}

export default SignIn;