import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  FontAwesome,
  Octicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";
import TextTwoEnd from "../components/TextTwoEnd";
import AppLine from "../components/AppLine";

export default function DocDetail({ day, date, type }) {
  const [ticbox, setTicbox] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          marginTop: RFPercentage(1),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: "35%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: RFPercentage(0.7),
                height: RFPercentage(0.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.blacky,
                marginRight: RFPercentage(1.5),
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: FontFamily.light,
                  fontSize: RFPercentage(1.5),
                  color: Colors.grey,
                }}
              >
                {day}
              </Text>
              <Text
                style={{
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.5),
                  color: Colors.blacky,
                }}
              >
                {date}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontFamily: FontFamily.light,
              fontSize: RFPercentage(1.4),
              color: Colors.blacky,
            }}
          >
            {type}
          </Text>
        </View>
        <View
          style={{
            width: "25%",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setTicbox(true);
            }}
            style={{
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
              borderWidth: RFPercentage(0.2),
              borderColor: ticbox == true ? Colors.green : "#545454",
              backgroundColor: ticbox == true ? Colors.green : Colors.purewhite,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFPercentage(0.5),
            }}
          >
            {ticbox == true ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setTicbox(false);
                }}
              >
                <AntDesign
                  name="check"
                  size={20}
                  color={ticbox == true ? Colors.white : Colors.blacky}
                />
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: RFPercentage(1),
          height: RFPercentage(0.3),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(1),
        }}
      />
    </>
  );
}
