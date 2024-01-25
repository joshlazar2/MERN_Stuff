import React, {useState} from 'react';
import './Display.css'

const Display = (props) => {
    let {todoList, setTodoList} = props

    const completeHandler = (todo) => {
        const updatedTodoList = todoList.map( (item) => {
            if(item === todo){
                todo.completed = !todo.completed
            }
            return item
        })
        setTodoList(updatedTodoList)
    }

    const deleteHandler = (todo) => {
        const updatedTodoList = todoList.filter( (item) => item !== todo)
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            {
                todoList.map( (todo, idx) => (
                    <div key={idx}>
                        {
                            todo.completed?
                            <h2 className="line-through">To-Do: {todo.item}</h2>:
                            <h2>To-Do: {todo.item}</h2>
                        }
                        <input type="checkbox" name="completed" checked={todo.completed} onClick={() => completeHandler(todo)}/>
                        <button onClick={() => deleteHandler(todo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
