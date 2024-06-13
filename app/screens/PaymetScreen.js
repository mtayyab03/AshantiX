import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

// redux
import { selectBankDetails } from "../redux/features/bankDetailsSlice";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function PaymetScreen(props) {
  const bankDetails = useSelector(selectBankDetails) || [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Payments</Text>
        </View>
      </View>

      {/* button add  */}
      <View
        style={{
          width: "90%",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("AddSenderBank");
          }}
          style={{
            padding: RFPercentage(1),
            borderRadius: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(2),
            backgroundColor: Colors.secondary,
          }}
        >
          <Text style={styles.buttontext}> + Add Bank</Text>
        </TouchableOpacity>
      </View>

      {/* sender */}
      <View style={{ width: "90%", marginTop: RFPercentage(1.5) }}>
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          Sender Details
        </Text>

        {bankDetails.length === 0 ? (
          <View
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginTop: RFPercentage(3),
                color: Colors.secondary,
                fontFamily: FontFamily.medium,
              }}
            >
              No bank details found
            </Text>
          </View>
        ) : (
          bankDetails.map((detail, index) => (
            <View
              key={index}
              style={{
                marginTop: RFPercentage(1),
                width: "100%",
                borderRadius: RFPercentage(1),
                borderWidth: RFPercentage(0.1),
                borderColor: Colors.stroke,
                justifyContent: "center",
                padding: RFPercentage(2),
                backgroundColor: Colors.purewhite,
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: RFPercentage(5), height: RFPercentage(5) }}
                  source={icons.mastercard}
                />

                <View style={{ marginLeft: RFPercentage(2) }}>
                  <Text
                    style={{
                      color: Colors.blacky,
                      fontFamily: FontFamily.regular,
                      fontSize: RFPercentage(1.7),
                    }}
                  >
                    {detail.bankName}
                  </Text>
                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      color: Colors.grey,
                      fontFamily: FontFamily.regular,
                      fontSize: RFPercentage(1.3),
                    }}
                  >
                    {detail.accountNumber}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  header: {
    width: "100%",
    height: RFPercentage(13),
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    width: "100%",
    position: "absolute",
    bottom: RFPercentage(2),
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: RFPercentage(2.3),
    color: Colors.white,
    fontFamily: FontFamily.bold,
  },
  buttonText: {
    color: Colors.white,
    fontSize: RFPercentage(1.5),
    fontFamily: FontFamily.semiBold,
  },
  loginButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  recentTransfersContainer: {
    width: "90%",
    marginTop: RFPercentage(3),
    marginBottom: RFPercentage(0.5),
  },
  recentTransfersText: {
    color: Colors.blacky,
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(2),
  },
  errorText: {
    color: "red",
    marginTop: RFPercentage(1),
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(1.5),
  },
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
});
