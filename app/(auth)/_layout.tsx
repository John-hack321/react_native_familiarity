import React from "react";
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native";

export default function _layout(){
    return (
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar barStyle="dark-content" backgroundColor="grey" />
        <ScrollView className="bg-white h-full"  keyboardShouldPersistTaps='handled'>
            {/* for this one we wanna apply styles based on the screen height*/}
            <View className="w-full relative" style={[{height: Dimensions.get('screen').height / 2.25}]}>
                <ImageBackground 
                    source={require('../../../assets/images/oath_background_graphics.png')}
                >
                    {/* Add any content that should be displayed over the background image here */}
                </ImageBackground>
            </View>
        </ScrollView>
       </KeyboardAvoidingView>
    )
}