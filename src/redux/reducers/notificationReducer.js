import { createSlice } from "@reduxjs/toolkit";
// import { actions } from "./todoReducer";
import { addTodo } from "./todoReducer";
import { addNote, deleteNote } from "./noteReducer";
const initialState = {
    message: ""
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.message = "";
        }
    },
    // extraReducers: {
    //     "todos/addTodo": (state, action) => {
    //         state.message = "Todo is created";
    //     }
    // }

    // extraReducers: (builder) => {
    //     builder.addCase(actions.addTodo, (state, action) => {
    //         state.message = "Todo is created";
    //     });
    // }

    extraReducers: {
        [addTodo]: (state, action) => {
            state.message = "Todo is created";
        },
        [addNote]: (state, action) => {
            state.message = "Note is created";
        },
        [deleteNote]: (state, action) => {
            state.message = "Note is deleted";
        }

    }
})

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;