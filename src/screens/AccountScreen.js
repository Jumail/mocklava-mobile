import {
  Avatar,
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default function AccountScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <Avatar
      style={{ marginHorizontal: 16 }}
      source={require("../../assets/icon.png")}
    />
  );

  const renderTitle = (props) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text {...props}>Account</Text>
    </View>
  );

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
      <SafeAreaView style={{ flex: 1, paddingVertical: 8 }}>
        <TopNavigation
          title={renderTitle}
          accessoryLeft={BackAction}
          accessoryRight={renderOverflowMenuAction}
        />
        <Divider />

        <View style={{ paddingVertical: 8 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddShop");
            }}
            style={{
              flexDirection: "row",
              paddingVertical: 8,
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Button size="tiny">M</Button>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 18,
                flex: 1,
                marginHorizontal: 8,
              }}
            >
              Create a shop
            </Text>
            <Button size="tiny">M</Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Logout");
            }}
            style={{
              flexDirection: "row",
              paddingVertical: 8,
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Button size="tiny">M</Button>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 18,
                flex: 1,
                marginHorizontal: 8,
              }}
            >
              Logout
            </Text>
            <Button size="tiny">M</Button>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Layout>
  );
}
