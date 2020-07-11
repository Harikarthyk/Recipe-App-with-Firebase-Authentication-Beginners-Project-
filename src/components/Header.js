import React , { useContext } from "react" ;
import UserContext from "../context/UserContext";
import { Link, Redirect } from 'react-router-dom' ;
const Header = () => {
    const context = useContext( UserContext ) ;
    const handleLogout = () => (
        <div>
            { 
                context.setUser( null ) 
             
            } 
        </div>
     )
    return(
        <div className="header" >
           
            <div className="header-title" > Make-YourSelf...! </div>
            <div className="user-name" >
                { context.user?.email ? "Welcome "+context.user.email : "" }
            </div>
            {
                !context.user  ? (  
                    <div className="header-sub-tab-title" >
                        <div  className="header-sub-tab"><Link style={{ color: '#FFF' }} to="/Signin">Sign in</Link></div>
                        <div className="header-sub-tab"><Link style={{ color: '#FFF' }} to="/Signup">Sign Up</Link></div>
                    </div >
                ) : (  
                    <div className="header-sub-tab-title" >
                        <div style={{ color: '#FFF' , cursor:'pointer' }}  className="header-sub-tab" onClick={ handleLogout } > Log Out </div>
                    </div>
                ) 
            }
        </div>
    );
}

export default Header ;