import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Complete project setup', completed: false },
    { id: 2, title: 'Design dashboard layout', completed: true },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React CRUD Dashboard</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  }
};

export default App;
