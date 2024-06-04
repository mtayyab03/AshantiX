import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TextTwoEnd({ title, subtitle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RFPercentage(0.5),
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.regular,
          fontSize: RFPercentage(1.7),
          color: Colors.blacky,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(1.7),
          color: Colors.grey,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
