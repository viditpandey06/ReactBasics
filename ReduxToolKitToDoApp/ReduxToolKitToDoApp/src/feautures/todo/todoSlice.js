import { createSlice , nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:1,
        text:"Hello",
        completed:false
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
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
               state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        updateTodo:()=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id ? todo.text=action.payload.text:todo)
        }
    }
})