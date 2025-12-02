import { Category } from "@/type";
import cn from "clsx";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

interface FilterProps {
    categories?: Category[];
}

const Filter = ({ categories = [] }: FilterProps) => {
    const searchParams= useLocalSearchParams()
    const [active, setActive]= useState(searchParams.category || '')

    const handlePress= (id: string)=> {
        setActive(id)

        if (id === "all") router.setParams({undefined})
        else router.setParams({id})
    }

    const filterData: (Category | {$id : string, name: string}[])= categories ? 
        [{$id: 'all', name: 'All'}, ...categories] :
        [{$id: 'all', name: 'All'}]

    return (
       <FlatList
       data={filterData}
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerClassName="gap-x-2 pb-3"
       renderItem={({item})=> {
        return (
            <TouchableOpacity
            key={item.$id}
            onPress={()=> handlePress(item.$id)}
            className={cn("rounded-full px-5 py-2",
                active === item.$id ? 'bg-orange-500' : 'bg-white'
            )}>
                <Text className={cn("font-semibold" ,
                    active === item.$id ? "text-white" : 'text-gray-100'
                )}>{item.name}</Text>
            </TouchableOpacity>
        )
       }}
       keyExtractor={(item)=> item.$id}
       />
    )
}

export default Filter;
