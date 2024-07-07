// import { deleteNote } from "../../redux/actions/noteActions";
import "./NoteList.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"

import { deleteNote, noteSelector } from "../../redux/reducers/noteReducer";
function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li>
            {/* <p>{note.createdOn.toLocalDateString()}</p> */}
            <p className="note-content">{note.text}</p>
            <button onClick={() => dispatch(deleteNote(index))}
              className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
