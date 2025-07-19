import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
