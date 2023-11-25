import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos]= useState([])
  const [toDo,setTodo]= useState({})

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,Thing to done 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo.name} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,toDo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
     {  toDos.map((value)=>{

     function removeTodo(toDo){
           const updatedTodos = [...toDos];
           updatedTodos.splice(toDo,1);
           setTodos(updatedTodos)
     }
     
     return(
       <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i onClick={()=>removeTodo(toDo)} className="fas fa-times"></i>
          </div>   
        </div>  )
        })
     } 
      </div>
    </div>
  );
}

export default App;