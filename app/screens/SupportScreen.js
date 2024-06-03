import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
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
import MainHeader from "../components/MainHeader";
import TwoEndContainer from "../components/TwoEndContainer";
import Dropdown from "../components/Dropdown";

export default function SupportScreen(props) {
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
            title="Support"
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
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(0.5),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
          }}
        >
          Hi, How can I help you ?
        </Text>

        <Text
          style={{
            marginTop: RFPercentage(1.5),
            color: Colors.grey,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
          }}
        >
          Contact support
        </Text>
      </View>

      {/* details */}
      <TwoEndContainer title="Email: " subtitle="support@ashantix.com" />
      <TwoEndContainer title="Website:: " subtitle="https://www.ashantix.com" />
      <TwoEndContainer title="Phone no: " subtitle="+1 425 890 6234" />

      {/* FAQ */}
      <View style={{ width: "90%" }}>
        <View
          style={{
            width: "20%",
            padding: RFPercentage(1),
            borderRadius: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(2),
            backgroundColor: Colors.secondary,
          }}
        >
          <Text style={styles.buttontext}>FAQs</Text>
        </View>
      </View>

      {/* dropdown */}
      <View style={{ width: "90%", marginTop: RFPercentage(1) }}>
        <Dropdown
          title="I have hit my sending limits"
          description="Welcome to Text Wallet,
        where we're transforming the way you manage your money. Experience 
        lightning-fast, secure transactions via text messages "
        />
        <Dropdown
          title="How do I add a card ?"
          description="Welcome to Text Wallet,
        where we're transforming the way you manage your money. Experience 
        lightning-fast, secure transactions via text messages "
        />
        <Dropdown
          title="How do I add a recepient ?"
          description="Welcome to Text Wallet,
        where we're transforming the way you manage your money. Experience 
        lightning-fast, secure transactions via text messages "
        />
        <Dropdown
          title="I need to send an identity document"
          description="Welcome to Text Wallet,
        where we're transforming the way you manage your money. Experience 
        lightning-fast, secure transactions via text messages "
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
});
