import React from 'react'
import './Todo.styles.css'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
      <div>
          <label>
              <input className='input' type='checkbox' checked={todo.complete} onChange={handleTodoClick} />
                        {todo.name}

          </label>
      </div>
  )
}
