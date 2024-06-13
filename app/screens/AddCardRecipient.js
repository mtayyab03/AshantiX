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

export default function AddCardRecipient(props) {
  const route = useRoute();
  const { transferType1, transferType2 } = route.params;
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const isValidName = name.trim().length > 0 && name.trim().length <= 50;
  const isValidPhone =
    phone.trim().length >= 13 &&
    phone.trim().length <= 50 &&
    /^\+?[1-9]\d{1,14}$/.test(phone);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidCardNumber =
    cardNumber.trim().length > 0 && cardNumber.trim().length <= 19;
  const isValidCvc = cvc.trim().length === 3;
  const isValidExpiryMonth =
    expiryMonth.trim().length === 2 &&
    /^(0[1-9]|1[0-2])$/.test(expiryMonth.trim());
  const isValidExpiryYear =
    expiryYear.trim().length === 4 && /^(20\d{2})$/.test(expiryYear.trim());

  const handleConfirm = () => {
    if (
      isValidName &&
      isValidPhone &&
      isValidEmail &&
      isValidCardNumber &&
      isValidCvc
    ) {
      props.navigation.navigate("ConfirmPayment");
    } else {
      // Show error message or take appropriate action
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
            title="Add Money Recipient"
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
      {/* double fields */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: RFPercentage(0.5),
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <TitleFfield
            title="First Name"
            subtitle="e.g Jhon"
            keyboardType="default"
            value={name2}
            onChangeText={setName2}
            validation={{ minLength: 1, maxLength: 50 }}
          />
        </View>
        <View style={{ width: "50%", marginLeft: RFPercentage(2) }}>
          <TitleFfield
            title="Last Name"
            subtitle="e.g Hoffman"
            keyboardType="default"
            value={name}
            onChangeText={setName}
            validation={{ minLength: 1, maxLength: 50 }}
          />
        </View>
      </View>

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
        title="Card Number"
        subtitle="e.g 001-345-12312"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "50%", justifyContent: "center" }}>
          <View style={{ width: "100%", justifyContent: "center" }}>
            <Text
              style={{
                marginVertical: RFPercentage(1),
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.medium,
              }}
            >
              Expiry date
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              borderRadius: RFPercentage(1),
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.stroke,
              height: RFPercentage(6.5),
              justifyContent: "center",
              padding: RFPercentage(2),
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{ fontSize: RFPercentage(1.5) }}
                value={expiryMonth}
                onChangeText={(text) => {
                  // Restrict input to two characters
                  if (text.length <= 2) {
                    setExpiryMonth(text);
                    // Automatically move to year field when two characters are entered
                    if (text.length === 2) {
                      this.yearInput.focus();
                    }
                  }
                }}
                placeholder="MM"
                keyboardType="numeric"
              />
              <Text style={{ fontSize: RFPercentage(1.5) }}>/</Text>
              <TextInput
                ref={(input) => {
                  this.yearInput = input;
                }} // Reference to year input
                style={{ fontSize: RFPercentage(1.5) }}
                value={expiryYear}
                onChangeText={(text) => {
                  // Restrict input to four characters
                  if (text.length <= 4) {
                    setExpiryYear(text);
                  }
                }}
                placeholder="YYYY"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            marginLeft: RFPercentage(1.7),
          }}
        >
          <TitleFfield
            title="CVC"
            subtitle="e.g 303"
            keyboardType="numeric"
            value={cvc}
            onChangeText={setCvc}
            validation={{ minLength: 3, maxLength: 3 }}
          />
        </View>
      </View>

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
