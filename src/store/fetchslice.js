import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:"item",
    initialState:null,
    reducers:{
        addUser(state,action){
            return action.payload;
            },
        
        removeUser(state,action){},
    },
    }
);
export default userslice.reducer;
export const {addUser} = userslice.actions;