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
import TextTwoEnd from "../components/TextTwoEnd";

export default function ConfirmPayment(props) {
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
            title="Confirm Payment"
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

      {/* alert */}
      <View
        style={{
          marginTop: RFPercentage(1),
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.1),
          borderColor: Colors.stroke,
          justifyContent: "center",
          padding: RFPercentage(1.5),
          backgroundColor: Colors.fieldcolor,
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.red,
            fontFamily: FontFamily.regular,
          }}
        >
          Alert !
        </Text>
        <Text
          style={{
            fontSize: RFPercentage(1.3),
            color: Colors.grey,
            fontFamily: FontFamily.regular,
            textAlign: "center",
            width: "90%", // Adjust the width as needed
            alignSelf: "center",
          }}
        >
          If someone try to scam you or fraud, please contact us at
          001-234-567-8888 to keep your money safe.
        </Text>
      </View>

      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Sender
        </Text>
        <View
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
                Mastercard/Visa Bank
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(0.5),
                  color: Colors.grey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.3),
                }}
              >
                5432 1234 **** ****
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recipient */}
      <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Recipient
        </Text>
        <View
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
              style={{ width: RFPercentage(4), height: RFPercentage(4) }}
              source={icons.hoffor}
            />

            <View style={{ marginLeft: RFPercentage(2) }}>
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.7),
                }}
              >
                Hoffor Bank
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(0.5),
                  color: Colors.grey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.3),
                }}
              >
                5432 1234 **** ****
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Amount details */}
      <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
        <Text
          style={{
            fontSize: RFPercentage(1.5),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Amount
        </Text>
        <View
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
          <TextTwoEnd title="Transfer amount" subtitle="$173.00" />
          <View style={{ marginTop: RFPercentage(1) }} />
          <TextTwoEnd title="Transfer fee" subtitle="$2.00" />
          <View style={{ marginTop: RFPercentage(1) }} />
          <TextTwoEnd title="Visa Card fee" subtitle="$3.00" />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: RFPercentage(1.5),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.7),
                color: Colors.secondary,
              }}
            >
              Total Amount
            </Text>

            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(1.7),
                color: Colors.grey,
              }}
            >
              $178.00
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: RFPercentage(2),
              height: RFPercentage(0.06),
              backgroundColor: Colors.fieldcolor,
              borderRadius: RFPercentage(0.5),
            }}
          />

          <View style={{ marginTop: RFPercentage(1) }} />
          <TextTwoEnd title="Sender Name " subtitle="Ana Watson" />
          <View style={{ marginTop: RFPercentage(1) }} />
          <TextTwoEnd title="Receiver Name " subtitle="Jhones Snow" />
        </View>
      </View>

      {/* buttons */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.doublefield}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
        >
          <AppButton title="Add Recipient" buttonColor={Colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.doublefield, { marginLeft: RFPercentage(1) }]}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("SuccessScreen", {
              transferType1,
              transferType2,
            });
          }}
        >
          <AppButton title="Submit" buttonColor={Colors.secondary} />
        </TouchableOpacity>
      </View>
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
  doublefield: {
    width: "50%",
    color: Colors.blacky,
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
});
