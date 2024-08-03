import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 'none',
    name : ['ironName','dr_doom','deadpool','vulvrin','hulk'],
};

export const RandomNameSlice = createSlice({
    name : 'randomNameSlice',
    initialState,
    reducers : {
        randomNameIncreement : (state)=> {
            const randomNameIndex = Math.floor(Math.random() * state.name.length); 
            state.value = state.name[randomNameIndex] ;
        }
    }
})
// eslint-disable-next-line react-refresh/only-export-components
export const { randomNameIncreement } = RandomNameSlice.actions;
export default RandomNameSlice.reducer;