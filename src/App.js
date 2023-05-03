// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, addTodo } from "./components/feature";
// import { useState } from "react";

// function TodoItem(props) {
//   const deleteTodo = () => {
//     props.onCheck(props.id);
//   };
//   return (
//     <div className="todo" onClick={deleteTodo}>
//       <input type="checkbox"></input>
//       <label>{props.text}</label>
//     </div>
//   );
// }

// function App() {
//   const [input, setInput] = useState("");
//   const c = useSelector((state) => state.todo.count);
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();
//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     dispatch(addTodo(input));
//   };

//   const handleTodoDone = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div className="App">
//       <h1>TODO List</h1>
//       <form onSubmit={handleAddTodo}>
//         <input type="text" onInput={(e) => setInput(e.target.value)} />
//         <button type="submit">+</button>
//       </form>
//       <div className="Todos">
//         {c > 0 &&
//           todos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               text={todo.text}
//               id={todo.id}
//               onCheck={handleTodoDone}
//             />
//           ))}
//         {c === 0 && <p>No todos</p>}
//       </div>{" "}
//     </div>
//   );
// }

// export default App;

import useFetch from "./hooks/useFetch";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  return (
    <center>
      <h1>This is a Custom hook </h1>
      {/* <pre>function helloWorld() console.log("Hello, World!")</pre> */}
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </center>
  );
};

export default App;
