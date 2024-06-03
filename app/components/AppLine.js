import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

export default function AppLine() {
  return (
    <View
      style={{
        width: "80%",
        marginTop: RFPercentage(1),
        height: RFPercentage(0.06),
        backgroundColor: Colors.lightgrey,
        borderRadius: RFPercentage(0.5),
      }}
    />
  );
}
