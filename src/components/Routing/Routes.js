import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage'
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';
import Nav from '../Nav';
import AdrShein from '../AdrShein';

const Routes = () => {
    return (
        <>        

        
        <Router>
        <Nav/>
             <Switch>

     <Route path="/" exact component={LandingPage}/>
     <Route path="/lebenslauf"  component={About}/>
     <Route path="/adr"  component={AdrShein}/>
     <Route path ="/kontakt"  component={Contact}/> 

 </Switch>
 <Footer/>

        </Router>
         
         </>

    )
}

export default Routes
