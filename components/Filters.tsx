import React, { useState } from "react";
import { categories } from "@/constants/data";
import { Text, TouchableOpacity, ScrollView } from "react-native";

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSetCategory = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-2 mb-6"
    >
      {categories.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => handleSetCategory(item.category)}
            key={item.category}
            className={`py-2 px-4 rounded-full mr-4 flex flex-col items-start ${
              selectedCategory === item.category
                ? "bg-primary-300 border border-transparent"
                : "bg-primary-100 border border-primary-200"
            }`}
          >
            <Text
              className={`font-rubik-medium ${
                selectedCategory === item.category
                  ? "text-white"
                  : "text-black-300"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Filters;
