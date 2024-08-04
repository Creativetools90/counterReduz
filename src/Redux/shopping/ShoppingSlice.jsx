import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  value: 'none',
  list: [], // List of items in the cart
}

export const ShoppingSlice = createSlice({
  name: 'Shopping',
  initialState: InitialState,
  reducers: {
    Insert: (state, action) => {
      // Push the new item into the list
      state.list.push(action.payload);
      // Update the value to the payload or whatever you need
      state.value = action.payload;
    }
  }
})

// Export the actions
// eslint-disable-next-line react-refresh/only-export-components
export const { Insert } = ShoppingSlice.actions;

// Export the reducer for the store
export default ShoppingSlice.reducer;
