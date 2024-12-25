import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-6 pb-32"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-black-300 font-rubik-semibold text-xl">
            Profile
          </Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-center mt-4">
          <View className="flex flex-col items-center">
            <View className="relative">
              <Image source={images.avatar} />
              <Image
                source={icons.edit}
                className="size-6 absolute bottom-0 right-0"
              />
            </View>
            <Text className="text-center w-full font-rubik-medium text-2xl mt-3">
              Pritesh Makasana
            </Text>
          </View>
        </View>
        <View className="border border-primary-200 my-6"></View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Image source={icons.calendar} className="size-7" />
            <Text className="font-rubik-medium ml-3">My Booking</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mb-0">
          <View className="flex flex-row items-center">
            <Image source={icons.wallet} className="size-7" />
            <Text className="font-rubik-medium ml-3">Payments</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="border border-primary-200 my-6"></View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.person} className="size-7" />
            <Text className="font-rubik-medium ml-3">Profile</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.bell} className="size-7" />
            <Text className="font-rubik-medium ml-3">Notification</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.shield} className="size-7" />
            <Text className="font-rubik-medium ml-3">Security</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.language} className="size-7" />
            <Text className="font-rubik-medium ml-3">Language</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.info} className="size-7" />
            <Text className="font-rubik-medium ml-3">Help Center</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.people} className="size-7" />
            <Text className="font-rubik-medium ml-3">Invite Friends</Text>
          </View>
          <Image source={icons.rightArrow} className="size-5" />
        </View>
        <View className="flex flex-row items-center justify-between my-6 mt-0">
          <View className="flex flex-row items-center">
            <Image source={icons.logout} className="size-7" />
            <Text className="font-rubik-medium ml-3 text-danger">Logout</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
