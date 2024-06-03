import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Foundation,
  FontAwesome5,
  Octicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

//screens
import HomeScreen from "../screens/HomeScreen";
import PaymetScreen from "../screens/PaymetScreen";
import Profilescreen from "../screens/Profilescreen";

//config
import Colors from "../config/Colors";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#7B7B7B",
        headerShown: false,
        tabBarStyle: {
          height: wp("18%"),
          padding: 5,
          paddingBottom: RFPercentage(2),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="PaymetScreen"
        component={PaymetScreen}
        options={{
          tabBarLabel: "Payments",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="swap-horizontal-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    backgroundColor: Colors.third,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
