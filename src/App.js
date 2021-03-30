import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './Typist.css'
//MODULES
import {Box} from '@material-ui/core'
import NavBarButtom from './components/NavBarButtom'
import {Switch, Route, Redirect} from 'react-router-dom'
import Typist from 'react-typist';

//COMPONENTS
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Tecnologies from './components/Tecnologies.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import { useRef } from 'react';

function App() {
  const appRef = useRef()

  return (
    <>
    <header>
      <div className="App-header">
        <Box display="flex" flexDirection="column" alignItems="center">
        <a href="/pagina-personal-react">
          <img  src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 style={{display:"flex", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          Soy&nbsp;{
            <>
              <Typist cursor={{show:false}}>
                un
                Backend
                <Typist.Backspace count={7} delay={950} />
                Frontend
                <Typist.Backspace count={8} delay={600} />
                Fullstack
                <Typist.Backspace count={12} delay={1250} />
                Leandro Bustos
              </Typist>
              <Typist>
                <Typist.Delay ms={500} />
                &nbsp;developer
                <Typist.Backspace count={10} delay={3900} />
              </Typist>
            </>
          }
        </h1>
        </Box>
      </div>
    </header>
    <NavBarButtom reference={appRef}/>
    <span ref={appRef}></span>
    <Box marginTop="100px" marginBottom="100px" display="flex" justifyContent="center" alignContent="center" alignItems="center">
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about-me" component={AboutMe}/>
        <Route exact path="/tecnologies" component={(props) => <Tecnologies {...props}/>}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Redirect from="/" exact to="/home"/>
      </Switch>
    </Box>
    <Footer/>
    </>
  );
}

export default App;