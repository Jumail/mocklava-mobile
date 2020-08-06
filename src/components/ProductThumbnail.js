import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";

export default function ProductThumbnail(props) {
  return (
    <View>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 8,
          color: "white",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {props.name}
      </Text>
    </View>
  );
}
