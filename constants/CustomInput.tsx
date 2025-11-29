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
} : customInputProps)=> {

    const [isFocused, setIsfocussed]= useState(false)
    return (
        <View>
            <Text className="text-sm text-black">{label}</Text>
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
                className={cn("px-2 py rounded-lg border-gray-300", 
                    isFocused ? "border-orange-500" : "border-gray-300"
                )}
            />
        </View>
    )
}


export default CustomInput;