import React , { useState } from 'react';
// import './App.css';
import { Route , Link , Switch , BrowserRouter as Router } from 'react-router-dom' ;
import UserContext from './context/UserContext' ;
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Homee from './pages/Homee';
import Index from './pages/Index';
import Header from './components/Header';
import './App.css'
import firebase from 'firebase/app' ;
import 'firebase/auth' ;
import App1 from './recipe/App1'
import FirebaseConfig from './config/FirebaseConfig' ;
firebase.initializeApp( FirebaseConfig ) ; 

function App() {
  const[ user , setUser ] = useState( null ) ;
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{
          user  , setUser 
        }}>
            <Header/>
            <Switch>
              <Route exact path="/SignUp" component = { Signup } />
              <Route exact path="/SignIn" component = { Signin } />
              <Route exact path="/Index" component = { Index } />
              <Route exact path="/Home" component = { Homee } />
              <Route exact path="/recipe/App1" component = { App1 } />
              
            </Switch>
          </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
