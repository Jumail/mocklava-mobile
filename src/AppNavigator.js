import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountScreen from "./screens/AccountScreen";
import AddShopScreen from "./screens/AddShopScreen";
import BasketScreen from "./screens/BasketScreen";
import ExploreScreen from "./screens/ExploreScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MyShopScreen from "./screens/MyShopScreen";
const Tab = createBottomTabNavigator();

// const HomeNavigator = () => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   return (
//     <BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
//       <BottomNavigationTab title="Home" component={HomeScreen} />
//       <BottomNavigationTab title="Explore" component={ExploreScreen} />
//       <BottomNavigationTab title="My Shop" component={MyShopScreen} />
//       <BottomNavigationTab title="Basket" component={BasketScreen} />
//       <BottomNavigationTab title="Account" component={AccountScreen} />

//     </BottomNavigation>

//   )

// }

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MyShopStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MyShop">
      <Stack.Screen name="MyShop" component={MyShopScreen} />
      <Stack.Screen name="AddShop" component={AddShopScreen} />
    </Stack.Navigator>
  );
}

const HomeNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "#212A47",
      inactiveBackgroundColor: "#212A47",
      activeTintColor: "white",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-compass" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="My Shop"
      component={MyShopStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-albums" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Basket"
      component={BasketScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-basket" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-contact" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
