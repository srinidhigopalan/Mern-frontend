import { useEffect, useState } from "react";
import '../UserLogin/Styles.css';
import * as Components from '../UserLogin/Components.js';

import { Axios } from "axios";
import ForgotParticle from "./ForgotParticle.js";
function Forgot(){
    const [email,setEmail]=useState();
    // const arr=[email];
    const handleclick=()=>{
        Axios.post("http://localhost:8000/users/pass-edit/send-fp-otp",email)
        .then((res)=>{
            if(res.status===200){
                window.location.href = '/send-otp';
            }
            else
            Promise.reject();
        }).catch((err)=>alert(err));
        }
    
    useEffect(()=>{
        setEmail(email);
    },[email]);
    return(
        <div>
            <ForgotParticle/>

            <center>
            <Components.Anchor>
            
            <div class="Title" style={{color:"#ffff", marginTop:"70px"}}>Forgot Password</div>
            <br/><br/>
            
            <input  onChange={(event)=>setEmail(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter email"/>
            <button onClick={handleclick} class="Button" type="submit">Submit</button>
            <br/> <br/>
            </Components.Anchor>
            </center>

        </div>
    )
}
export default Forgot;

