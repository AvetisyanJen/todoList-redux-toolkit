import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addTodo, deleteAll } from '../redux/todoSlice'
import TodoList from './TodoList';

function AddTodo() {

    const todo = useSelector((state) => state.todos);
    const [value, setValue] = useState({
        id: new Date().toString(),
        name: ""
    })
    const dispatch = useDispatch()

    const onSubmit = (event) => {

        event.preventDefault();
        if (value) {
            dispatch(
                addTodo(value))

        }
        setValue({
            id: new Date().toString(),
            name: ""
        })
    };

    return (<> 
    <div className="wrapper">
    <div className="form_button">
        <form onSubmit={onSubmit}>
          
            <label>Add your Liste Here</label>
            <input
                type='text'

                placeholder='Add Todo...'
                value={value.name}
                onChange={(event) => setValue({ ...value, name: event.target.value })}
            ></input>
          
            <button className="submit">Submit</button>
        </form>
     {todo.length>0 &&  <button className="submit-delet" onClick={() => dispatch(deleteAll())}>Delet All</button>}
     </div>
        <TodoList editText={value} />
        </div>
    </>)
}
export default AddTodo