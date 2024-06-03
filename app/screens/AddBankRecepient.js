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

export default function AddBankRecepient(props) {
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
            title="Add Bank Recipient"
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
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(3),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <TitleFfield
          title="Name"
          subtitle="e.g Jhones Snow"
          keyboardType="default"
        />

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Phone Number"
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
        />

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Bank Name "
          subtitle="e.g Capital one"
          keyboardType="default"
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Account Number"
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Routing Number"
          subtitle="e.g 1111-111-11-111"
          keyboardType="numeric"
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="BIC"
          subtitle="e.g 000-000-00-220-11"
          keyboardType="numeric"
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="IBAN"
          subtitle="e.g US01UNIL222233434"
          keyboardType="default"
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Address"
          subtitle="e.g street no 3, Amilio, Washington D.C, USA"
          keyboardType="default"
        />

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
          <View style={{ width: "55%" }}>
            <TitleFfield
              title="State"
              subtitle="e.g Texas"
              keyboardType="default"
            />
          </View>
          <View style={{ width: "45%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title="Zipcode"
              subtitle="e.g 100984"
              keyboardType="numeric"
            />
          </View>
        </View>

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
          <View style={{ width: "45%" }}>
            <TitleFfield
              title="City"
              subtitle="e.g Illonois"
              keyboardType="default"
            />
          </View>
          <View style={{ width: "55%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title="Country"
              subtitle="e.g USA"
              keyboardType="default"
            />
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("AddRecepientScreen", {
              transferType1,
              transferType2,
            });
          }}
        >
          <AppButton title="Confirm" buttonColor={Colors.secondary} />
        </TouchableOpacity>
      </ScrollView>
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
