import { router } from "expo-router";
import { FlatList, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cn from 'clsx';
import { Fragment } from "react";
import { Image } from "react-native";
import { offers } from "../../constants/constants";

import CartButton from "@/components/cartButton";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const isAuthenticated: boolean= false;
  if (!isAuthenticated) router.replace('/sign-in')

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <FlatList
      data= {offers}
      keyExtractor={(item) => item.id.toString()}

      ListHeaderComponent={()=> (
         /* header part */
        <View className="flex-row w-full justify-between items-center my-5 px-5">
          <View className="flex-shrink">
            <Text className="text-orange-700 text-xs">DELIVER TO</Text>
            <TouchableOpacity className="flex-row items-center gap-x-1 mt-0.5">
              <Text className="text-base text-dark-100">Croatiaa</Text>
              <Ionicons 
                name="arrow-down"
                size={12}
                color="black" 
              />
            </TouchableOpacity>
          </View>

          <CartButton/>
        </View>
      )}
      renderItem={({item, index})=> {
        
        const isEven: boolean= index % 2 ===0;

        return (
          <View>
            {/* this is the offer card */}
            <Pressable
            style= {{backgroundColor: item.color}}
            className= {cn(
              "w-full h-48 my-3 rounded-xl overflow-hidden shadow-lg flex items-center gap-5", 
              isEven ? 'flex-row-reverse' : 'flex-row')}
              android_ripple={{color: '#fffff22' }}
              >
              {({pressed})=> (
                <Fragment>
                  <View className= {'h-full w-1/2 mx-0'}>
                    <Image source={item.image} className={'size-full'} resizeMode={'contain'}></Image>
                  </View>

                  {/* offer card info will go here */}
                  <View className={cn("flex-1 h-full flex flex-col justify-center items-start gap-4 px-2",
                    isEven ? 'pl-10' : 'pr-10'
                  )
                  }>
                    <Text className="text-white leading-tight font-extra-bold text-3xl">
                      {item.title}
                    </Text>

                    <View className="rounded-full border-2 border-white px-3 w-38">
                    <Ionicons
                          name="arrow-forward"
                          size={24}
                          color="white"
                        />
                    </View>
                  </View>
                </Fragment>
              )}
            </Pressable>
          </View>
        )
      }}
      
      contentContainerClassName="pb-28 px-5"
      />
    </SafeAreaView>
  );
}
