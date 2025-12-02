{/*
import seed from "@/lib/seed";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    const [isSeeding, setIsSeeding] = useState<boolean>(false);
    const [seedStatus, setSeedStatus] = useState<string>("");

    const handleSeed = async () => {
        try {
            setIsSeeding(true);
            setSeedStatus("Starting database seeding...");
            
            await seed();
            
            setSeedStatus("✅ Seeding completed successfully!");
            Alert.alert(
                "Success",
                "Database has been seeded with dummy data!",
                [{ text: "OK" }]
            );
        } catch (error: any) {
            setSeedStatus("❌ Seeding failed");
            Alert.alert(
                "Error",
                error.message || "Failed to seed database. Please try again.",
                [{ text: "OK" }]
            );
            console.error("Seeding error:", error);
        } finally {
            setIsSeeding(false);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 items-center justify-center px-5">
                <Text className="text-2xl font-bold text-gray-800 mb-4">
                    Database Seeding
                </Text>
                
                <Text className="text-center text-gray-600 mb-8">
                    Click the button below to populate the database with dummy data
                </Text>

                <TouchableOpacity
                    onPress={handleSeed}
                    disabled={isSeeding}
                    className={`w-full py-4 rounded-full ${
                        isSeeding ? "bg-gray-400" : "bg-orange-500"
                    } items-center justify-center shadow-lg`}
                    activeOpacity={0.7}
                >
                    {isSeeding ? (
                        <View className="flex-row items-center gap-2">
                            <ActivityIndicator size="small" color="white" />
                            <Text className="text-white text-base font-semibold">
                                Seeding Database...
                            </Text>
                        </View>
                    ) : (
                        <Text className="text-white text-base font-semibold">
                            🌱 Seed Database
                        </Text>
                    )}
                </TouchableOpacity>

                {seedStatus !== "" && (
                    <View className="mt-6 p-4 bg-gray-100 rounded-lg w-full">
                        <Text className="text-center text-gray-700">
                            {seedStatus}
                        </Text>
                    </View>
                )}

                <View className="mt-8 p-4 bg-blue-50 rounded-lg w-full">
                    <Text className="text-sm font-semibold text-blue-800 mb-2">
                        ℹ️ What this does:
                    </Text>
                    <Text className="text-xs text-blue-700 leading-5">
                        • Clears existing data{"\n"}
                        • Creates 6 categories{"\n"}
                        • Creates 31 customizations{"\n"}
                        • Creates 24 menu items{"\n"}
                        • Links menu items with customizations
                    </Text>
                </View>

                <Text className="text-xs text-gray-500 text-center mt-6">
                    ⚠️ Warning: This will delete all existing data in the database
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Search;
*/}