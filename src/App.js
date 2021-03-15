import logo from './logo.svg';
import autism from './autism.jpg';
import './App.css';
// import './normalize.css';
// import {Container, Box} from '@material-ui/core'
import NavBar from './components/NavBar';
import FlexboxTest from './components/FlexboxTest.jsx'

//MODULES

function App() {
  return (
    <>
    <header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <NavBar/>
    </header>
      <FlexboxTest/>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:200}}>
        <img src={autism} alt="logo" />
      </div>
      <p>Todos los derechos reservados, si me robas sos puto</p>
    </>
  );
}

export default App;
