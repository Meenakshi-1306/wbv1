function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={styles.item}>
      <span
        onClick={onToggle}
        style={{
          ...styles.text,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'black'
        }}
      >
        {todo.title}
      </span>
      <button onClick={onDelete} style={styles.delete}>X</button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  text: {
    cursor: 'pointer'
  },
  delete: {
    color: 'red',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default TodoItem;
