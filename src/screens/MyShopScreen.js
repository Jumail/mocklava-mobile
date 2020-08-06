import {
  Avatar,
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default MyShopScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="My Shop" alignment="center" />
        <Divider />

        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              paddingHorizontal: 20,
            }}
          >
            <Avatar
              source={require("../../assets/icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                marginHorizontal: Dimensions.get("window").width / 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontWeight: "600", fontSize: 20 }}
                >
                  6,407
                </Text>
                <Text style={{ color: "white" }}>Posts</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontWeight: "600", fontSize: 20 }}
                >
                  357M
                </Text>
                <Text style={{ color: "white" }}>Followers</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontWeight: "600", fontSize: 20 }}
                >
                  50
                </Text>
                <Text style={{ color: "white" }}>Following</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginBottom: 8 }}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
              Mocklava
            </Text>
            <Text style={{ color: "gray", fontSize: 16 }}>Share Stories</Text>
            <Text style={{ color: "gray", fontSize: 16 }}>
              www.facebook.com/instagram
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 8,
              height: 50,
            }}
          >
            <Button size="small" style={{ flex: 1, marginRight: 8 }}>
              Edit Shop
            </Button>
            <Button
              onPress={() => {
                navigation.navigate("AddProduct");
              }}
              size="small"
              style={{ flex: 1, marginRight: 8 }}
            >
              Inventory
            </Button>
          </View>
          <Divider />
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-jUPOXXRNdcA-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg")}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/calum-lewis-8Nc_oQsc2qQ-unsplash.jpg")}
              ></Image>

              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/charles-deluvio-D-vDQMTfAAU-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/eaters-collective-12eHC6FxPyg-unsplash.jpg")}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-jUPOXXRNdcA-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg")}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/calum-lewis-8Nc_oQsc2qQ-unsplash.jpg")}
              ></Image>

              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/charles-deluvio-D-vDQMTfAAU-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/eaters-collective-12eHC6FxPyg-unsplash.jpg")}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-jUPOXXRNdcA-unsplash.jpg")}
              ></Image>
              <Image
                style={{
                  width: Dimensions.get("window").width / 3,
                  height: Dimensions.get("window").width / 3,
                }}
                source={require("../assets/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg")}
              ></Image>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
