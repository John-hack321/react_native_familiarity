import { Stack } from "expo-router";
import "./globals.css";

import { persistor, store } from "@/appState/store";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { useAppDispatch, useAppSelector } from "@/appState/hooks";
import { fetchAuthenticatedUser } from "@/appState/slices/auth-slice";

export default function RootLayout() {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  useEffect(() => {
    dispatch(fetchAuthenticatedUser());
  }, [dispatch]);

  if (isLoading) return null;

  return (
    <Provider store={store}>
      <PersistGate 
        loading={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#FE8C00" />
          </View>
        } 
        persistor={persistor}
      >
        <Stack screenOptions={{headerShown: false}}/>;
      </PersistGate>
    </Provider>
  )
}
