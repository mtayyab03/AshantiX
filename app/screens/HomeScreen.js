import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Entypo, Fontisto } from "@expo/vector-icons";

// Config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// Components
import AppButton from "../components/AppButton";

export default function HomeScreen(props) {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [selectedTransferType1, setSelectedTransferType1] = useState(null);
  const [selectedTransferType2, setSelectedTransferType2] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const transferType = [
    {
      id: 1,
      name: "Bank",
      eicon: icons.bank,
    },
    {
      id: 2,
      name: "Crypto",
      eicon: icons.crypto,
    },
    {
      id: 3,
      name: "Money",
      eicon: icons.money,
    },
  ];
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
  const handleNext = () => {
    if (!selectedTransferType1 || !selectedTransferType2) {
      setErrorMessage("Please select both transfer types.");
    } else {
      setErrorMessage("");
      props.navigation.navigate("ConvertScreen", {
        transferType1: selectedTransferType1,
        transferType2: selectedTransferType2,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Home</Text>
        </View>
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.transferContainer}>
        {/* First Dropdown */}
        <View style={{ width: "45%" }}>
          <View style={styles.dropdownToggle}>
            <Text style={styles.buttonText}>
              {selectedTransferType1
                ? selectedTransferType1.name
                : "Transfer Type"}
            </Text>

            {dropdown1 ? (
              <TouchableOpacity onPress={() => setDropdown1(false)}>
                <Entypo name="chevron-up" color={Colors.white} size={22} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setDropdown1(true)}>
                <Entypo name="chevron-down" color={Colors.white} size={22} />
              </TouchableOpacity>
            )}
          </View>

          {dropdown1 && (
            <View style={styles.dropdown}>
              {transferType.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedTransferType1(item);
                    setDropdown1(false);
                  }}
                >
                  <Image style={styles.dropdownIcon} source={item.eicon} />
                  <Text style={styles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.swapIconContainer}>
          <Fontisto name="arrow-swap" color={Colors.darkgrey} size={22} />
        </View>

        {/* Second Dropdown */}
        <View style={{ width: "45%" }}>
          <View style={styles.dropdownToggle}>
            <Text style={styles.buttonText}>
              {selectedTransferType2
                ? selectedTransferType2.name
                : "Transfer Type"}
            </Text>

            {dropdown2 ? (
              <TouchableOpacity onPress={() => setDropdown2(false)}>
                <Entypo name="chevron-up" color={Colors.white} size={22} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setDropdown2(true)}>
                <Entypo name="chevron-down" color={Colors.white} size={22} />
              </TouchableOpacity>
            )}
          </View>

          {dropdown2 && (
            <View style={styles.dropdown}>
              {transferType.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedTransferType2(item);
                    setDropdown2(false);
                  }}
                >
                  <Image style={styles.dropdownIcon} source={item.eicon} />
                  <Text style={styles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
        <AppButton title="Next" buttonColor={Colors.primary} />
      </TouchableOpacity>

      <View style={styles.recentTransfersContainer}>
        <Text style={styles.recentTransfersText}>Recent Transfers</Text>
      </View>

      {/* history */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {transactionHistory.map((item) => (
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
                    fontSize: RFPercentage(1.6),
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
                  fontSize: RFPercentage(1.6),
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
  transferContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  buttonText: {
    color: Colors.white,
    fontSize: RFPercentage(1.5),
    fontFamily: FontFamily.semiBold,
  },
  swapIconContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.5),
  },
  dropdownToggle: {
    width: "100%",
    padding: RFPercentage(2),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
    backgroundColor: Colors.secondary,
    flexDirection: "row",
  },
  dropdown: {
    backgroundColor: Colors.fieldcolor,
    width: "100%",
    height: RFPercentage(10),
    paddingLeft: RFPercentage(1),
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  dropdownIcon: {
    width: RFPercentage(2),
    height: RFPercentage(2),
  },
  dropdownText: {
    marginLeft: RFPercentage(1),
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.5),
    color: Colors.grey,
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
});
