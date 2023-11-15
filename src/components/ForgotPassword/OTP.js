import { useEffect, useState } from "react";
import '../UserLogin/Styles.css';
import * as Components from '../UserLogin/Components.js';
import Axios from 'axios';
import OTPParticle from "./OTPParticle.js";
function OTP() {
    const [otp, setotp] = useState();
    const [email, setemail] = useState();
    const [newPass, setnewPass] = useState();

    const handleclick = () => {
        Axios.put("http://localhost:8000/users/passedit/reset-pass", { email, otp, newPass })
            .then((res) => {
                if (res.status === 200)
                    window.location.href = '/login';
                else Promise.reject();
            })
            .catch((err) => alert(err));
    }
    useEffect(() => {
        setemail(email);
        setotp(otp);
        setnewPass(newPass);
    }, [email, otp, newPass]);
    return (
        <div>
            <OTPParticle/>
            <>
                <center>

                    <Components.Anchor>
                        <div class="Title" style={{ color: "#ffff" , marginTop:"50px"}}>Reset Password</div>
                        <br /><br />
                        <input onChange={(event) => setemail(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter email" />
                        <input onChange={(event) => setotp(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter otp" />
                        <input onChange={(event) => setnewPass(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter new password" />
                        <button onClick={handleclick} class="Button" type="submit">Reset</button>
                        <br /> <br />
                    </Components.Anchor>
                </center>

            </>
        </div>
    )
}
export default OTP;

