import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignIn = () => {
  const handleClicSignup = async () => {
    router.push("/");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Image
            source={images.onboarding}
            style={{ width: "100%", height: 600, resizeMode: "contain" }}
            resizeMode="contain"
          />
          <View className="px-5">
            <Text className="font-rubik uppercase text-center text-black-200 mb-3">
              Welcome to Real Scout
            </Text>
            <Text className="font-rubik-bold text-3xl text-black-300 capitalize text-center">
              Let’s get you closer {"\n"}{" "}
              <Text className="text-primary-300">to your ideal home</Text>
            </Text>
            <Text className="font-rubik text-xl mt-3 mb-5 text-black-200 capitalize text-center">
              Login to Real Scout with Google
            </Text>
            <TouchableOpacity
              onPress={() => handleClicSignup()}
              className="w-full py-5 bg-white shadow-md rounded-full shadow-zinc-300"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.google}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-lg text-black-300 font-rubik-medium ml-2">
                  Continue With Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignIn;
