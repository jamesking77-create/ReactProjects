import {createSlice} from "@reduxjs/toolkit";
const initialValue = {
    count: 0
}

const countSlice = createSlice({
    name: 'coun',
    initialState: initialValue,
    reducers:{
        incrementByOne: (state) => {
            state.count +=1
        },
        decrementByOne: (state) => {
            state.count -=1
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        },
        decrementByValue: (state, action) => {
            state.count -= action.payload
        }
    },
})

export const { incrementByOne, decrementByOne,incrementByValue, decrementByValue} = countSlice.actions
export default countSlice.reducer