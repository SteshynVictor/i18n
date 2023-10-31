import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    send: false,
    price: 0
}

export const modalSlice = createSlice({
    name: 'modul',
    initialState,
    reducers:{
        show: (state,action) => {
            state.show = !state.show;
            state.price = action.payload;
        },
        send: (state) => {
            state.send = true;
        }
    }
})

export const {show,send} = modalSlice.actions;

export default modalSlice.reducer;