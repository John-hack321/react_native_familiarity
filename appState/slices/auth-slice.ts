import { getCurrentUser } from "@/lib/appWrite";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks";

export interface User {
    name: string;
    email: string;
    accountId: string;
    avatar: string;
    $id?: string; // Optional Appwrite fields
  }

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState= {
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
}

// const dispatch= useAppDispatch()

const authStateSlice= createSlice({
    name: 'authState',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action: PayloadAction<boolean>)=> {
            state.isAuthenticated= action.payload
        },

        setIsLoading: (state, action: PayloadAction<boolean>)=> {
            state.isLoading= action.payload
        },

        setUser: (state, action: PayloadAction<User | null>)=> {
            state.user= action.payload
        }

    },
    extraReducers :(builder) => {}
})

export const fetchAuthenticatedUser= createAsyncThunk(
    'auth/fetchAuthenticatedUser',
    async () => {
    const dispatch= useAppDispatch()

        try {
            const user= await getCurrentUser()
            if (user) {
                dispatch(setIsAuthenticated(true))
                // dispatch(setUser(user))
            }
        } catch (error) {
            console.log(`an error occured ${error}`)
            dispatch(setIsAuthenticated(false)) 
            dispatch(setUser(null))
        }
        finally {
            dispatch(setIsLoading(false))
        }
    }
)

export default authStateSlice.reducer;
export const {setIsAuthenticated, setIsLoading, setUser}= authStateSlice.actions;