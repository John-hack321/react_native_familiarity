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
            style={{
                borderRadius: 9999,
                width: '100%',
                paddingVertical: 16,
                backgroundColor: '#f97316',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 24,
            }}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size='small' color='white' />
            ) : (
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600'
                }}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}

export default CustomButton;