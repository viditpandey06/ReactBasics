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
                text:action.payload.text,

            }
            console.log(todo.text);
            console.log('addTodo initiated 1');
            state.todos.push(todo)
            console.log('addTodo initiated 2');
        },

        removeTodo:(state,action)=>{
               state.todos=state.todos.filter((todo)=>todo.id!=action.payload.id)
               console.log('removeTodo initiated');
        },
        updateTodo:()=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id ? todo.text=action.payload.text:todo)
            console.log('updateTodo initiated');
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer