import React, {useState} from 'react';

const Form = (props) => {
    let {todoList, setTodoList} = props

    const [todo, setTodo] = useState({
        item: "",
        completed: false
    })

    const changeHandler = (event) => {
        setTodo({...todo, [event.target.name]:event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setTodoList([...todoList, todo])
        setTodo({
            item: "",
            completed: false
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>To-Do:</label>
                <input type="text" name="item" onChange={changeHandler} value={todo.item}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Form;
