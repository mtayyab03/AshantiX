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
import MainHeader from "../components/MainHeader";
import TitleFieldRO from "../components/TitleFieldRO";

export default function EditAccount(props) {
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
          height: RFPercentage(13),
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainHeader
            imageSource={icons.arrowleft}
            title="Edit Account"
            onpress={() => {
              props.navigation.navigate("Profilescreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* fields */}
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <TitleFieldRO title="Name" placetitle="Annabel K" />
      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFieldRO title="Email" placetitle="Annabel@gmail.com" />
      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFfield title="Phone Number" subtitle="001-345-12312" />

      {/* Signup text */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(1.5),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.8),
          }}
        >
          Password
        </Text>
      </View>
      {/* password */}
      <PasswordField passwrd="**********" />

      {/* Addreess */}
      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFfield title="Address" subtitle="Street no.3,Amailio,Texas" />

      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFieldRO title="Transcation limit" placetitle="50,000$" />

      {/* button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Profilescreen");
        }}
      >
        <AppButton title="Confirm" buttonColor={Colors.primary} />
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});
