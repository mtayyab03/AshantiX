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
import { Formik } from "formik";
import {
  FontAwesome5,
  Octicons,
  Fontisto,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
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
import TextTwoEnd from "../components/TextTwoEnd";
import AppLine from "../components/AppLine";

export default function FailScreen(props) {
  const route = useRoute();
  const { transferType1, transferType2 } = route.params;
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
            title="Success"
            onpress={() => {
              props.navigation.navigate("ConfirmPayment", {
                transferType1,
                transferType2,
              });
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* success logo */}
      <View style={{ marginTop: RFPercentage(13) }} />
      <Image
        style={{ width: RFPercentage(15), height: RFPercentage(15) }}
        source={icons.circlecross}
      />
      <Text
        style={{
          color: Colors.blacky,
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(2),
        }}
      >
        Transaction Failed !
      </Text>
      <Text
        style={{
          marginTop: RFPercentage(0.8),
          color: Colors.grey,
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(1.5),
        }}
      >
        Please try again
      </Text>
      {/* button */}
      <View style={{ marginTop: RFPercentage(1) }} />
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
        }}
      >
        <AppButton title="Try Again" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
});
