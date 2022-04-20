import React,{useContext} from 'react'
import {AppContext} from "../App"
export const Key = (props) => {
    const {
        onSelectLetter,
        onDelete,
        onEnter}=useContext(AppContext);

    const selectLetter=()=>{
        if(props.keyval === "Enter"){
         onEnter()
        }
        else if(props.keyval ==="Delete"){
           onDelete()
        }
        else{
         onSelectLetter(props.keyval)
        }
    }
  return (
    <div className='key' id={props.disabled ?"disabled" :""} onClick={selectLetter}>{props.keyval}</div>
  )
}
