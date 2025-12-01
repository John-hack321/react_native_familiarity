import { useAppSelector } from "@/appState/hooks";
import { authImages } from "@/constants/constants";
import { Slot } from "expo-router";
import React from "react";
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native";
import "../globals.css";

export default function Authlayout(){
    const isAuthenticated= useAppSelector((state)=> state.auth.isAuthenticated)
   //  if (!isAuthenticated) return <Redirect href={'/'}/>

    return (
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar barStyle="light-content" backgroundColor="grey" />
        <ScrollView className="bg-white h-full"  keyboardShouldPersistTaps='handled'>
            {/* for this one we wanna apply styles based on the screen height*/}
            <View className="w-full relative bg-green-500 overflow-hidden rounded-b-lg" style={[{height: Dimensions.get('screen').height / 2.25}]}>
                <ImageBackground 
                    source={authImages.background}
                    className="size-full rounded-b-lg bg-red-700"
                    resizeMode="stretch"
                    
                >
                </ImageBackground>
                {/* we will render our logo within this image too */}
                <Image 
                    source={authImages.logo}
                    className="self-center size-28 absolute -bottom-4 rounded-full z-10"
                    />
            </View>
            
            <Slot/>

        </ScrollView>
       </KeyboardAvoidingView>
    )
}