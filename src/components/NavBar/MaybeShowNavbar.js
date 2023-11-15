import React,{useEffect,useState} from 'react';
import { useLocation} from 'react-router-dom';

const MaybeShowNavbar=({children})=>{
    const location=useLocation();
    const[showNavBar, setShowNavBar]=useState(false)

    useEffect(()=>{
        console.log('this is location: ',location)
        if(location.pathname==='/'||location.pathname==='/signin' || location.pathname==='/forgot-password' || location.pathname==='/otp'){
            setShowNavBar(false)
        }else{
            setShowNavBar(true)
        }
    },[location])


return(
    <div>{showNavBar && children}</div>
)
}

export default MaybeShowNavbar