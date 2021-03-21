import logo from './logo.svg';
import './App.css';
import './normalize.css';
//MODULES
import {Box} from '@material-ui/core'
import NavBar from './components/NavBar';
import {Switch, Route, Redirect} from 'react-router-dom'

//COMPONENTS
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Tecnologies from './components/Tecnologies.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <header>
      <div className="App-header">
      <a href="/">
        <img  src={logo} className="App-logo" alt="logo" />
      </a>
      </div>
      <NavBar/>
    </header>
      <Box marginTop="100px" marginBottom="100px" display="flex" justifyContent="center" alignContent="center" alignItems="center">
        <Switch>
          {/* <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/movies/:id" component={NewMovieForm}/> */}
          <Route path="/home" component={Home}/>
          <Route path="/about-me" component={AboutMe}/>
          <Route path="/tecnologies" component={(props) => <Tecnologies {...props}/>}/>
          <Route path="/portfolio" component={Portfolio}/>
          {/* <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/> */}
          <Redirect from="/" exact to="/home"/>
          {/* <Redirect to="/not-found"/> */}
        </Switch>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
