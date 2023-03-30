import React, { useState } from 'react'
import ListCompo from './ListCompo';
const ToDoList = () => {
  const [item,setItem] = useState();
  const [newItem, setNewItem] = useState([]);

  const ItemEvent = (event) =>{
    setItem(event.target.value);
  }
  const addItem = () =>{
    setNewItem((preVal)=>{
        return [...preVal, item];
    })
    setItem("");
  }

  const deleteItems = (id) =>{
    console.log("%c Delelted","color:green");
    setNewItem((preVal)=>{
      return preVal.filter((arrElem,index)=>{
        return index !== id;
      })})}

  return (
    <>
        <div className="center_div" >
            <div className="main_div">
                <br />
                <h1>TODO List</h1>
                <br />
                <input value={item} onChange={ItemEvent} type="text" placeholder='Add an item' />
                <button onClick={addItem} className='addBtn'>+</button>
                <br />
                <ol>
                  {newItem.map((val,index)=>{
                    return(<ListCompo
                    text={val}
                    key={index}
                    id={index}
                    onSelect = {deleteItems}
                    func={deleteItems}
                    />)
                  })}
                </ol>
                <br />
            </div>
        </div>
    </>
  )
}

export default ToDoList 