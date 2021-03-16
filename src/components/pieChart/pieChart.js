 function PieChart({sectors}) {
    const pie=sectors.map((sector)=>
    { 
   const {x1,x2,y1,y2,flag,radius} = sector;
    return <path fill={`#${(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}`} stroke="#333333" stroke-width="3" d={`m${x1},${y1} A${radius},${radius} 0 ${flag},1 ${x2},${y2} L${radius},${radius} ${x1},${y1}`} />
    })
   return (
   <svg height={2*sectors[0].radius+10} width={2*sectors[0].radius+10}>
      {pie}
      
     
   </svg>
   )
}
export default PieChart;