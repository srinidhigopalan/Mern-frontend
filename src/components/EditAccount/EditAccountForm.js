import { useEffect, useState } from "react";
import "../UserLogin/Styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditParticle from './EditParticle';

function EditAccountForm(props){
    const [newname,setNewName]=useState(props.newnameVal);
    const [oldpassword,setOldPassword]=useState(props.OldpasswordVal);
    const [newpassword,setNewPassword]=useState(props.NewpasswordVal);
    const arr=[oldpassword,newname,newpassword];
    
    const handleclick=()=>{
        props.getState(arr);
    }
    useEffect(()=>{
        setOldPassword(props.OldpasswordVal);
        setNewName(props.newnameVal);
        setNewPassword(props.NewpasswordVal);
    },[props.OldpasswordVal,props.newnameVal,props.NewpasswordVal]);
    return(
        <div>
            <EditParticle/>
            <center><div class="Title" style={{color:"#ffff",paddingTop:"10px"}}>Edit Account</div>
            <input defaultValue={props.OldpasswordVal} onChange={(event)=>setOldPassword(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded"  placeholder="enter old password"/>
            <br/>
            <input defaultValue={props.newnameVal} onChange={(event)=>setNewName(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded"placeholder="enter new username"/>
            <br/>
            <input defaultValue={props.NewpasswordVal} onChange={(event)=>setNewPassword(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter new password"/>
            <br/>
            <button onClick={handleclick} class="Button" type="submit">Save</button>
            <br/> <br/>
            </center>

        </div>
    )
}
export default EditAccountForm;