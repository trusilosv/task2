import LineTriangleElement from '../lineTriangleElement/'
import PascalTriangle from '../pascalTriangle.js'
import './lineTriangle.css'

const mTiangle=new PascalTriangle();
function LineTriangle({n}){
  const triangleElements=mTiangle.getLine(++n).map((value)=>{
  return ( <LineTriangleElement value={value} />)
})
   return (
      <div className='LineTriangle'>
         {triangleElements}
      </div>
    );
}
export default  LineTriangle