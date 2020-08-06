import {
  Avatar,
  Button,
  Card,
  Divider,
  Icon,
  Layout,
  Modal,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function ScrollScreen({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
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
      <SafeAreaView>
        <TopNavigation
          title="Featured Products"
          alignment="left"
          accessoryLeft={BackAction}
        />
        <Divider />

        <ScrollView>
          <View>
            <View
              style={{ padding: 8, alignItems: "center", flexDirection: "row" }}
            >
              <Avatar
                source={require("../../assets/icon.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "700",
                  marginHorizontal: 8,
                  flex: 1,
                }}
              >
                Mocklava
              </Text>
              <Button onPress={() => setModalVisible(true)} size="small">
                M
              </Button>
            </View>
            <Image
              source={require("../../assets/icon.png")}
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                padding: 8,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Button>L</Button>
                <Button>C</Button>
                <Button>S</Button>
              </View>
              <Button>B</Button>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>
                18,432 likes
              </Text>
              <View>
                <Text style={{ color: "white", fontWeight: "700" }}>
                  MSI Laptop
                </Text>
                <Text style={{ color: "white" }}>
                  Elit sunt in enim id excepteur eiusmod amet veniam ullamco
                  minim.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Modal
          visible={modalVisible}
          backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onBackdropPress={() => setModalVisible(false)}
        >
          <Card>
            <Button
              style={{ width: "100%", marginBottom: 8 }}
              onPress={() => setModalVisible(false)}
            >
              Report
            </Button>
            <Button
              style={{ width: "100%", marginBottom: 8 }}
              onPress={() => setModalVisible(false)}
            >
              About This Account
            </Button>
            <Button
              style={{ width: "100%", marginBottom: 8 }}
              onPress={() => setModalVisible(false)}
            >
              Copy Link
            </Button>
            <Button
              style={{ width: "100%", marginBottom: 20 }}
              onPress={() => setModalVisible(false)}
            >
              Share to...
            </Button>
            <Button
              style={{ width: "100%" }}
              onPress={() => setModalVisible(false)}
            >
              Cancel
            </Button>
          </Card>
        </Modal>
      </SafeAreaView>
    </Layout>
  );
}
