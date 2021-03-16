function  Sector({className,draw}) {
   return(
      <canvas id={className} className='Sector'>
         {draw}
      </canvas>
   )
}
export default Sector