import React,{useState} from "react"
import cn from "classnames"
import Hand from "./hand"
import { Form, Field } from 'react-final-form'
import './radioGroups.css'
interface RadioGroupsProps {
   className?: string;
   onValue(value:any):any;
}
const RadioGroups: React.FC<RadioGroupsProps> = (props: RadioGroupsProps) => {

   const [value, setvalue] = useState(null),
   onChange=async(e:any)=>{
     await setvalue(e.target.value);onValue(value) },
   {className,onValue} = props,
   classNameLike = cn({"Radio--change": value==="true"}),
   classNameDislike = cn({"Radio--change": value==="false"})
   return (
   <div className={className}>
      <div className={cn("Like",classNameLike)} >
         <input className="RadioGroups-radio" name="hand" type="radio" value="true"
         onChange={onChange}>
         </input>
         <div className="Hand">
            <Hand className={classNameLike}/>
         </div>
      </div>
      <div className={cn("Like",classNameDislike)}>
         <input className="RadioGroups-radio" name="hand" type="radio" value="false"
         onChange={onChange}>
         </input> 
         <div className="Hand Hand--inverted">
            <Hand className={classNameDislike}/>
         </div>
      </div>
   </div>
   )
}
export default RadioGroups