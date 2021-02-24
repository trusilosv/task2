import './appHeader.css'
import {Link} from 'react-router-dom'

function AppHeader() {
   return (
       <header >
         <h1>
           <Link  to='/'>My first project</Link>
           </h1>
         <ul className='headerList'>
           <li>
             <Link to='/triangle'>Triangle</Link>
           </li>
           <li>
           <Link to='/posts'>Posts</Link>
             <li>
             <Link to='/chess'>chess</Link>
           </li>
           </li>
         </ul>
         </header>
   );
 }

 export default AppHeader;