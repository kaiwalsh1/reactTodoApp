import { useState, useEffect } from 'react';
import axios from 'axios';

export const TodoApp = () => {
    const [ todoInput, setTodoInput ] = useState('');
    const [ todos, setTodos ] = useState([]);

    // useEffect is meant for making API requests to GET data and setting initial state
    // that's coming from a database or some 3rd party service
    // useEffect is all react life cycle methods in one
    // by default, useEffect behaves like componentDidMount
    useEffect(() => {
        // this is where we do our api fetching
        // iffy - to have an async function
        (async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(data);
            setTodos(data);
        })();
    }, []);

    return (
        <>
            <input
                onChange={ (event) => {
                    setTodoInput(event.target.value);                
                }}
                value={todoInput}
            />
            <button
                onClick={() => {
                    const newTodos = [...todos, todoInput];
                    setTodos(newTodos);
                    setTodoInput('');
                }}
            >Submit</button>
            {
                todos.length === 0 ?
                    <h1>No todos yet</h1>
                    :
                    todos.map(todo => <p>{todo.title}</p>)
            }
        </>
    );
};

export default TodoApp;