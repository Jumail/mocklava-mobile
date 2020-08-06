import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";

export default function CategoryThumbnail() {
  return (
    <View>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 60, height: 60 }}
      />
      <Text style={{ color: "white", marginTop: 4 }}>My Shop</Text>
    </View>
  );
}
