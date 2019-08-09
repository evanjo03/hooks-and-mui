import React, {
  useState
} from "react";
import "./App.css"

const style = {
  button: {
    background: "blue",
    color: "white",
    padding: "5px",
    margin: "5px"
  }
};

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className="todo">
      {todo.text}
      <button style={style.button} onClick={() => deleteTodo(index)}>Delete</button>
    </div>
      
  )
}
function Header() {
  return (
    <h1>To Do List</h1>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([{
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet Z for lunch",
      isCompleted: false
    },
    {
      text: "Interview at Leadpages",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  

  return (
    <div className="app">
      <Header/>
        <div className="todo">
          {todos.map((todo, index) => 
            <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
            )}
            <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;