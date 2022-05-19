import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (loginForm) => {
	const res = await axios.post(`http://localhost:4000/auth/login`, loginForm);
	return res.data;
});

export const logout = createAsyncThunk("auth/login", async (loginFrm) => {
	const res = await axios.get(`http://localhost:4000/auth/logout`);
	return res.data;
});
const initialState = {
	loginForm: {},
	user: {},
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
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			console.log("fulfilled", action.payload);
		},
	},
});

export const loginForm = (state) => state.auth.loginForm;

export const { changeLoginForm } = authSlice.actions;
export default authSlice.reducer;
