import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import {
  FontAwesome5,
  Foundation,
  Octicons,
  AntDesign,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import DoubleField from "../components/DoubleField";
import AppLine from "../components/AppLine";
import IconTitle from "../components/IconTitle";

export default function Profilescreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          width: "100%",
          height: RFPercentage(19),
          backgroundColor: Colors.secondary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: RFPercentage(3),
          }}
        >
          <View
            style={{
              width: RFPercentage(7),
              height: RFPercentage(7),
              borderRadius: RFPercentage(3),
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.stroke,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: RFPercentage(7), height: RFPercentage(7) }}
              source={icons.profile}
            />
          </View>
          <View style={{ marginLeft: RFPercentage(1.4) }}>
            <Text
              style={{
                color: Colors.white,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
              }}
            >
              Annabel K
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
              }}
            >
              annabel@gmail.com
            </Text>
          </View>
        </View>
      </View>

      {/* profile functions */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("EditAccount");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(2),
        }}
      >
        <MaterialCommunityIcons
          name="account-box"
          size={28}
          color={Colors.blacky}
        />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Account
          </Text>
        </View>
      </TouchableOpacity>
      <AppLine />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("TransferHistory");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <Octicons name="history" size={26} color={Colors.blacky} />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Transfer History
          </Text>
        </View>
      </TouchableOpacity>
      <AppLine />

      {/* Setting */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("SettingScreen");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <AntDesign name="setting" size={26} color={Colors.blacky} />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Setting
          </Text>
        </View>
      </TouchableOpacity>
      <AppLine />

      {/* Support */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("SupportScreen");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <Entypo name="help" size={26} color={Colors.blacky} />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Support
          </Text>
        </View>
      </TouchableOpacity>
      <AppLine />

      {/* About */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("AboutScreen");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <Foundation name="info" size={26} color={Colors.blacky} />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            About
          </Text>
        </View>
      </TouchableOpacity>
      <AppLine />

      {/* logut */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <MaterialIcons name="logout" size={26} color={Colors.red} />
        <View style={{ marginLeft: RFPercentage(1.4) }}>
          <Text
            style={{
              color: Colors.red,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
