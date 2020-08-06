import {
  Button,
  Divider,
  Input,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import axios from "axios";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { ROUTES } from "../RoutesAPI";

export default ShopScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  function Login() {
    console.log(ROUTES.login);
    console.log(email, password);
    axios
      .post(ROUTES.login, {
        email: email,
        password: password,
      })
      .then(async function (response) {
        console.log("Trying to fetch response");
        console.log(response.data);
        // if (response.data.success == true) {
        //   await AsyncStorage.setItem("@App:token", response.data.token);
        //   await AsyncStorage.setItem("@User:email", email);
        //   await AsyncStorage.setItem("@User:password", password);
        //   await AsyncStorage.setItem("@User:userId", response.data.userId);

        //   navigation.goBack();
        // } else {
        //   console.log(response.data.error);
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="Login" alignment="center" />
        <Divider />
        <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20 }}>
          <Input
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="password"
            value={password}
            style={{
              marginTop: 8,
            }}
            onChangeText={(text) => setPassword(text)}
          />

          <Button style={{ marginTop: 8 }} onPress={() => Login()}>
            Login
          </Button>
          <Button style={{ marginTop: 8 }} onPress={() => Register()}>
            Sign Up
          </Button>
        </View>
      </SafeAreaView>
    </Layout>
  );
};
