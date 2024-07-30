import { createSlice } from "@reduxjs/toolkit";

export interface authScreenState{
  screenType:"LOGIN"|"REGISTRATION"|"RESET";
  isLoggedIn:boolean;
}
const initialState:authScreenState={
    screenType:'LOGIN',
    isLoggedIn:true
}

const authScreenSlice=createSlice({
  name:'authScreen',
  initialState,
  reducers:{
    setScreenType:(state,action)=>{
      state.screenType=action.payload;
    },
    setLoggedIn:(state,action)=>{
      state.isLoggedIn=action.payload;
    }
  }
});
export const {setScreenType,setLoggedIn}=authScreenSlice.actions;
export default authScreenSlice.reducer;
