import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// this componet is very important as it pust global state into usage 

const CartButton = () => {
    const itemNumber: number = 10;
    return (
       <TouchableOpacity className="relative items-center justify-center p-1 rounded-full border-2 border-gray-300">
        <Ionicons
            name="cart"
            size={24}
            color={'black'}
        />
        {itemNumber > 0 && (
            <View className="absolute -top-1 -right-1 bg-red-600 rounded-full min-w-[20px] h-5 items-center justify-center px-1">
                <Text className="text-white text-xs font-bold">{itemNumber}</Text>
            </View>
        ) }
       </TouchableOpacity>
    )
}

export default CartButton;