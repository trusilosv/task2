import './parametersPanel.css';
function ParametersPanel({changeLines}){
   return (
      <form className='ParametersPanel'
      onSubmit={ (e)=>{
         e.preventDefault()
         changeLines(e.target.querySelector('.changeLines').value) }} >
         <div className='s'>
         <input className='changeLines'
         placeholder=' '
          type='number'
          min='1'
          max='20' />
          <span className='span_test'>enter the number of lines</span>
          </div>
         <button type='submit'  
         className='buttonPanel'
         >ok</button>
      </form>
    )
}
export default  ParametersPanel