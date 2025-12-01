import { customInputProps } from "@/type";
import cn from 'clsx';
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const CustomInput= ({
    placeholder= "enter text",
    value,
    onChangeText,
    label,
    secureTextEntry= false,
    keyboardType= "default",
    classValues= ""
} : customInputProps)=> {

    const [isFocused, setIsfocussed]= useState(false)
    return (
        <View className={`w-full ${classValues}`}>
            <Text className="text-sm text-black mb-2 font-medium">{label}</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onFocus={()=> setIsfocussed(true)}
                onBlur={()=> setIsfocussed(false)}
                placeholder={placeholder}
                placeholderTextColor={'#888'}
                className={cn(
                    ` px-4 py-3 rounded-lg border-2 bg-gray-900, 
                    ${isFocused ? "border-orange-500" : "border-gray-300"}`
                )}
            />
        </View>
    )
}

export default CustomInput;