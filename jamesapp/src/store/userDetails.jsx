import {createSlice} from "@reduxjs/toolkit";
const initialValue = {
   name : " JOSH KUSHE",
   occupation : "SOFTWARE ENGINEER",
   phoneNumber : "09088776655"
}

const userDetailSlice = createSlice ({
    name: 'userDetails',
    initialState: initialValue,

    reducers:{
        setName: (state, action) =>{
            state.name = action.payload
        },
        setOccupation: (state, action)=>{
            state.occupation = action.payload
        },
        setPhoneNumber: (state, action)=>{
            state.phoneNumber = action.payload
        }
    },

})

export const {setName,setOccupation,setPhoneNumber} = userDetailSlice.actions
export default userDetailSlice.reducer