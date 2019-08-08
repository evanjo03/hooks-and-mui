import React, {
  useState
} from "react";

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

  return (
    <div className="app">
        <div className="todo">
          {todos.map(todo => {
            return(
              <h1>{todo.text}</h1>
            )
          })}
      </div>
    </div>
  )
}

export default App;