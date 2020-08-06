import {
  Avatar,
  Button,
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";

export default ShopScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="My Shop"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Divider />
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
              <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                6,407
              </Text>
              <Text style={{ color: "white" }}>Posts</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                357M
              </Text>
              <Text style={{ color: "white" }}>Followers</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                50
              </Text>
              <Text style={{ color: "white" }}>Following</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
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
            Follow
          </Button>
          <Button size="small" style={{ flex: 1, marginRight: 8 }}>
            Message
          </Button>
          <Button size="small">D</Button>
        </View>
        <Divider />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "red",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "blue",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "yellow",
              }}
            ></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "blue",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "yellow",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "red",
              }}
            ></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "red",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "blue",
              }}
            ></View>
            <View
              style={{
                width: Dimensions.get("window").width / 3,
                height: Dimensions.get("window").width / 3,
                backgroundColor: "yellow",
              }}
            ></View>
          </View>
        </View>
      </SafeAreaView>
    </Layout>
  );
};
