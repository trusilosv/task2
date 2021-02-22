import './appHeader.css'
import logo from './logo.jpg';
import logoReact from './logo192.png';

function AppHeader() {
   return (
     <>
       <header >
         <h1>Pascal's triangle</h1>
         <img src={logo} className="App-logo" alt="logo" />
         <img src={logoReact} className="App-logo" alt="logo" />
         </header>
     </>
   );
 }

 export default AppHeader;