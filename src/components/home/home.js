import './home.css';
import gp from './gp.mp4';
import LogoReact from './react.svg'
import LogoChess from './chess.png'
import LogoHtml from './html.png'
import LogoJson from './json.png'
import LogoCss from './css.png'
import LogoBootstrap from './bootstrap.png'
import Form1 from '../radioGroups/Form'
import Sectors from '../../services/pieChart'
import PieChart from '../pieChart/pieChart'
export default function Home() {
   const sectors = new Sectors([1, 90, 1, 2, 5, 6, 2, 4, 5, 6], 190);
   return (
      <>
         <div className='homePage'>
            <video className='videoHome' src={gp} autoPlay muted
               onPlaying={(e) => { console.log(e) }}
               onEnded={(e) => { e.target.className += ' videoHomHide' }}
            ></video>
         </div>
         <div className='homeTechnologies' >
            <a href='reactjs.org' className='homeTechnologies_element logo_react'>
               <img className='home_logo' src={LogoReact} alt="logo" />
            </a>
            <a href='https://www.w3schools.com/css/' className='homeTechnologies_element logo_css'>
               <img className='home_logo' src={LogoCss} alt="logo" />
            </a>
            <a href='https://chessboardjs.com/' className='homeTechnologies_element logo_chess'>
               <img className='home_logo' src={LogoChess} alt="logo" />
            </a>
            <a href='https://www.w3schools.com/html/' className='homeTechnologies_element logo_html'>
               <img className='home_logo' src={LogoHtml} alt="logo" />
            </a>
            <a href='https://my-json-server.typicode.com/' className='homeTechnologies_element logo_json'>
               <img className='home_logo' src={LogoJson} alt="logo" />
            </a>
            <a href='https://getbootstrap.com/' className='homeTechnologies_element logo_bootstrap'>
               <img className='home_logo' src={LogoBootstrap} alt="logo" />
            </a>
            <Form1 />

            <a href='' className='button_1'>

               <p>Live Feedback</p>
            </a>

         </div>

      </>
   )
}

