import { combineReducers } from 'redux';
import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    All,
    Checked,
    Todo,
} from '../constants';

const initState = [{
    id: 0,
    text: 'Learn Redux',
    completed: false,
}]

const todoReducers = (state = initState, action) => {
    const { id, text, completed } = action;
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id,
                    text
                }
            ]
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id !== id);
        }
        case COMPLETE_TODO: {
            const newTodo = state.map(todo => {
                if (!completed && todo.id === id) {
                    todo.completed = true;
                } else if (completed && todo.id === id) {
                    todo.completed = false;
                }
                return todo;
            });
            return newTodo
        }
        default: {
            return state
        }
    }
}


const rootReducers = combineReducers({
    todoReducers,
})

export default rootReducers;