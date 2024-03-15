import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formList: [],
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
  },
});

export const { addFormField } = Signup.actions;

export default Signup.reducer;
