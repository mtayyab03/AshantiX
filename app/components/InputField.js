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
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function InputField({ placeTitle }) {
  const [Name, onChangeName] = useState("");
  return (
    <View style={styles.emailmain}>
      <TextInput
        onChangeText={onChangeName}
        value={Name}
        placeholder={placeTitle}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  emailmain: {
    width: "90%",
    height: RFPercentage(6.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderRadius: RFPercentage(1.5),
    borderColor: Colors.stroke,
    color: Colors.blacky,
    paddingHorizontal: RFPercentage(1.5),
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
  input: { fontFamily: FontFamily.regular },
});
