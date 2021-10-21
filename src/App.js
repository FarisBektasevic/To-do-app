import { useState } from 'react'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [counter, setCounter] = useState(1)

  const inputChange = (event) => {
    setInput(event.target.value)
  }

  const addNewTask = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
    let task = {
      id: counter,
      title: input,
      isDone: false,
    }

    if (input) {
      setTasks([...tasks, task])
      setInput('')
    }
  }

  const changeTask = (id) => {
    setTasks(
      tasks.map((task, index) => {
        if (task.id === id) {
          task.isDone = !task.isDone
        }
        console.log(index)
        return task
      })
    )
  }
  const deleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e))
  }

  return (
    <div className="App">
      <ToDo
        input={input}
        inputChange={inputChange}
        addNewTask={addNewTask}
        tasks={tasks}
        deleteTask={deleteTask}
        changeTask={changeTask}
      />
    </div>
  )
}

export default App
