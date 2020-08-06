import {
  Divider,
  Icon,
  Input,
  Layout,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import axios from "axios";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { ROUTES } from "../RoutesAPI";

export default function AddProductScreen() {
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
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

  function makeRequest() {
    axios
      .post(ROUTES.addProduct, {})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="Add Product"
          alignment="left"
          accessoryLeft={BackAction}
        />
        <Divider />
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: 60, height: 60, marginRight: 8 }}
          />
          <Input
            style={{ flex: 1 }}
            placeholder="Name"
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={{ padding: 8 }}>
          <Input
            multiline={true}
            textStyle={{ minHeight: 120 }}
            placeholder="Description"
            onChangeText={(text) => console.log(text)}
          />
          <View style={{ paddingVertical: 8, flexDirection: "row" }}>
            <Input
              style={{ flex: 1, marginRight: 4 }}
              placeholder="Price"
              onChangeText={(text) => console.log(text)}
            />
            <Input
              style={{ flex: 1, marginLeft: 4 }}
              placeholder="Quantity"
              onChangeText={(text) => console.log(text)}
            />
          </View>
        </View>
        <Divider />
        <View
          style={{ flexDirection: "row", padding: 8, alignItems: "center" }}
        >
          <Text style={{ fontWeight: "400", fontSize: 18, flex: 1 }}>
            Facebook
          </Text>
          <Toggle checked={checked} onChange={onCheckedChange} />
        </View>
        <View
          style={{ flexDirection: "row", padding: 8, alignItems: "center" }}
        >
          <Text style={{ fontWeight: "400", fontSize: 18, flex: 1 }}>
            Twitter
          </Text>
          <Toggle checked={checked} onChange={onCheckedChange} />
        </View>
        <View
          style={{ flexDirection: "row", padding: 8, alignItems: "center" }}
        >
          <Text style={{ fontWeight: "400", fontSize: 18, flex: 1 }}>
            Instagram
          </Text>
          <Toggle checked={checked} onChange={onCheckedChange} />
        </View>
        <Divider />
      </SafeAreaView>
    </Layout>
  );
}
