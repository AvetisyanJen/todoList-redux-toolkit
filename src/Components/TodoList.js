import {useDispatch, useSelector } from "react-redux"
import { deleteTodo,editTodo } from "../redux/todoSlice";

function TodoList({editText}){
    const todo = useSelector((state) => state.todos);
    const dispatch=useDispatch()
    console.log(todo)
    return(<>
    <div className="main-list">
        <ul>
{todo.map((elm)=>{
    return<div key={elm.id} className="list-div">
      
        <p>{elm.name}</p>
        <div className="btn-list">
    <button className="btn-btn" onClick={()=>{dispatch(deleteTodo(elm.id))}}>delete</button>
    <button className="btn-btn" onClick={()=>{dispatch(editTodo({id:elm.id,editText:editText}))}}>edit</button>
    </div>
    </div>
})}
</ul>
</div>
    </>)
}export default TodoList