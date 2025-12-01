import { CustomButtonProps } from "@/type";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
    onPress,
    title = "submit",
    leftIcon,
    isLoading = false
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="rounded-full w-full py-4 bg-orange-500 items-center justify-center mt-6"
            activeOpacity={0.7}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size='small' color='white' />
            ) : (
                <Text className="text-white text-base font-semibold">
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}

export default CustomButton;