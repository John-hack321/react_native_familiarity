import { getCurrentUser } from "@/lib/appWrite";
import { User } from "@/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
}

// ✅ FIXED: createAsyncThunk automatically gets dispatch via thunkAPI
export const fetchAuthenticatedUser = createAsyncThunk(
    'auth/fetchAuthenticatedUser',
    async (_, { rejectWithValue }) => {
        try {
            const user = await getCurrentUser();
            return user; // Return the user data
        } catch (error: any) {
            console.log(`An error occurred: ${error}`);
            return rejectWithValue(error.message || 'Failed to fetch user');
        }
    }
);

const authStateSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },

        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        }
    },

    // ✅ Handle async thunk states
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthenticatedUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                // state.user = action.payload;
                state.user!.name= action.payload.name
                state.user!.email= action.payload.email
                state.user!.avatar= action.payload.avatar
            })
            .addCase(fetchAuthenticatedUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.payload as string;
                state.user = null;

            });
    }
});

export default authStateSlice.reducer;
export const { setIsAuthenticated, setIsLoading, setUser } = authStateSlice.actions;