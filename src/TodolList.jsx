import React,{useState} from 'react'

const TodolList = (props) => {
  const[line,setLine] = useState(false);
  const cutItem = () =>{
      setLine(true);
  }
    return(
        <div className="todoStyle">
          <button onClick={cutItem} onDoubleClick={()=>{
                props.onSelect(props.id);
          }} className='danger'>X</button><li  style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}

export default TodolList;