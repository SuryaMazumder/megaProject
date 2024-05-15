import React,{useEffect,useState} from "react";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authentication=true}) {
    
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        //TODO: make it more easy
        if(authentication && authStatus!==authentication){ // false && false !== true (by default authentication is true)
            navigate('/login')
        }else if(!authentication && authStatus!==authentication){ //false && true!==true[is equal to false]  =(false && false)
            navigate('/')
        }

        setLoader(false)
    },[navigate,authStatus,authentication])

     return loader ? <h1>Loading...</h1> : <>{children}</>

}

