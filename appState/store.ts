import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
// ☝️ THE MAIN DIFFERENCE: Using AsyncStorage instead of 'redux-persist/lib/storage'

import { combineReducers } from 'redux';
import authStateReducer from './slices/auth-slice';

// Import your slice reducers (you'll create these)
// import authReducer from "./slices/authSlice";

/**
 * STEP 1: Combine all your reducers
 * This creates a single root reducer from all your slice reducers
 * Each key here becomes a top-level state property
 */
export const rootReducer = combineReducers({
  auth: authStateReducer,
});

// we have to export the rootstate in order to access it from any file
export type RootState = ReturnType<typeof rootReducer>;

// Declare persistor variable (we'll assign it later)
export let persistor: ReturnType<typeof persistStore>;

// redux persist configuration to ensure the data stays even during reload and failures
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,  // 🎯 React Native storage
  whitelist: ['auth'], // Only persist these reducers
};

/**
 * This wraps your root reducer with persistence capabilities
 * Now Redux will automatically save state to AsyncStorage on changes
 * and restore it when the app starts
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * STEP 5: Create persistor
 * This controls the persistence behavior
 * You'll use this in your root component to show a loading screen
 * while Redux rehydrates (loads saved state from storage)
 */
persistor = persistStore(store);

// Export AppDispatch type for typed dispatch hooks
export type AppDispatch = typeof store.dispatch;