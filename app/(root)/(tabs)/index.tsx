import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Card";
import Filters from "@/components/Filters";
import { router } from "expo-router";
import { cards, featuredCards } from "@/constants/data";

export default function Index() {
  const handleNavigate = (Id: number) => {
    router.push(`/properties/${Id}`);
  };

  const handleNavigateProfile = () => {
    router.push("/profile");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.category.toString()}
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperClassName="flex px-5 gap-5"
        ListHeaderComponent={
          <View className="px-5">
            <View className="py-4 flex flex-row w-full items-center justify-between">
              <TouchableOpacity
                className="flex flex-row items-center gap-2"
                onPress={() => handleNavigateProfile()}
              >
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
                <Text className="font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={featuredCards}
              renderItem={({ item }) => (
                <FeaturedCard
                  data={item}
                  onPressHandler={() => handleNavigate(item.id)}
                />
              )}
              keyExtractor={(item) => item.category.toString()}
              horizontal={true}
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex flex-row gap-5"
            />
            <View className="flex flex-row items-center justify-between flex-1 my-5">
              <Text className="text-xl font-rubik-semibold">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
