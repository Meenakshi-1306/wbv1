import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '16px'
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default AddTodo;
