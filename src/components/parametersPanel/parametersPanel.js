import './parametersPanel.css';
function ParametersPanel({changeLines}){
   return (
      <form className='ParametersPanel'
      onSubmit={ (e)=>{
         e.preventDefault()
         changeLines(e.target.querySelector('.changeLines').value) }} >
         <input className='changeLines'
          type='number'
          min='1'
          max='20'
          placeholder='enter the number of lines' />
         <button type='submit'  
         className='buttonPanel'
         >ok</button>
      </form>
    )
}
export default  ParametersPanel