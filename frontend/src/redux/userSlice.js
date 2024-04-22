import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null,
        onlineUsers:null,
        hasNewMessage: false,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        setOtherUsers:(state, action)=>{
            state.otherUsers = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setOnlineUsers:(state,action)=>{
            state.onlineUsers = action.payload;
        },
        setHasNewMessage:(state, action)=>{ 
            state.hasNewMessage = action.payload;
        },
    }
});
export const {setAuthUser,setOtherUsers,setSelectedUser,setOnlineUsers, setHasNewMessage} = userSlice.actions;
export default userSlice.reducer;