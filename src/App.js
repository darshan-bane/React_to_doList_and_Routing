import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tabs from './Tabs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // dislay name when written in input field 
  let [value, newValue] = useState('Darsh')

  const onchnage = (event) => {
    const newval = event.target.value;
    newValue(newval)
  }
  // dislay name when written in input field end here

  let [todolist, setToDoList] = useState([])


  let saveToDoList = (event) => {

    let todoname = event.target.todoname.value
    if (!todolist.includes(todoname)) {
      let finalTodolist = [...todolist, todoname]
      setToDoList(finalTodolist)
    } else {
      alert("To Do Name Already Exists")
    }

    event.preventDefault();
  }


  let listt = todolist.map((value, index) => {
    return (
      <TodolistItems value={value} key={index} indexNumber={index}
        todolist={todolist}
        setToDoList={setToDoList}
      />

    )
  })
  return (
    <>
      <div className='App'>

        <h1>To Do List</h1>
        <form onSubmit={saveToDoList}>
          <input type='text' name='todoname'></input>
          <button>Add</button>
        </form>

        <div className='outerDiv'>
          <ul>
            {listt}
          </ul>
        </div>
      </div>


      {/* dislay name when written in input field */}
      <div>
        <h1>{value}</h1>
        <input type='text' value={value} onChange={onchnage}></input>
      </div>

      <Tabs></Tabs>
    </>
  );
}

export default App;

function TodolistItems({ value, indexNumber, todolist, setToDoList }) {
  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber)
    setToDoList(finalData)
  }

  let checkStatus = () => {
    setStatus(!status)
  }


  return (
    <li className={(status) ? 'completed_todo' : ''} onClick={checkStatus}> {indexNumber + 1 + ') '} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}