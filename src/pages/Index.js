import React , { useContext } from 'react' ;
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const Index = () => {
    const context = useContext( UserContext ) ;
    if( !context.user?.uid ) {
        return <Redirect to="/Signin" />
    }  
    return <Redirect to="/recipe/App1" />
    // return( 
        
    //     <div className="index-wrapper" >
    //         <h4> Welcome User.. </h4>
        
    //     </div>
    // );
}

export default Index ;