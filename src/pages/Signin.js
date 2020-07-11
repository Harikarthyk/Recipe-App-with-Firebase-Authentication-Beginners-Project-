import React , { useContext , useState } from "react" ;
import firebase from 'firebase/app' ;
import {toast} from 'react-toastify'
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
const Signin = () => {
    const context = useContext( UserContext ) ;
    const[ email , setEmail ] = useState("") ;
    const[ password , setPassword ] = useState("") ;
    const handleSigin = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword( email , password ) 
            .then( res =>{
                context.setUser({ 
                    email : res.user.email ,
                    uid : res.user.uid
                })
                console.log( res ) ;
            } )
            .catch( error =>{
                toast( {error} ,{
                    type:"error"
                } ) ;
                alert(error) ;
            })
    }
    const handleClick = () => {
        handleSigin() ;
    }   
    if( context.user!=null ){
        return <Redirect to="/Index" />
    }
    return(
        <div className="sigin-in" >
            <h2> Register Your Account </h2>
            <input  
                type = "text" 
                placeholder = "Enter your Name " 
                value = { email }
                onChange = { e => setEmail( e.target.value ) } 
            />
            <input  
                type = "password" 
                placeholder = "Enter your Password " 
                value = { password }
                onChange = { e => setPassword( e.target.value ) } 
            />
            <button onClick={ handleClick } >
                Sign - In 
            </button>
        </div>
    );
}

export default Signin ;