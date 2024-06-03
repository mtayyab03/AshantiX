import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function Dropdown({ title, description }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.fieldcolor,
          width: "100%",
          borderRadius: RFPercentage(0.5),
          height: RFPercentage(7),
          justifyContent: "center",
          marginTop: RFPercentage(1),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.5),
              marginLeft: RFPercentage(3),
              color: Colors.blacky,
            }}
          >
            {title}
          </Text>
          {dropdown ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setDropdown(false);
              }}
              style={{
                position: "absolute",
                right: RFPercentage(3.4),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={icons.downarrow}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setDropdown(true);
              }}
              style={{
                position: "absolute",
                right: RFPercentage(3),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={icons.uparrow}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* dropdown */}
      {dropdown ? (
        <View
          style={{
            backgroundColor: Colors.fieldcolor,
            width: "100%",
            padding: RFPercentage(2),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.5),
              color: Colors.grey,
            }}
          >
            {description}
          </Text>
        </View>
      ) : null}
    </>
  );
}
