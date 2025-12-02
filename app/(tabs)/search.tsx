import Filter from "@/components/Filter";
import CartButton from "@/components/cartButton";
import SearchBar from "@/components/searchBar";
import MenuCard from "@/constants/MenuCard";
import { getCategories, getMenu } from "@/lib/appWrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { MenuItem } from "@/type";
import cn from "clsx";
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
                const isFirstRightColItem= index % 2 === 0;

                return (
                    <View className={cn(
                        "flex-1 max-w-[48%]",
                        isFirstRightColItem ? 'mt-10' : 'mt-0')}>
                        <MenuCard item= {item as MenuItem}/>
                    </View>
                )
            }}
            keyExtractor={item=> item.$id}
            numColumns={2}
            columnWrapperClassName="gap-7"
            contentContainerClassName="gap-7 px-5 pb-32"
            ListHeaderComponent={()=> {
                return (
                    <View className="my-5 gap-5">
                        <View className="justify-between flex-row w-full">
                            <View className="flex-start">
                                <Text className="font-bold text-sm uppercase text-orange-500">Search</Text>
                                <View className="flex-start flex-row gap-x-1 mt-0.5">
                                    <Text className="font-semibold text-dark-100">Find your favourite food</Text>
                                </View>

                                <SearchBar/>

                                <Filter categories={categories!}/>

                            </View>
                            <CartButton/>
                        </View>
                    </View>
                )
            }}

            ListEmptyComponent={()=> {
                return (
                    <View>
                        <Text>No content found</Text>
                    </View>
                )
            }}
            />
        </SafeAreaView>
    )
}

export default Search;