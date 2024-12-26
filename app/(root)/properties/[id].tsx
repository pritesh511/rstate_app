import React from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { facilities, gallery } from "@/constants/data";

const Property = () => {
  const { id } = useLocalSearchParams();
  const windowHeight = Dimensions.get("window").height;

  const handleBackToScreen = () => {
    router.back();
  };

  return (
    <View>
      <ScrollView>
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image
            source={images.japan}
            className="size-full"
            resizeMode="cover"
          />
          <View className="absolute w-full top-0 bottom-0 left-0 right-0">
            <Image source={images.whiteGradient} className="size-full" />
          </View>
          <View className="flex flex-row items-center justify-between flex-1 w-full absolute top-12 px-6">
            <TouchableOpacity onPress={() => handleBackToScreen()}>
              <Image source={icons.backArrow} className="size-8" />
            </TouchableOpacity>
            <View className="flex flex-row items-center gap-6">
              <TouchableOpacity>
                <Image
                  source={icons.heart}
                  className="size-8"
                  tintColor={"#191D31"}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={icons.send}
                  className="size-8"
                  tintColor={"#191D31"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-5 mt-5">
          <Text className="text-2xl font-rubik-semibold">
            Modernica Apartment {id}
          </Text>
          <View className="flex flex-row items-center my-4 gap-4">
            <View className="px-4 py-2 bg-primary-200 rounded-full">
              <Text className="uppercase text-sm text-center font-rubik-medium text-primary-300">
                Apartment
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Image source={icons.star} className="size-8" />
              <Text className="text-black-200 text-lg font-rubik-medium">
                4.8 (1,275 reviews)
              </Text>
            </View>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-row gap-2 items-center w-1/3">
              <View className="p-3 bg-primary-200 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                <Image source={icons.bed} className="size-5" />
              </View>
              <Text className="text-lg font-rubik-medium text-black-300">
                8 Beds
              </Text>
            </View>
            <View className="flex flex-row gap-2 items-center w-1/3">
              <View className="p-3 bg-primary-200 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                <Image source={icons.bath} className="size-5" />
              </View>
              <Text className="text-lg font-rubik-medium text-black-300">
                3 bath
              </Text>
            </View>
            <View className="flex flex-row gap-2 items-center w-1/3">
              <View className="p-3 bg-primary-200 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                <Image source={icons.area} className="size-5" />
              </View>
              <Text className="text-lg font-rubik-medium text-black-300">
                2000 sqft
              </Text>
            </View>
          </View>
          <View className="border-t border-primary-200 my-7" />
          <Text className="text-2xl font-rubik-semibold text-black-300">
            Agent
          </Text>
          <View className="mt-4 flex flex-row items-center justify-between flex-1">
            <View className="flex flex-row gap-3 items-center">
              <Image source={images.avatar} className="size-20" />
              <View className="flex flex-col gap-1">
                <Text className="text-xl font-rubik-semibold text-black-300">
                  Natasya Wilodra
                </Text>
                <Text className="font-rubik-medium text-black-200">Owner</Text>
              </View>
            </View>
            <View className="flex flex-row gap-5">
              <TouchableOpacity>
                <Image source={icons.chat} className="size-8" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.phone} className="size-8" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col gap-3 mt-10">
            <Text className="text-2xl font-rubik-semibold text-black-300">
              Overview
            </Text>
            <Text className="text-black-200 font-rubik-medium">
              Sleek, modern 2-bedroom apartment with open living space, high-end
              finishes, and city views. Minutes from downtown, dining, and
              transit.
            </Text>
          </View>
          <View className="flex flex-col gap-5 mt-10">
            <Text className="text-2xl font-rubik-semibold text-black-300">
              Facilities
            </Text>
            <View className="flex flex-row gap-y-5 flex-wrap">
              {facilities.map((item) => {
                return (
                  <View
                    key={item.title}
                    className="w-1/4 flex flex-col items-center gap-2"
                  >
                    <View className="bg-primary-200 rounded-full flex flex-row items-center justify-center min-h-16 min-w-16">
                      <Image source={item.icon} className="size-6" />
                    </View>
                    <Text
                      numberOfLines={1}
                      className="font-rubik text-black-300 text-center"
                    >
                      {item.title}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View className="flex flex-col gap-5 mt-10">
            <Text className="text-2xl font-rubik-semibold text-black-300">
              Gallery
            </Text>
            <View>
              <FlatList
                data={gallery}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex flex-row gap-4"
                renderItem={({ item }) => (
                  <Image source={item.image} className="size-40 rounded-2xl" />
                )}
              />
            </View>
          </View>
          <View className="flex flex-col gap-5 mt-10">
            <Text className="text-2xl font-rubik-semibold text-black-300">
              Location
            </Text>
            <View className="flex flex-row gap-3">
              <Image source={icons.location} className="size-8" />
              <Text className="text-xl font-rubik text-black-200">
                Grand City St. 100, New York, United States
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={images.map}
                className="h-60 w-full rounded-lg"
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-col gap-5 mt-10">
            <Text className="text-2xl font-rubik-semibold text-black-300">
              Location
            </Text>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row gap-3 items-center">
                <Image source={icons.star} className="size-8" />
                <Text className="text-xl font-rubik-semibold text-black-300">
                  4.8 (1,275 reviews)
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col gap-5 mt-10">
            <View className="flex flex-row gap-3 items-center">
              <Image source={images.avatar} className="size-16" />
              <Text className="font-rubik-medium text-xl">
                Charolette Hanlin
              </Text>
            </View>
            <Text className="text-black-200 text-lg">
              The apartment is very clean and modern. I really like the interior
              design. Looks like I'll feel at home.
            </Text>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row gap-3 items-center">
                <Image
                  source={icons.heart}
                  className="size-8"
                  tintColor={"#0061FF"}
                />
                <Text className="font-rubik-medium text-xl">927</Text>
              </View>
              <Text className="text-black-200 text-lg">6 days ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-1 flex-col gap-1">
            <Text className="uppercase font-rubik text-black-200">Price</Text>
            <Text className="text-xl font-rubik-semibold text-primary-300">
              $17821
            </Text>
          </View>
          <TouchableOpacity className="w-60 py-4 bg-primary-300 flex rounded-full flex-row items-center justify-center shadow-md shadow-zinc-400">
            <Text className="text-center text-white font-rubik-medium">
              Booking Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Property;
