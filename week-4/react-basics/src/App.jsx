import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
  }, [todos])


  const addTodo = () => {
    todos.push({
      id: Date.now(),
      title,
      description,
      completed: false
    });

    setTitle("");
    setDescription("");
    setTodos(todos);
  }

  const getRandomTodos = async () => {
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();

    setTodos(json.todos);
  }

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        id="title"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input> <br /><br />

      <input
        type="text"
        id="description"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input> <br /><br />

      <button onClick={addTodo}>Add todo</button>
      <button onClick={getRandomTodos}>Get Random Todos</button>
      <br /> <br />

      <div id="todos">
        {todos && todos.map((todo) => (
          <div key={todo.id}>
            <div className="title">{todo.title}</div>
            <div className="description">{todo.description}</div>
            <button onClick={() => handleToggle(todo.id)}>{todo.completed ? "Done" : "Mark as Done"}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
