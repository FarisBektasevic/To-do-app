import React from 'react'
import './ToDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({
  input,
  inputChange,
  addNewTask,
  tasks,
  deleteTask,
  changeTask,
}) => {
  return (
    <>
      <h1>TO DO APP</h1>
      <div className="todo-app">
        <form
          className="add-item"
          onSubmit={(e) => {
            addNewTask(e)
          }}
        >
          <input value={input} onChange={(e) => inputChange(e)} type="text" />
          <button type="submit">Add</button>
        </form>
        {tasks.map((task, index) => {
          return (
            <div className="task-div" key={task.id}>
              <span className={task.isDone ? 'done' : ''}>{task.title}</span>
              <div className="buttons">
                <FontAwesomeIcon
                  className="check"
                  icon={faCheck}
                  onClick={() => changeTask(task.id)}
                />
                <FontAwesomeIcon
                  className="icon"
                  icon={faTrashAlt}
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ToDo
