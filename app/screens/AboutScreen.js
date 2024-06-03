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
  Linking,
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

import MainHeader from "../components/MainHeader";

import Fieldtwoend from "../components/Fieldtwoend";

export default function AboutScreen(props) {
  const handleImagePress = () => {
    Linking.openURL("https://www.ashantix.com/agreement");
  };
  const handlePolicyPress = () => {
    Linking.openURL("https://www.ashantix.com/policy");
  };
  const handleRegistrationPress = () => {
    Linking.openURL("https://www.ashantix.com/registration");
  };
  const handleBusinnessRegistrationPress = () => {
    Linking.openURL("https://www.ashantix.com/regulation");
  };
  const handleCookiesPress = () => {
    Linking.openURL("https://www.ashantix.com/cookies ");
  };
  const handleReferralPress = () => {
    Linking.openURL("https://www.ashantix.com/referral");
  };
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
            title="About"
            onpress={() => {
              props.navigation.navigate("Profilescreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* text introductory */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(2),
          marginBottom: RFPercentage(1),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.3),
          }}
        >
          Please click the links below to know more about Ashantix and contact
          us, if necessary, for deeper understanding of below information
        </Text>
      </View>

      {/* details */}

      <Fieldtwoend
        title="User Agreement"
        subTitle="Terms and condition to use app"
        imageSource={icons.arrowright}
        onpress={handleImagePress}
      />
      <Fieldtwoend
        title="Privacy Policy"
        subTitle="View our policies"
        imageSource={icons.arrowright}
        onpress={handlePolicyPress}
      />
      <Fieldtwoend
        title="Registration"
        subTitle="See Business Related information"
        imageSource={icons.arrowright}
        onpress={handleRegistrationPress}
      />
      <Fieldtwoend
        title="Business Registration Information"
        subTitle="Licensing information from our regulators"
        imageSource={icons.arrowright}
        onpress={handleBusinnessRegistrationPress}
      />
      <Fieldtwoend
        title="Third Party Cookies Policy"
        subTitle="See your app cookies"
        imageSource={icons.arrowright}
        onpress={handleCookiesPress}
      />
      <Fieldtwoend
        title="Referral Program"
        subTitle="View Referral conditions"
        imageSource={icons.arrowright}
        onpress={handleReferralPress}
      />

      <View
        style={{
          width: "90%",
          padding: RFPercentage(1),
          borderBottomWidth: RFPercentage(0.1),
          borderColor: Colors.lightgrey,
          marginTop: RFPercentage(1.5),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.7),
          }}
        >
          App Version
        </Text>

        <Text
          style={{
            color: Colors.lightgrey,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.7),
            marginRight: RFPercentage(2),
          }}
        >
          1.0.0
        </Text>
      </View>
    </View>
  );
}
