import './triangle.css'
import LineTriangle from '../lineTriangle'
import{ useState } from 'react'
import ParametersPanel from '../parametersPanel'
import TelegrammSendMessage from '../../services/telegramBot'
import logo from './logo.jpg';

function Triangle()
{
  const [count, setCount] = useState(16)
  let triangleLines=[];
   let i=0;
    do{
    triangleLines.push(
     <LineTriangle n={i} key={i.toString()} />
   )
   i+=1
  }while(i<count);
  TelegrammSendMessage(count);
   return (
   <div className='wrapperTriangle' >
     <div className='headerTriangle'><h2>Pascal's triangle</h2>
    <ParametersPanel changeLines={(count)=>setCount(count)} />
     <img src={logo} className="App-logo" alt="logo"  /></div>
    
      <div className='Triangle'>
      {triangleLines}
       </div>
   </div>
 )
}
export default Triangle