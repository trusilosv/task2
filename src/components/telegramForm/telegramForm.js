
export default  function TelegramForm(){
   return(
      <form className='telegramForm' 
      onsubmit={()=>{}}>
         <input className='telegramInput telegramInputToken' 
          type="text"
          minLength="6"
          placeholder='token'
         ></input>
         <input className='telegramInput telegramInputChenal' 
          type="text"
          minLength="6"
          placeholder='tChenal'
          
         ></input>
          <button type='submit'  
         className='buttonPanel'
         >ok</button>
      </form>
   )
}