import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Use `useEffect` to fetch data on component mount
  useEffect(() => {
    fetch("http://localhost:5001/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.data);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      Hie There
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
