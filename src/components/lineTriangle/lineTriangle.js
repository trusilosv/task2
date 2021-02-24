import LineTriangleElement from '../lineTriangleElement'
import PascalTriangle from '../../services/pascalTriangle'
import './lineTriangle.css'

const mTiangle=new PascalTriangle();
function LineTriangle({n}){
  const triangleElements=mTiangle.getLine(++n).map((value)=>{
  return ( <LineTriangleElement key={Math.random().toString()} value={value} />)
})
   return (
      <div className='LineTriangle'>
         {triangleElements}
      </div>
    );
}
export default  LineTriangle