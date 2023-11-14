import { useContext,createContext } from "react";

export const todoContext = createContext({
    todo:[{}],
addTodo:(todo)=>{},
updateTodo : (id,todo)=>{},
deleteTodo : (id)=>{},
toggleComplete : (id)=>{}
})

export const useTodo = ()=>{
    return useContext (todoContext)
}
export const Todoprovider = todoContext.Provider 
