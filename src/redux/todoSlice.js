import { createSlice } from '@reduxjs/toolkit';
const todoSlice =createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
        addTodo: (state, action) => {
                state.push(action.payload);
              },
              deleteTodo:(state,action)=>{
                
                return state.filter(elm=>elm.id!==action.payload)
              },
               editTodo:(state,action)=>{
                
                const index = state.findIndex(todo => todo.id === action.payload.id);
                state[index].name= action.payload.editText.name;
           
              },
              deleteAll:(state,action)=>{
             return  state=[]
              }

				
        },
       
    
     
	})
 export const { addTodo,deleteTodo,editTodo,deleteAll} = todoSlice.actions;
export default todoSlice.reducer;