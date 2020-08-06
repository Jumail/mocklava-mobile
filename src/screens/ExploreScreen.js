import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function ExploreScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="Explore" alignment="center" />
        <Divider />
        <ScrollView style={{ flex: 1 }}>
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
}
