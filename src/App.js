import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './Typist.css'
//MODULES
import {Box} from '@material-ui/core'
import NavBar from './components/NavBar';
import {Switch, Route, Redirect} from 'react-router-dom'
import Typist from 'react-typist';

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
        <Box display="flex" flexDirection="column" alignItems="center">
        <a href="/pagina-personal-react">
          <img  src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 style={{display:"flex", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          Soy un &nbsp; {<Typist>
              Backend
              <Typist.Backspace count={7} delay={600} />
              Frontend
              <Typist.Backspace count={8} delay={600} />
              Fullstack
            </Typist>}&nbsp;developer
        </h1>
        </Box>
      </div>
      <NavBar/>
    </header>
      <Box marginTop="100px" marginBottom="100px" display="flex" justifyContent="center" alignContent="center" alignItems="center">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about-me" component={AboutMe}/>
          <Route path="/tecnologies" component={(props) => <Tecnologies {...props}/>}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Redirect from="/pagina-personal-react" exact to="/home"/>
        </Switch>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
