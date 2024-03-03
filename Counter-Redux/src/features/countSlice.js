import { createSlice } from "@reduxjs/toolkit"; 

const initialState= {
    number: 0,
}

const countSlice =createSlice({
    name: "count",
    initialState, 
    reducers: {
        increment: (state, action) => {
            state.number += 1
        }, 
        decrement: (state, action) => {
            state.number -=1
        },
        incrementByValue: (state, action) => {
            state.number+= action.payload

        },
        decrementByValue: (state, action) => {
            state.number -=action.payload
        }, 
    }
})

export const {increment, decrement, incrementByValue, decrementByValue} = countSlice.actions; 

export default countSlice.reducer; 