import { CustomButtonProps } from "@/type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton= ({
    onPress,
    title= "submit",
    style,
    textStyle,
    leftIcon,
    isLoading= false
}: CustomButtonProps)=> {
    return (
        <TouchableOpacity
         className="rounded-full w-full py-1 bg-orange-500"
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}


export default CustomButton;