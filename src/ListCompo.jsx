import React, { useState } from 'react'

const ListCompo = (props) => {
    const[line,setLine] = useState(false);
    const cutItem = () =>{
        setLine(true);
    }
    const onDelete = () =>{
        props.func(props.id)
    }
 
  return (
    <div className="todo_style">
        <button className='danger' onClick={cutItem} onDoubleClick={onDelete}  >X</button>
        <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    </div>
  )
}

export default ListCompo    