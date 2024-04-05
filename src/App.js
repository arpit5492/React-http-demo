import './App.css';

function App() {
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => console.log(json))
  }
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => console.log(json))
  }
  return (
    <div className="App">
      <div className='navbar bg-info'></div>
      <button onClick={fetchUsers} className='btn btn-success py-2 px-4 m-4'>Users</button>
      <button onClick={fetchTodos} className='btn btn-success m-4 px-4 py-2'>Todos</button>
    </div>
  );
}

export default App;
