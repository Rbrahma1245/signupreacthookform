import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formList: [],
  selectedTableRow : {} 
};

const Signup = createSlice({
  name: "signupForm",
  initialState,

  //ACTIONS
  reducers: {
    addFormField: (state, action) => {
      let id = Math.random().toString(36).substr(2, 9);
      state.formList.push({ ...action.payload, id });
    },
    clickTableRow: (state, action)=> {
      state.selectedTableRow = action.payload
    },
    resetTableRow: (state, action)=> {
      state.selectedTableRow = {}
    },
    deleteFormField: (state, action) => {
      let updatedList = state.formList.filter((e) => e.id !== action.payload);
  
      state.formList = updatedList;
    },
  },
});

export const { addFormField,clickTableRow, deleteFormField, resetTableRow } = Signup.actions;

export default Signup.reducer;
