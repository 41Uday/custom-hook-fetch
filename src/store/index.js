// import {  configureStore } from "@reduxjs/toolkit";

// // const initialState = {
// //   count: 0,
// //   todos: [],
// // };

// // export const todoSlice = createSlice({
// //   name: "todo",
// //   initialState,
// //   reducers: {
// //     addTodo: (state, action) => {
// //       const todo = {
// //         id: Math.random() * 100,
// //         content: action.payload,
// //       };
// //       state.todos.push(todo);
// //       state.count += 1;
// //     },
// //     removeTodo: (state, action) => {
// //       state.todos = state.todos.filter((t) => t.id !== action.payload);
// //       state.count -= 1;
// //     },
// //   },
// // });

// // // export const { addTodo, removeTodo } = todoSlice.actions;
// // export const actions = todoSlice.actions;

// const store = configureStore({
//   reducer: todoSlice.reducer,
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../components/feature/todo";

// const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });

// export default store;
