import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isCart:false
}

const sidebarSlice = createSlice({
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

export const { openSidebar , closeSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer