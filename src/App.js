import { useState } from 'react';
import './App.css';
import User from './components/User';
import Todos from './components/Todos';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState("");
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        setUsers(json);
      });
      setFlag(true);
  }
  // const fetchUsers = async() => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await response.json();
  //   setUsers(json);
  // }
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => {
        setTodos(json);
      });
      setFlag(false);
  }
  return (
    <div className="App">
      <div className='navbar bg-info'></div>
      <button onClick={fetchUsers} className='btn btn-success py-2 px-4 m-4'>Users</button>
      <button onClick={fetchTodos} className='btn btn-success m-4 px-4 py-2'>Todos</button>
      {(flag) ? 
        <div className="row">
        {
          users.map(user => {
            return (
                <User 
                  user = {user}
                  key = {user.id}
                />
            )
          })
        }
        </div>
        :
        <div className="row">
          {
            todos.map(todo => {
              return (
                <Todos 
                  todos = {todo}
                  key = {todo.id}
                />
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default App;
