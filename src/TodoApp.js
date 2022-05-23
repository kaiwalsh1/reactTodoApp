import { useState, useEffect } from 'react';
import axios from 'axios';

export const TodoApp = () => {
    const [ todoInput, setTodoInput ] = useState('');
    const [ todos, setTodos ] = useState([]);

    // useEffect is meant for making API requests to GET data and setting initial state
    // that's coming from a database or some 3rd party service
    // useEffect is all react life cycle methods in one
    // by default, useEffect behaves like componentDidMount

    // componentDidMount - after this component returns its html, the function inside of useEffect will be called 1 time
        // or many times depending on the 2nd parameter
    // componentDidUpdate - 2nd parameter plays a big role here, if there's any elements in the array for the 2nd argument
        // every time one of those elements in the array changes, the function in the first parameter gets called again
    // componentWillUnmount - a function to call when this component leaves the page

    useEffect(() => {
        // this is where we do our api fetching
        // iffy - to have an async function
        (async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(data);
            setTodos(data);
        })();
        // if useEffect returns a function, that function will be called when this component leaves the page
        return () => {
            console.log('im leaving the page');
            // we normally remove all of the subscriptions or events to listen for
            // in the componentWillUnmount
        }
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