import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: any;
}

const TabIcon = (props: TabIconProps) => {
  const { focused, title, icon } = props;
  return (
    <View className="flex flex-col flex-1 items-center mt-2">
      <Image
        source={icon}
        tintColor={focused ? "#0061FF" : "#666876"}
        className="size-6"
        resizeMode="contain"
      />
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik"
        } w-full font-rubik-medium text-center text-xs mt-2`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          minHeight: 70,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#00061FFA",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title={"Home"} focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} title="Explore" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
