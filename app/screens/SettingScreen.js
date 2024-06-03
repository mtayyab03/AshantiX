import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
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
import SearchField from "../components/SearchField";
import TwoEndContainer from "../components/TwoEndContainer";
import Dropdown from "../components/Dropdown";
import SwitchText from "../components/SwitchText";

export default function SettingScreen(props) {
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
            title="Setting"
            onpress={() => {
              props.navigation.navigate("Profilescreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* text help */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(2),
          marginBottom: RFPercentage(0.5),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
          }}
        >
          Notifications
        </Text>
      </View>

      {/* switch */}
      <SwitchText title="Push Notification" />
      <SwitchText title="SMS" />
      <SwitchText title="Phone calls" />
      <SwitchText title="Email" />

      {/* text */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(0.5),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
          }}
        >
          Security
        </Text>
      </View>

      {/* switch */}
      <SwitchText title="Biometric" />
    </View>
  );
}
