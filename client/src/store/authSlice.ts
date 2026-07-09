import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type {
    AuthState,
    User,
} from "@/types/auth";

const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;
const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken,
    isAuthenticated: Boolean(storedToken),
    loading: false,
    error: null,
};

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {

        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        loginSuccess: (
            state,
            action: PayloadAction<{
                user: User;
                token: string;
            }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },

        loginFailure: (
            state,
            action: PayloadAction<string>
        ) => {

            state.loading = false;

            state.error = action.payload;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },

    },

});

export const {

    loginStart,

    loginSuccess,

    loginFailure,

    logout,

} = authSlice.actions;

export default authSlice.reducer;