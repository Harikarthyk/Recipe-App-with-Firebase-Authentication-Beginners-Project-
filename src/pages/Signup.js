import React , { useContext , useState } from "react" ;
import firebase from 'firebase/app' ;
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
const Signup = () => {
    const context = useContext( UserContext ) ;
    const[ email , setEmail ] = useState("") ;
    const[ password , setPassword ] = useState("") ;
    const handleSigin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword( email , password ) 
            .then( res =>{
                context.setUser({ 
                    email : res.user.email ,
                    uid : res.user.uid                    
                })
                console.log( res ) ;
            } )
            .catch( error =>{
                
                alert( error ) ;
            })           
    }
    const handleClick = () => {
        handleSigin() ;
    }     
    if( context.user!=null ){
        return <Redirect to="/Index" />
    }
    return(
        <div className="sigin-up" >
            <h2 className="page-title"> Sign Up </h2> 
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
                Sign - Up 
            </button>
        </div>
    );
}

export default Signup ;