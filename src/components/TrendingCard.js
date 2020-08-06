import { Button } from "@ui-kitten/components";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

export default function TrendingCard(props, { navigation }) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width - 40,
        flexDirection: "row",
        padding: 8,
      }}
    >
      <Image
        source={require("../../assets/bag.png")}
        style={{
          width: Dimensions.get("window").width / 3,
          height: "100%",
          marginRight: 4,
        }}
      />

      <View
        style={{
          paddingHorizontal: 8,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
          Shop Name
        </Text>
        <Text style={{ color: "white", marginTop: 4 }}>
          Cupidatat ipsum ullamco ea exercitation tempor voluptate exercitation.
        </Text>
        <Text
          style={{
            marginTop: 4,
            color: "white",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          4.5*
        </Text>
        <Button
          style={{ marginTop: 4 }}
          onPress={() => {
            navigation.navigate("Shop");
          }}
        >
          Explore
        </Button>
      </View>
    </View>
  );
}
