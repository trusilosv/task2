import './formLikePanel.css'
import {useState} from 'react'
import Hand from './hand'
function FormLikePanel(){
   const [handStyle, sethandStyle] = useState({
      color_like: '#AAAAAA',
      color_dislike: '#AAAAAA',
      class_like:'',
      class_dislike:''
   })
   const onChange =(e)=>
     {if(e.target.value==='like')
      sethandStyle({
         color_like: '#2690D8',
         color_dislike: '#AAAAAA',
         class_like:' form__like_change',
         class_dislike:''
      } )
       else  sethandStyle({
      color_like: '#AAAAAA',
      color_dislike: '#2690D8',
      class_like:'',
      class_dislike:' form__like_change'
   } )
      
}
return(
    <div className='form__LikePanel'>
         <div className={`form__like${handStyle.class_like}`} >
            <input className='form__radioButton' name='hand' type='radio' value='like'
            onChange={onChange}>
            </input>
            <div className='form__hand'>
               <Hand color={handStyle.color_like}/>
            </div>
         </div>
         <div className={`form__like${handStyle.class_dislike}`}>
            <input className='form__radioButton' name='hand' type='radio' value='dislike'
            onChange={onChange}>
            </input> 
            <div className='form__hand form__hand_inverted'>
               <Hand color={handStyle.color_dislike}/>
            </div>
         </div>
      </div>
)
}
export default FormLikePanel