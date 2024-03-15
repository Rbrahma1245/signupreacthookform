import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formList: [],
  selectedTableRow: {},
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
    clickTableRow: (state, action) => {
      state.selectedTableRow = action.payload;
    },
    resetTableRow: (state) => {
      state.selectedTableRow = {};
    },
    deleteFormField: (state, action) => {
      let updatedList = state.formList.filter((e) => e.id !== action.payload);
      state.formList = updatedList;
    },
    // updateFormField: (state, action) => {
    //   let data = { ...state.formList.find((e) => e.id === action.payload.id) }; 
    //   data = { ...data, ...action.payload };
  
    //   const updatedFormList = state.formList.map((e) => {
    //     if (e.id === action.payload.id) {
    //       return data; 
    //     }
    //     return e;
    //   });

    //   state.formList = updatedFormList
    // },
    updateFormField: (state, action) => {
      const { id, ...payload } = action.payload;
    
    
        state.formList = state.formList.map(e => e.id === id ? { ...e, ...payload } : e)
  
    }
  },
});

export const {
  addFormField,
  clickTableRow,
  deleteFormField,
  resetTableRow,
  updateFormField,
} = Signup.actions;

export default Signup.reducer;
