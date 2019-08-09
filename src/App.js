import React, {
  useState
} from "react";
import "./App.css";

//material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";

//list item matui
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//todo with list items
function Todo({ todo, index, deleteTodo }) {
  return (
  <div className="todo">
    <ListItemLink href="#simple-list">
      <ListItemText primary={todo.text} onClick={() => deleteTodo(index)} />
    </ListItemLink>
  </div>
  )
}

function Header() {
  return (
    <h1 className="header">To Do List</h1>
  )
}

//form input
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
          <TextField
        label="Next Item..."
        value={value}
        onChange={e => setValue(e.target.value)}
        margin="normal"
        className="textField"
        variant="outlined"
      />
    </form>
  )
}

//app & hook setup
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

  //add todo
  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  //delete todo
  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  
  //render
  return (
    <div className="app">
      <Container maxWidth="sm">
      <Header/>
      <div className="todo">
          {todos.map((todo, index) => 
            <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
            )}
            <TodoForm addTodo={addTodo}/>
      </div>
      </Container>
    </div>
  )
}

export default App;