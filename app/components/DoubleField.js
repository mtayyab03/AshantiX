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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function DoubleField({ ftitle, ltitle }) {
  const [Name, onChangeName] = useState("");
  const [LName, onChangelName] = useState("");
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.doublefield}>
        <TextInput
          onChangeText={onChangeName}
          value={Name}
          placeholder={ftitle}
          placeholderTextColor={Colors.placeholder}
        />
      </View>
      <View style={styles.doublefield}>
        <TextInput
          onChangeText={onChangelName}
          value={LName}
          placeholder={ltitle}
          placeholderTextColor={Colors.placeholder}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  doublefield: {
    width: "48%",
    height: RFPercentage(6.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    color: Colors.blacky,
    paddingHorizontal: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
});
