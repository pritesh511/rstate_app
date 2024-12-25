import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className="h-80 w-60 rounded-2xl flex flex-col items-start relative">
      <Image source={images.newYork} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 rounded-2xl size-full"
      />
      <View className="absolute right-4 top-4 py-1 px-2 bg-white rounded-xl flex flex-row gap-1 items-center">
        <Image source={icons.star} className="size-5" />
        <Text className="font-rubik-semibold text-primary-300">4.8</Text>
      </View>
      <View className="absolute bottom-4 left-4 right-4 flex flex-col items-start">
        <Text className="text-2xl font-rubik-bold text-white">
          Merialla Villa
        </Text>
        <Text className="font-rubik text-white my-2">
          Radhika recidency surat, 394520
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl text-white font-rubik-bold">$1000</Text>
          <TouchableOpacity className="p-1">
            <Image source={icons.heart} className="size-6" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
      <View className="flex flex-1 w-full h-40 rounded-lg overflow-hidden">
        <Image source={images.newYork} className="size-full" />
      </View>
      <View className="flex flex-col gap-3 mt-3">
        <Text className="text-lg font-rubik-bold">La Grand Maison</Text>
        <Text className="font-rubik text-black-200">Tokyo, Japan</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="font-rubik-extrabold text-xl text-primary-300">
            $1000
          </Text>
          <TouchableOpacity className="p-1">
            <Image
              source={icons.heart}
              className="size-6"
              tintColor={"#191D31"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
