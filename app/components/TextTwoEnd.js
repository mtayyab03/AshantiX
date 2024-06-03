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
        marginVertical: RFPercentage(1.5),
      }}
    >
      <View style={{ width: "40%" }}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.7),
            color: Colors.blacky,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ width: RFPercentage(30) }}>
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.5),
            color: Colors.blacky,
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
