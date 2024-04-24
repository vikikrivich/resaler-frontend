import { useState } from 'react';

const Home = () => {

  const [todos, setTodos] = useState([
    { name: "first ToDo", body: "let's do chors", id: 1 },
    { name: "second ToDo", body: "let's do washing", id: 2 },
  ])

  return (
    <div className="home">
      <h2>To-Dos: </h2>
      
      { todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
          <h3> {todo.name} </h3>
        </div>
      )) }

    </div>
  )
}

export default Home
