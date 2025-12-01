import { authImages } from "@/constants/constants";
import { Slot } from "expo-router";
import React from "react";
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native";

export default function _layout(){
    return (
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar barStyle="light-content" backgroundColor="grey" />
        <ScrollView className="bg-white h-full"  keyboardShouldPersistTaps='handled'>
            {/* for this one we wanna apply styles based on the screen height*/}
            <View className="w-full relative bg-green-500" style={[{height: Dimensions.get('screen').height / 2.25}]}>
                <ImageBackground 
                    source={authImages.background}
                    className="size-full rounded-b-lg bg-red-700"
                    resizeMode="stretch"
                    
                >
                    {/* we will render our logo within this image too */}
                    <Image 
                    source={authImages.logo}
                    className="self-center size-28 absolute -bottom-16 rounded-full z-10"
                    />
                    
                </ImageBackground>
            </View>
            
            <Slot/>

        </ScrollView>
       </KeyboardAvoidingView>
    )
}