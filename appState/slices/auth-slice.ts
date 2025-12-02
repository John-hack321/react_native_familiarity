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

// ✅ Fetch authenticated user with proper typing
export const fetchAuthenticatedUser = createAsyncThunk<User, void>(
    'auth/fetchAuthenticatedUser',
    async (_, { rejectWithValue }) => {
        try {
            const user = await getCurrentUser();
            return user as User; // Return the user data with proper type
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
        },

        // ✅ Add logout action
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
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
                // ✅ FIXED: Now properly typed as User
                state.user = action.payload;
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
export const { setIsAuthenticated, setIsLoading, setUser, logout } = authStateSlice.actions;