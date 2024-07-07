import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { todoSelector, toggle } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";

function ToDoList() {

  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;
  useEffect(() => {
    // dispatch(getInitialStateAsync());
    // fetch("http://localhost:4100/api/todos")
    //   .then(res => res.json())
    //   .then(parseJson => { 
    //     console.log(parseJson); 
    //   })

    // axios.get("https://jsonplaceholder.typicode.com/todos")
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch(setInitialState(res.data));
    //   });
    
  });

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.title}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>
              {todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => { dispatch(toggle(index)) }}
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;