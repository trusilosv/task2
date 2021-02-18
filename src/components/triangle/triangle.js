import './triangle.css'
import LineTriangle from '../lineTriangle'
// import ParametersPanel from '../parametersPanel'
function Triangle({n})
{let triangleLines=[];
   let i=0;
    do{
    triangleLines.push(
     <LineTriangle n={i} />
   )
   i+=1
       }while(i<n);
   return (
   <div className='wrapperTriangle' >
       {/* <ParametersPanel /> */}
      <div className='Triangle'>
      {triangleLines}
       </div>
   </div>
 )
}
 
export default Triangle