import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";
import { addNote } from "../../redux/reducers/noteReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(NoteText);
    dispatch(addNote(noteText))
    setNoteText("");
  };

  return (
    <div className="container">
      {
        message &&
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }

      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
