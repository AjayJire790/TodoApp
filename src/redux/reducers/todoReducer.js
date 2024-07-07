// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
// import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    todos: [
        { title: "Go to Gym at 6", completed: false },
        { title: "Study at 8", completed: true }
    ]
}

// export const addTodoAsync = createAsyncThunk("todo/addTodo", async (payload) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         headers: {
//             "content-type": "application/todos",
//         },
//         body: JSON.stringify({
//             title: payload,
//             completed: false
//         })
//     });
//     return response.json();
// })

// export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
// (arg, thunkAPI) => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then(res => {
//             console.log(res.data);
//             // dispatch(setInitialState(res.data));
//             thunkAPI.dispatch(setInitialState(res.data));
//         });
// },
// () => {
//     return axios.get("https://jsonplaceholder.typicode.com/todos");
// }
// )

//Creating React using Redux Toolkit
const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        // setInitialState: (state, action) => {
        //     state.todos = [...action.payload]
        // },
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload,
                completed: false
            })
        },
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if (i === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
    //         state.todos = [...action.payload.data];
    //     })
    //         .addCase(addTodoAsync.fulfilled, (state, action) => {
    //             state.todos.push(action.payload);
    //         })
    // }
})

export const todoReducer = todoSlice.reducer;
export const { addTodo, toggle, setInitialState } = todoSlice.actions;
//Selector
export const todoSelector = (state) => state.todoReducer.todos;
//React using Redux

// export function todoReducer(state = initialState, action) {

//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if (i == action.index) {
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }