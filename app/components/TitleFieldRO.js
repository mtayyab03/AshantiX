import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleFieldRO({ title, placetitle }) {
  return (
    <>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: RFPercentage(1.8),
            color: Colors.blacky,
            marginVertical: RFPercentage(1),
            fontFamily: FontFamily.medium,
          }}
        >
          {title}
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.1),
          borderColor: Colors.stroke,
          height: RFPercentage(6.5),
          justifyContent: "center",
          padding: RFPercentage(1.5),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.grey,
            fontFamily: FontFamily.regular,
          }}
        >
          {placetitle}
        </Text>
      </View>
    </>
  );
}
