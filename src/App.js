import './App.css';
import { useState } from 'react';
import TodolList from './TodolList'

function App() {
  const[inputList,setInputList] = useState();
  const [Items, setItems] = useState([])

  const InputEvent = (event) =>{
    setInputList(event.target.value);
  };
  const listOfItems = () =>{
    const elem = document.getElementById("inputText");
    if (inputList===""){
        alert("Enter Items First"); 
    }else{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  }; 
  }
  const deleteItems = (id) =>{
    console.log("%c Delelted","color:green");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}

  return (
    <>
    <div className="center_div">
    <div className='main_div'>
    <br /><h1>To-Do List</h1><br />
      <input id="inputText" value={inputList} type="text" onChange={InputEvent} placeholder='Add a Items'/>
      <button  onClick={listOfItems}>+</button>
      <ol>
        {
          Items.map((curVal,index)=>{
                return <TodolList
                 text={curVal}
                 id={index}  
                 key={index}
                 onSelect = {deleteItems}
                 />;
          })
        }
        
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
