import { useEffect, useState } from "react";
import  Axios  from "axios";
import { useParams } from "react-router-dom";
import EditAccountForm from "./EditAccountForm";
import ".././UserLogin/Styles.css";

function EditAccountPage(){
    const [newData,setNewData]=useState([]);
    // const [init,setInit]=useState({oldpassword:"",newname:"",newpassword:""});
    // useEffect(()=>{
    //     Axios.get("https://crud-v5x6.onrender.com/users/edit-account/")
    //     .then((res)=>{
    //         if(res.status === 200){
    //             const {oldpassword,newname,newpassword}= res.data;
    //         setInit({oldpassword,newname,newpassword});
    //         }
    //         else
    //             Promise.reject();
    //     })
    //     .catch((err)=>alert(err));
    // },);
    
    const getState=(childData)=>{
        setNewData(childData);
    }
    const handleSubmit=()=>{
        const data={oldpassword:newData[0],newname:newData[1],newpassword:newData[2]}
        Axios.put("http://localhost:4000/user/user-edit/edit-user/",data)
        .then((res)=>{
            if(res.status===200)
            window.location.reload();
            else    Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form class="Form" onSubmit={handleSubmit}>
            <EditAccountForm getState={getState}  OldpasswordVal="" newnameVal="" NewpasswordVal="" />
        </form>
    )
}
export default EditAccountPage;