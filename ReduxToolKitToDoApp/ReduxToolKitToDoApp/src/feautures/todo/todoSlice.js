import { createSlice , nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:1,
        text:"Hello",
       // completed:false
    }]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        //properties and functions are stored.
        //you will get two things 'state','action'.
        //state is current state of the function.
        //actions are the values that are passed in the action for function.
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload

            }
           
            console.log('addTodo initiated 1');
            state.todos.push(todo)
            console.log('addTodo initiated 2');
        },

        removeTodo:(state,action)=>{
               state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            todo=state.todos.map
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer