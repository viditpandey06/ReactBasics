import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../feautures/todo/todoSlice' 
export const store = configureStore({
    reducer:todoSlice
})