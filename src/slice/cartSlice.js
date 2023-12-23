import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     cartItem:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     
     addCart:(state,action)=>{
          state.cartItem.push(action.payload)
          console.log(state.cartItem);
     }

  },
})

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions

export default cartSlice.reducer