import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cn from 'clsx';
import { Fragment } from "react";
import { Image } from "react-native";
import { offers } from "../constants/constants";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data= {offers}
      renderItem={({item, index})=> {
        
        const isEven: boolean= index % 2 ===0;

        return (
          <View>
            {/* this is the offer card */}
            <Pressable
            style= {{backgroundColor: item.color}}
             className= {cn(
              "w-full h-48 my-3 rounded-xl overflow-hidden shadow-lg flex items-center gap-5", 
              isEven ? 'flex-row-reverse' : 'flex-row')}>
              {({pressed})=> (
                <Fragment>
                  <View className= {'h-1/2 w-full'}>
                    <Image source={item.image} className={'size-full'} resizeMode={'contain'}></Image>
                  </View>

                  {/* offer card info will go here */}
                  <View className="flex-1 h-full flex flex-col justify-center items-start gap-4">
                    <Text className="text-lg text-black">
                      {item.title}
                    </Text>
                  </View>
                </Fragment>
              )}
            </Pressable>
          </View>
        )
      }}
      ></FlatList>
    </SafeAreaView>
  );
}
