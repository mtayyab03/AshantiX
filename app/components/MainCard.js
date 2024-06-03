import React, { useState } from "react";
import {
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome5, Octicons, AntDesign, Feather } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import TitleDateRup from "../components/TitleDateRup";
import TitleSubEndImg from "../components/TitleSubEndImg";
import AppLine from "../components/AppLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function MainCard({
  fromdate,
  todate,
  applydays,
  leaveBalance,
  approvedBy,
  status,
}) {
  return (
    <View
      style={{
        width: "90%",
        borderRadius: RFPercentage(2),
        borderWidth: RFPercentage(0.1),
        borderColor: Colors.lightWhite,
        marginTop: RFPercentage(2),
        padding: RFPercentage(2),
        backgroundColor: Colors.purewhite,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
              fontFamily: FontFamily.light,
            }}
          >
            Date
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(1.7),
                color: Colors.blacky,
                fontFamily: FontFamily.medium,
                marginTop: RFPercentage(1),
              }}
            >
              {fromdate} -
            </Text>
            <Text
              style={{
                marginLeft: RFPercentage(0.5),
                fontSize: RFPercentage(1.7),
                color: Colors.blacky,
                fontFamily: FontFamily.medium,
                marginTop: RFPercentage(1),
              }}
            >
              {todate}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            right: 0,
            padding: RFPercentage(1),
            borderRadius: RFPercentage(1),
            backgroundColor: "rgba(48, 190, 182, 0.05)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(1.5),
              color: Colors.darkgreen,
              fontFamily: FontFamily.regular,
            }}
          >
            {status}
          </Text>
        </View>
      </View>

      <AppLine />

      <View
        style={{
          width: "100%",
          marginTop: RFPercentage(2),
          justifyContent: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FontFamily.light,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
            }}
          >
            Apply Days
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
              marginTop: RFPercentage(1),
            }}
          >
            {applydays}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FontFamily.light,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
            }}
          >
            Leave Balance
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
              marginTop: RFPercentage(1),
            }}
          >
            {leaveBalance}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FontFamily.light,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
            }}
          >
            Approved By
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
              color: Colors.blacky,
              marginTop: RFPercentage(1),
            }}
          >
            {approvedBy}
          </Text>
        </View>
      </View>
    </View>
  );
}
