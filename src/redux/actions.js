import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';

export const addTodo = ({ text, id }) => {
    return {
        type: ADD_TODO,
        id,
        text,
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const completeTodo = (id, completed) => {
    return {
        type: COMPLETE_TODO,
        id,
        completed
    }
}

