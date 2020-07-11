import React , { useContext , useEffect , useState } from "react"; 
import NavBar from '../component/Head' ;
import GetItem from '../component/GetItem' ;
import '../style.css' ;
import Recipe from '../component/Recipe' ;
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";

const App1 = () => {
    const context = useContext( UserContext ) ;
    
    
    const[ recipe , setRecipe ] = useState([]) ;
    // const[ ob , setOb ] = new
    const[ item , setItem ] = useState("") ;
    const API_KEY = "091ab0ccc090991bd15e4cfc36d061c7" ;
    const API_ID = "6de69794" ;
    const fetchDetails = async () => {
        const response = await fetch( `https://api.edamam.com/search?q=${item}&app_id=${API_ID}&app_key=${API_KEY}` )
        const data = await response.json();
        setRecipe( data.hits ) ;
        console.log( data.hits ) ;
    }
    if( !context.user?.uid ) {
        return <Redirect to="/Signin" /> 
    }
    return(
        <div>
            <NavBar />
            <div className="item-body">
                <GetItem item={item} setItem={setItem} fetchDetails={fetchDetails} />
                <Recipe item={item}  recipe={ recipe } />
            </div>
        </div>
    );
}

export default App1 ;