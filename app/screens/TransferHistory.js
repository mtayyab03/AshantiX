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
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";

export default function TransferHistory(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const transactionHistory = [
    {
      id: 1,
      name: "M Tayyab",
      amount: "307.50$",
      date: "05-04-2024",
    },
    {
      id: 2,
      name: "Anna Watson",
      amount: "107.50$",
      date: "03-04-2024",
    },
    {
      id: 3,
      name: "Wasif Ali",
      amount: "25.50$",
      date: "05-05-2024",
    },
    {
      id: 4,
      name: "Hassan Gondal",
      amount: "111.60$",
      date: "05-07-2024",
    },
    {
      id: 5,
      name: "Elon Musk",
      amount: "1125.50$",
      date: "05-05-2024",
    },
    {
      id: 6,
      name: "Jeff Bezos",
      amount: "1041.60$",
      date: "05-07-2024",
    },
  ];
  const filteredTransactions = transactionHistory.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            title="Transfer History"
            onpress={() => {
              props.navigation.navigate("Profilescreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* search field */}
      <View style={styles.searchmain}>
        <View style={styles.innermain}>
          <TextInput
            style={styles.inputtext}
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Search"
            placeholderTextColor={Colors.grey}
          />
          <Image style={styles.img} source={icons.search} />
        </View>
      </View>
      <View style={{ marginBottom: RFPercentage(1) }} />

      {/* transaction history */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {filteredTransactions.map((item) => (
          <View
            key={item.id}
            style={{
              width: "90%",
              alignItems: "center",
              flexDirection: "row",
              marginTop: RFPercentage(3),
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                  borderRadius: RFPercentage(1),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(209, 176, 0, 0.4)",
                }}
              >
                <Image
                  style={{ width: RFPercentage(2), height: RFPercentage(2) }}
                  source={icons.sendm}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.4) }}>
                <Text
                  style={{
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(1.8),
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(0.5),
                    color: Colors.grey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1),
                  }}
                >
                  Delivered
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(1.8),
                }}
              >
                {item.amount}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(0.5),
                  color: Colors.grey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1),
                }}
              >
                {item.date}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchmain: {
    width: "90%",
    backgroundColor: Colors.fieldcolor,
    padding: RFPercentage(1),
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1.5),
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    height: RFPercentage(6.5),
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    fontSize: RFPercentage(2),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
});
