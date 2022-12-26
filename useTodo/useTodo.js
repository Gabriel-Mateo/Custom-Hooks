import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoreducer';
import { useCounter } from '../useCounter/useCounter';

const initialState = [];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodo = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

   
       
  
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    const handleNewTodo = (todos) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todos
        }
        dispatch(action);
    }
    
    const onDeleteTodo = (todos) => {
        dispatch({
            type: '[TODO] Delete Todo',
            payload: todos.id
        })
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggleTodo',
            payload: id
        })
    } 
   
    return {
        ...todos,
        todos,
        handleNewTodo,
        onDeleteTodo,
        onToggleTodo, 
        todoCount: todos.length,
        pendingTodoCount: todos.filter(todo=> !todo.done).length
        
    }
 
}
