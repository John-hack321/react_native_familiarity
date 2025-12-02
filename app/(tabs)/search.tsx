import { getCategories, getMenu } from "@/lib/appWrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search= ()=> {

    const {category, query}= useLocalSearchParams<{query: string, category: string}>()

    const {data, refetch, loading}= useAppwrite({
        fn: getMenu,
        params: {
            category,
            query,
            limit: 6,
        }
    })

    const {data: categories}= useAppwrite({fn: getCategories})

    useEffect(()=> {
        refetch({category, query, limit: 6})
    },[category, query])

    console.log(data) // just for debugging purposes

    return (
        <SafeAreaView className="bg-white h-full">
            <FlatList
            data= {data}
            renderItem={({item, index})=> {
                return (
                    <View className="flex-1 max-w-[48%]">
                        <Text>Menu Card</Text>
                    </View>
                )
            }}
            />
        </SafeAreaView>
    )
}

export default Search;