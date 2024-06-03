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

export default function MainHeader({
  imageSource,
  title,
  onpress,
  selectColor,
}) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          left: 0,
        }}
        onPress={onpress}
      >
        <Image
          style={{
            width: RFPercentage(2),
            height: RFPercentage(2),
          }}
          source={imageSource}
        />
        <Text
          style={{
            marginLeft: RFPercentage(0.5),
            fontSize: RFPercentage(1),
            color: Colors.white,
            fontFamily: FontFamily.regular,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: RFPercentage(2.3),
            color: selectColor,
            fontFamily: FontFamily.bold,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
