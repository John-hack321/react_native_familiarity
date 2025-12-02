import React from "react";
import "../globals.css";

import { Redirect, Tabs } from "expo-router";
import { Text, View } from "react-native";

import { useAppSelector } from "@/appState/hooks";
import { TabBarIconProps } from "@/type";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({focused, title, icon}: TabBarIconProps) => (
    <View className="items-center justify-center gap-1 flex-1">
        <Ionicons
            name={icon}
            size={focused ? 24 : 20}
            color={focused ? 'orange' : 'gray'}
        />
        <Text
        className={`text-xs ${focused ? 'font-semibold text-orange-500' : 'font-normal text-gray-500'}`}
        >
            {title}
        </Text>
    </View>
)

export default function Tablayout() {
    const isAuthenticated= useAppSelector((state)=> state.auth.isAuthenticated)
    if (!isAuthenticated) return <Redirect href={'/sign-in'}/>

    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                marginHorizontal: 20,
                height: 80,
                position: "absolute",
                marginBottom: 20,
                backgroundColor: 'white',
                shadowColor: '#1a1a1a',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
                paddingTop: 16,
                paddingBottom: 0,
            },
        }}
        >
            <Tabs.Screen
                name="index" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon focused={focused} title="Home" icon="home" />
                    )
                }}
            />

            <Tabs.Screen
                name="search" 
                options={{
                    title: 'Search',
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon focused={focused} title="Search" icon="search" /> 
                    )
                }}
            />

            <Tabs.Screen
                name="cart" 
                options={{
                    title: 'Cart',
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon focused={focused} title="Cart" icon="cart" />
                    )
                }}
            />

            <Tabs.Screen
                name="profile" 
                options={{
                    title: 'Profile',
                    tabBarIcon: ({focused}) => (
                        <TabBarIcon focused={focused} title="Profile" icon="person" />
                    )
                }}
            />

        </Tabs>
    )
}