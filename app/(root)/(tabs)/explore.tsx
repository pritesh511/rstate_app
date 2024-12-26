import { Card } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import { cards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Explore = () => {
  const handleBackToScreen = () => {
    router.back();
  };

  return (
    <SafeAreaView className="h-full px-5">
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="gap-4"
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item} />}
        ListHeaderComponent={
          <>
            <View className="flex flex-row items-center justify-between mt-4 mb-5">
              <TouchableOpacity
                onPress={() => handleBackToScreen()}
                className="w-10 h-10 bg-primary-200 flex flex-row items-center rounded-full justify-center"
              >
                <Image source={icons.backArrow} className="size-6" />
              </TouchableOpacity>
              <Text className="text-lg font-rubik-medium text-black-300">
                Search for Your Ideal Home
              </Text>
              <TouchableOpacity>
                <Image source={icons.bell} className="size-7" />
              </TouchableOpacity>
            </View>
            <View>
              <Search />
            </View>
            <View className="mt-6">
              <Filters />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Explore;
