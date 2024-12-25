import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Card";
import Filters from "@/components/Filters";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        style={{ flex: 1 }}
        className="px-5"
      >
        <View className="py-4 flex flex-row w-full items-center justify-between">
          <TouchableOpacity className="flex flex-row items-center gap-2">
            <Image source={images.avatar} className="size-14" />
            <View className="flex flex-col">
              <Text className="text-black-200">Good Morning</Text>
              <Text className="text-black-300 font-rubik-semibold">
                Pritesh Makasana
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.bell} className="size-6" />
          </TouchableOpacity>
        </View>
        <Search />
        <View className="flex flex-row items-center justify-between flex-1 my-5">
          <Text className="text-xl font-rubik-semibold">Featured</Text>
          <TouchableOpacity>
            <Text className="font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        </View>
        <FeaturedCard />
        <View className="flex flex-row items-center justify-between flex-1 my-5">
          <Text className="text-xl font-rubik-semibold">
            Our Recommendation
          </Text>
          <TouchableOpacity>
            <Text className="font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        </View>
        <Filters />
        <View className="flex flex-row gap-5 w-full bg-black-200">
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
