import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";
import TitleFfield from "../components/TitleFfield";

export default function AddCryptoRecepient(props) {
  const route = useRoute();
  const { transferType1, transferType2 } = route.params;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");

  const isValidName = name.length > 0 && name.length <= 50;
  const isValidPhone = phone.length >= 13 && phone.length <= 50;
  // You can use a library like validator.js for email validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidCryptoAddress =
    cryptoAddress.length >= 20 && cryptoAddress.length <= 90;

  const handleConfirm = () => {
    if (isValidName && isValidPhone && isValidEmail && isValidCryptoAddress) {
      // Navigate or perform further actions
      props.navigation.navigate("AddRecepientScreen", {
        transferType1,
        transferType2,
      });
    } else {
      // Show error messages or take appropriate action234
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          width: "100%",
          height: RFPercentage(13),
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainHeader
            imageSource={icons.arrowleft}
            title="Add Crypto Recipient"
            onpress={() => {
              props.navigation.navigate("AddRecepientScreen", {
                transferType1,
                transferType2,
              });
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* fields */}
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <TitleFfield
        title="Name"
        subtitle="e.g Jhones Snow"
        keyboardType="default"
        value={name}
        onChangeText={setName}
        validation={{ minLength: 1, maxLength: 50 }}
      />

      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFfield
        title="Phone Number"
        subtitle="e.g 001-345-12312"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
        validation={{ minLength: 13, maxLength: 50 }}
      />

      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFfield
        title="Email"
        subtitle="e.g annabel@app.com"
        keyboardType="default"
        value={email}
        onChangeText={setEmail}
        validation={null} // No length validation, use regex for email validation
      />
      <View style={{ marginTop: RFPercentage(0.5) }} />
      <TitleFfield
        title="Crypto Address"
        subtitle="e.g 416x32443r12344545y987654t234654"
        keyboardType="default"
        value={cryptoAddress}
        onChangeText={setCryptoAddress}
        validation={{ minLength: 20, maxLength: 90 }}
      />

      {/* button */}
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.7}
        onPress={handleConfirm}
      >
        <AppButton title="Confirm" buttonColor={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});
