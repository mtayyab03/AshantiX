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

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import DoubleField from "../components/DoubleField";

export default function LoginScreen(props) {
  const [Name, onChangeName] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={icons.mainlogo} />
      </View>

      {/* Signup text */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(1),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
          }}
        >
          Signup
        </Text>
      </View>

      {/* Name */}
      <DoubleField ftitle="First Name" ltitle="Last Name" />

      {/* //email input */}
      <View style={styles.emailmain}>
        <TextInput
          onChangeText={onChangeName}
          value={Name}
          placeholder="User Name or Email"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* password */}

      <PasswordField passwrd="Password" />
      {/* confirm password */}

      <PasswordField passwrd="Confirm Password" />

      {/* mobile no */}
      <InputField placeTitle="Mobile Number" />
      {/* City Zipcode */}
      <InputField placeTitle="Address" />

      {/* city country */}
      <DoubleField ftitle="City" ltitle="Country" />

      {/* button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      >
        <AppButton title="Signup" buttonColor={Colors.secondary} />
      </TouchableOpacity>

      {/* Signup */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: RFPercentage(5),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.5),
          }}
        >
          Don’t have an account ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: Colors.secondary,
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(1.5),
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  logo: {
    width: RFPercentage(13),
    height: RFPercentage(13),
  },

  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
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
  input: { fontFamily: FontFamily.regular },

  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },

  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
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
