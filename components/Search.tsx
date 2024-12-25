import React, { useState } from "react";
import icons from "@/constants/icons";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <View className="p-3 bg-[#0061FF0A] rounded-md w-full flex flex-1">
      <View className="flex flex-row flex-1 items-center justify-between">
        <View className="flex flex-1 flex-row items-center gap-2">
          <Image source={icons.search} className="size-6" />
          <TextInput
            value={search}
            onChangeText={handleChangeSearch}
            placeholder="Search Something"
            className="flex flex-1 font-rubik"
          />
        </View>
        <TouchableOpacity>
          <Image source={icons.filter} className="size-6" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
