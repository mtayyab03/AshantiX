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
import {
  FontAwesome5,
  Octicons,
  AntDesign,
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
import TitleFfield from "../components/TitleFfield";

export default function ForgetMailScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* arrow icon */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: RFPercentage(5),
            height: RFPercentage(5),
            borderRadius: RFPercentage(3),
            borderWidth: RFPercentage(0.1),
            borderColor: Colors.stroke,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <AntDesign name="arrowleft" size={24} color={Colors.blacky} />
        </TouchableOpacity>
      </View>

      {/* text */}
      <View
        style={{
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(1),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(3.2),
          }}
        >
          Forget Password
        </Text>
      </View>

      {/* email address field */}
      <View style={{ marginTop: RFPercentage(5) }} />
      <TitleFfield title="Email Address" subtitle="abc@gmail.com" />

      {/* button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("ForgetPwdScreen");
        }}
      >
        <AppButton title="Confirm" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});
