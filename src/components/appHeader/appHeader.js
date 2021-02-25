import './appHeader.css'
import {Link} from 'react-router-dom'
import GpAudio from './gpmp.mp3'
import ReactAudioPlayer from 'react-audio-player'

function AppHeader() {
   return (
       <header>
         <h1 >
           <Link className='headerHeading'  to='/'>My first project</Link>
           </h1>
         <ul className='headerList'>
           <li>
             <Link to='/triangle'>Triangle</Link>
           </li>
           <li>
           <Link to='/posts'>Posts</Link>
            
           </li>
           <li>
             <Link to='/chess'>chess</Link>
           </li>
         </ul>
       <ReactAudioPlayer src={GpAudio} autoPlay={true} controls />
</header>)}

 export default AppHeader;