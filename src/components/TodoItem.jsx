import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png' 
import delete_icon from  '../assets/delete.png'
const TodoItem = ({text,isComplete,id , deleteTodo,toggle}) => {
  return (
    <div className="flex item-centre my-3 gap-2">
        <div onClick={()=>{toggle(id)}}className="flex flex-1 items-center cursor-pointer">
            <img src={isComplete ? tick:not_tick} alt="" />
            <p className={`text-slate-800 ml-3 text-[18px] ${isComplete ? "line-through":""}`}>{text}</p>
        </div>

           <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className="w-2.4 h-6 cursor-pointer"/>


    </div>
  )
}

export default TodoItem