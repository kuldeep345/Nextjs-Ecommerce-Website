import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        const itemInCart = state.cart.find((item)=>item.id === action.payload.id)
        if(itemInCart){
            itemInCart.quantity++
        }
        else{
            state.cart.push({...action.payload , quantity:1})
        }
    },
    increaseQty:(state , action)=>{
        const item = state.cart.find((item)=>item.id === action.payload.id)
        if(item){
            item.quantity++;
        }
    },
    decreaseQuantity:(state,action)=>{
        const item = state.cart.find((item)=>item.id === action.payload.id)
        if(item.quantity === 1){
          const removeItem = state.cart.filter((item)=> item.id !== action.payload.id)
          console.log(removeItem)
          state.cart = removeItem
        }
        else{
            item.quantity--;
        }
    },
    removeItem:(state,action)=>{
        const removeItem = state.cart.filter((item)=> item.id !== action.payload)
        state.cart = removeItem
    },
    clearCart:(state,action)=>{
        state.cart = []
    }
  },
})

export const { addToCart , decreaseQuantity , increaseQty , removeItem } = cartSlice.actions
export default cartSlice.reducer