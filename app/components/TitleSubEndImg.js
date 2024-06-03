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

//Components
import Screen from "../components/Screen";
import icons from "../config/icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleSubEndImg({ title, subtitle, imageSource }) {
  return (
    <View
      style={{
        width: "100%",
        marginTop: RFPercentage(2),
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.bold,
          fontSize: RFPercentage(2.6),
          color: Colors.blacky,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(1.5),
        }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={icons.holiday}
        />
        <Text
          style={{
            marginLeft: RFPercentage(0.5),
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2),
            color: Colors.yellow,
          }}
        >
          {subtitle}
        </Text>
      </View>
      <View
        style={{
          width: RFPercentage(6),
          height: RFPercentage(6),
          borderRadius: RFPercentage(3),
          position: "absolute",
          right: 0,
        }}
      >
        <Image
          style={{
            width: RFPercentage(6),
            height: RFPercentage(6),
            borderRadius: RFPercentage(3),
          }}
          source={imageSource}
        />
      </View>
    </View>
  );
}
