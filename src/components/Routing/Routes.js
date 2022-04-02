import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage'
import About from '../About';
// import Training from '../Training';
// import Ard from '../ArdSchein';
import Gallery from '../Gallery';
// import Header from '../Header';
import Contact from '../Contact';
import Footer from '../Footer';
import Nav from '../Nav';
import AdrShein from '../AdrShein';

const Routes = () => {
    return (
        <Router>
        
        <Nav/>

             <Switch>
     <Route path="/" exact component={LandingPage}/>{' '}
     <Route path="/about" exact component={About}/>{' '}
     <Route path="/adr" exact component={AdrShein}/>{' '}
     <Route path="/gallery" exact component={Gallery}/>{' '}
     <Route path = "/contact" exact component={Contact}/> {' '}
 </Switch>
 <Footer/>
        </Router>
    )
}

export default Routes
