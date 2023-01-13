import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isCart:false
}

const sidebarReducer = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        openSidebar:(state,action)=>{
            state.isCart = true
        },
        closeSidebar:(state,action)=>{
            state.isCart = false
        }
    }
})

export const { openSidebar , closeSidebar } = sidebarReducer.actions
export default sidebarReducer.reducer