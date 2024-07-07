// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions"
const { createSlice } = require("@reduxjs/toolkit")
// const { deleteNote } = require("../actions/noteActions")

const initialState = {
    notes: [
        {
            text: "Somthing new for me",
            createdOn: new Date().toDateString()
        },
        {
            text: "Believe your self",
            createdOn: new Date().toDateString()
        }
    ]
}
//Creating React Using Redux Toolkit

const noteSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toDateString()
            })
        },
        deleteNote: (state, action) => {
            state.notes.splice(action.payload, 1);
        }
    }
})

export const noteReducer = noteSlice.reducer;
export const { addNote, deleteNote } = noteSlice.actions;
//Selector
export const noteSelector = (state) => state.noteReducer.notes;
//Created React Using Redux
// export function notesReducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes: [
//                     ...state.notes,
//                     {
//                         text: action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.slice(action.index, 1);
//             return {
//                 ...state,
//                 notes: state.notes
//             }
//         default:
//             return state;
//     }
// }