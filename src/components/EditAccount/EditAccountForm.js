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
            <center><div class="Title" style={{color:"#ffff"}}>Edit Account</div></center>
            <input defaultValue={props.OldpasswordVal} onChange={(event)=>setOldPassword(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded"  placeholder="enter old password"/>
            <input defaultValue={props.newnameVal} onChange={(event)=>setNewName(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded"placeholder="enter new username"/>
            <input defaultValue={props.NewpasswordVal} onChange={(event)=>setNewPassword(event.target.value)} class="Input shadow-sm p-3 mb-5 bg-white rounded" placeholder="enter new password"/>
            <button onClick={handleclick} class="Button" type="submit">Save</button>
            <br/> <br/>
        </div>
    )
}
export default EditAccountForm;