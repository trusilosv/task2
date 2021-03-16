export default  class Sectors {
   constructor(items=[],radius)
    { 
      this.items=items;
      this.itemsSum=this.items.reduce((accumulator,a)=>accumulator+a,0);
      this.sectors=[];
      this.radius=radius;
   }
   createSectors(){
      let x=2*this.radius,
      y=this.radius,
      itemsum=0;
   this.sectors =  this.items.map((item)=>{
      itemsum=itemsum+item;
      console.log(itemsum);
      const sector=this.getCoordinatesSector(x,y,itemsum);
      x=sector.x2;
      y=sector.y2;
      return {...sector,flag:item<=this.itemsSum/2?0:1,radius:this.radius};
   })
   }
   getCoordinatesSector(x1=0,y1=0,item)
   { 
      const  angle =item/this.itemsSum*2*Math.PI;      
      const x2 =this.radius+this.radius * Math.cos(angle)
      const y2 =this.radius+this.radius * Math.sin(angle)
      return {x1:x1,y1:y1,x2:x2,y2:y2}
   }
   getSectors(){
      return this.sectors;
   }
}
 
