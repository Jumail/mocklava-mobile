import {
  Avatar,
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// components
import CategoryThumbnail from "../components/CategoryThumbnail";
import ProductThumbnail from "../components/ProductThumbnail";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = React.useState("");
  const BackIcon = (props) => <Icon {...props} name="search" />;
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
      <SafeAreaView style={{ flex: 1, paddingVertical: 20 }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 28, fontWeight: "700" }}>
              Mocklava
            </Text>
            <Text style={{ color: "white" }}>Good evening Mohamed,</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Avatar
              source={require("../../assets/icon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
          <Input
            placeholder="Search for anything..."
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
            accessoryLeft={BackAction}
          />
        </View>
        <ScrollView>
          <View style={{ marginVertical: 8, paddingLeft: 20 }}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MyShop");
                }}
                style={{ paddingRight: 20 }}
              >
                <CategoryThumbnail name="Fashion" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Shop");
                }}
                style={{ paddingRight: 20 }}
              >
                <CategoryThumbnail name="Explore" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Account");
                }}
                style={{ paddingRight: 20 }}
              >
                <CategoryThumbnail name="Account" />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingRight: 20 }}>
                <CategoryThumbnail name="Cart" />
              </TouchableOpacity>
              <View style={{ paddingRight: 20 }}>
                <CategoryThumbnail name="Products" />
              </View>
            </ScrollView>
          </View>
          <Divider style={{ marginVertical: 8 }} />

          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Featured Products
              </Text>
              <Button
                size="tiny"
                onPress={() => navigation.navigate("ScrollScreen")}
              >
                VIEW ALL
              </Button>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                paddingLeft: 20,
                paddingVertical: 16,
                marginEnd: 20,
              }}
            >
              <View style={{ marginRight: 8 }}>
                <ProductThumbnail name="Hello" />
              </View>
              <View style={{ marginRight: 8 }}>
                <ProductThumbnail name="Hello" />
              </View>
              <View style={{ marginRight: 8 }}>
                <ProductThumbnail name="Hello" />
              </View>
              <View style={{ marginRight: 8 }}>
                <ProductThumbnail name="Hello" />
              </View>
            </ScrollView>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Best Selling
              </Text>
              <Button size="tiny">VIEW ALL</Button>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                paddingLeft: 20,
                paddingVertical: 16,
                marginEnd: 20,
              }}
            >
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Recently Added
              </Text>
              <Button size="tiny">VIEW ALL</Button>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                paddingLeft: 20,
                paddingVertical: 16,
                marginEnd: 20,
              }}
            >
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
              <View style={{ marginRight: 8 }}>
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
                  MSI Laptop
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
}
