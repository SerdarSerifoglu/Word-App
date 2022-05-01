import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loginForm: {},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		changeLoginForm: (state, action) => {
			console.log("changeLoginForm run in authSlice");
			state.loginForm = action.payload;
		},
	},
	extraReducers: {},
});

export const loginForm = (state) => state.auth.loginForm;

export const { changeLoginForm } = authSlice.actions;
export default authSlice.reducer;
