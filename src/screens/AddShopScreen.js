import {
  Button,
  Divider,
  Icon,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import axios from "axios";
import React from "react";
import { Image, SafeAreaView, View, AsyncStorage } from "react-native";
import { ROUTES } from "../RoutesAPI";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default function AddShopScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [nameText, setNameText] = React.useState();
  const [descText, setDescText] = React.useState();
  const [countrytext, setCountryText] = React.useState();
  const [phoneText, setPhoneText] = React.useState();

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const SaveButton = () => (
    <Button onPress={() => submitForm()} size="small">
      Save
    </Button>
  );

  function submitForm() {
    console.log("Submitting form");
    console.log(ROUTES.createShop);

    // Get the userId
    AsyncStorage.getItem('')


    // axios
    //   .post(ROUTES.createShop, {
    //     name: nameText,
    //     description: descText,
    //     category: selectedIndex,
    //     phone: phoneText,
    //     country: countrytext,
    //     userId: userId,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="Add a shop"
          alignment="center"
          accessoryLeft={BackAction}
          accessoryRight={SaveButton}
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
            onChangeText={(text) => setNameText(text)}
          />
        </View>
        <View style={{ padding: 8 }}>
          <Input
            multiline={true}
            textStyle={{ minHeight: 120 }}
            placeholder="Description"
            onChangeText={(text) => setDescText(text)}
          />
          <Input
            style={{ marginVertical: 8 }}
            placeholder="Country"
            onChangeText={(text) => setCountryText(text)}
          />
          <Input
            style={{ marginVertical: 8 }}
            placeholder="Phone"
            onChangeText={(text) => setPhoneText(text)}
          />

          <View style={{ paddingVertical: 8 }}>
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <SelectItem title="Collectibles & art" />
              <SelectItem title="Electronics" />
              <SelectItem title="Fashion" />
              <SelectItem title="Home & garden" />
              <SelectItem title="Auto parts & accessories" />
              <SelectItem title="Musical instrument & gear" />
              <SelectItem title="Sporting goods" />
              <SelectItem title="Toys & hobbies" />
              <SelectItem title="Other" />
            </Select>
          </View>
        </View>

        <Divider />
      </SafeAreaView>
    </Layout>
  );
}
