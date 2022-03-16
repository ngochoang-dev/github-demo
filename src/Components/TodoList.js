import React, { useState } from 'react';
import Todo from './Todo';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, completeTodo } from '../redux/actions';


function TodoList() {
    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const { todoReducers } = useSelector(state => state)

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: uuidv4(),
            text: text
        }))
        setText('')
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleComplete = (id, completed) => {
        dispatch(completeTodo(id, completed))
    }

    return (
        <div className="todolist_container">
            <Filter />
            {
                todoReducers.map((data) => {
                    return <Todo
                        key={data.id}
                        {...data}
                        handleDelete={handleDelete}
                        handleComplete={handleComplete}
                    />
                })
            }
            <div className="form_input">
                <input type="text" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button type="submit"
                    onClick={handleAddTodo}
                >Add Job</button>
            </div>
        </div>
    )
}

export default TodoList