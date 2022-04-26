import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routing/Routes';
import LandingPage from './components/LandingPage';
// import Navigation from './components/Header';


function App() {
  return (
    <>
    <Router>
        {/* <Navigation />*/}
    <LandingPage/> 
   
    </Router>
     <Routes/>
     </>
  );
}

export default App;
