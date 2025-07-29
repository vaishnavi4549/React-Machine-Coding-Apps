import { useState } from 'react';

export const TodoMain = () => {
    const [todo,setTodo] = useState({
        key:'',
        value:''
    });
    const [todosList,setTodosList] = useState([]);


    const addTodo=()=>{
        const newList = [...todosList];
        newList.push(todo);
        setTodosList(newList);
        setTodo({
            key: '',
            value: ''
        });
    }

    const removeTodo = (index) => () => {
       const updatedList = todosList.filter((key)=> key.key!=index.key);
       setTodosList(updatedList);
        setTodo({
            key: '',
            value: ''
        });
    }

   return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '500px',
        width: '60%',
        margin: '0 auto',
        padding: '20px'
    }}>
        <h1>Todo App</h1>

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '20px'
        }}>
            <div style={{ width: '70%' }}>
                <label>Enter Todo</label>
                <input
                    type="text"
                    value={todo.value}
                    onChange={(event) => {
                        const temp = {
                        key: Date.now(),
                        value: event.target.value
                        };
                        setTodo(temp);
                }}
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
            </div>
            <div style={{ width: '25%', display: 'flex', alignItems: 'flex-end' }}>
                <button onClick={addTodo} style={{ width: '100%', padding: '10px' }}>Submit</button>
            </div>
        </div>

        <div style={{ width: '100%' }}>
        <h2>Todos</h2>
        {todosList.length > 0 ? (
            todosList.map((todo) => (
            <div key={todo.key} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '5px'
            }}>
                <span>{todo.value}</span>
                <button onClick={removeTodo(todo)}>Remove</button>
            </div>
            ))
        ) : (
            <p>No todos yet.</p>
        )}
        </div>
    </div>
);

}