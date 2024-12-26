import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ProfileModal from "@/components/ProfileModal";

interface MySettingItemProps {
  title: string;
  icon: any;
}

const MySettingItem = (props: MySettingItemProps) => {
  const { title, icon } = props;
  return (
    <TouchableOpacity className="py-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <Image source={icon} className="size-7" />
          <Text className="font-rubik-medium ml-3">{title}</Text>
        </View>
        <Image source={icons.rightArrow} className="size-5" />
      </View>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const handleSelectLogoutFromAlret = () => {
    router.push("/signIn");
  };

  const handleClickOnLogout = () => {
    Alert.alert("Logout", "Are you sure want to logout", [
      { text: "Cancel", onPress: () => console.log("You clicked cancel") },
      { text: "Logout", onPress: () => handleSelectLogoutFromAlret() },
    ]);
  };

  const handleCloseProfileModal = () => setVisibleModal(false);

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
              <TouchableOpacity onPress={() => setVisibleModal(true)}>
                <Image
                  source={icons.edit}
                  className="size-6 absolute bottom-0 right-0"
                />
              </TouchableOpacity>
            </View>
            <Text className="text-center w-full font-rubik-medium text-2xl mt-3">
              Pritesh Makasana
            </Text>
          </View>
        </View>
        <View className="border border-primary-200 my-6"></View>
        <MySettingItem title="My Booking" icon={icons.calendar} />
        <MySettingItem title="Payments" icon={icons.wallet} />
        <View className="border border-primary-200 my-3"></View>
        <MySettingItem title="Profile" icon={icons.person} />
        <MySettingItem title="Notification" icon={icons.bell} />
        <MySettingItem title="Security" icon={icons.shield} />
        <MySettingItem title="Language" icon={icons.language} />
        <MySettingItem title="Help Center" icon={icons.info} />
        <MySettingItem title="Invite Friends" icon={icons.people} />
        <TouchableOpacity
          className="py-4 mt-2"
          onPress={() => handleClickOnLogout()}
        >
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Image source={icons.logout} className="size-7" />
              <Text className="font-rubik-medium ml-3 text-danger">Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ProfileModal open={visibleModal} closeModal={handleCloseProfileModal} />
    </SafeAreaView>
  );
};

export default Profile;
