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

export default function PasswordField({ passwrd }) {
  const [eyeIcon, setEyeIcon] = useState(false);
  const [Password, onChangePassword] = useState("");
  return (
    <View style={styles.emailmain}>
      <TextInput
        onChangeText={onChangePassword}
        value={Password}
        // value={Password}
        placeholder={passwrd}
        placeholderTextColor={Colors.placeholder}
        secureTextEntry={true && !eyeIcon}
      />
      <TouchableOpacity
        onPress={() => setEyeIcon(!eyeIcon)}
        activeOpacity={0.7}
        style={styles.eyeicon}
      >
        <MaterialCommunityIcons
          color={Colors.grey}
          style={{ right: RFPercentage(1) }}
          size={RFPercentage(3)}
          name={eyeIcon ? "eye-outline" : "eye-off-outline"}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  emailmain: {
    width: "90%",
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
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
});
