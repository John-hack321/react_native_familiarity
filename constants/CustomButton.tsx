import { CustomButtonProps } from "@/type";
import cn from 'clsx';
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton= ({
    onPress,
    title= "submit",
    leftIcon,
    isLoading= false
}: CustomButtonProps)=> {
    return (
        <TouchableOpacity
        onPress={onPress}
        className="rounded-full w-full py-1 bg-orange-500"
        >
            <View>
                {isLoading ? (
                    <ActivityIndicator size='small' color='white'/>
                ) : (
                    <Text className={cn('text-white-100 text-sm')}>
                        {title}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}


export default CustomButton;