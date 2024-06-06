import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";
import TwoEndContainer from "../components/TwoEndContainer";

export default function ConvertScreen({ route }) {
  const { transferType1, transferType2 } = route.params;
  const navigation = useNavigation();
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const [selectedTransferType1, setSelectedTransferType1] = useState(null);
  const [selectedTransferType2, setSelectedTransferType2] = useState(null);
  const [selectedTransferType3, setSelectedTransferType3] = useState(null);
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const bankCrpto = [
    {
      id: 1,
      name: "HSBS",
      eicon: icons.bank,
    },
    {
      id: 2,
      name: "USN",
      eicon: icons.crypto,
    },
    {
      id: 3,
      name: "Wise",
      eicon: icons.money,
    },
  ];

  const CryptoName = [
    {
      id: 1,
      name: "BTC",
    },
    {
      id: 2,
      name: "ETH",
    },
    {
      id: 3,
      name: "SOL",
    },
    {
      id: 4,
      name: "XRP",
    },
  ];
  const banktransferRate = [
    {
      id: 1,
      name: "America",
      flag: icons.france,
      rate: "1$:20CAD",
    },
    {
      id: 2,
      name: "Japan",
      flag: icons.canada,
      rate: "1$:30JAP",
    },
    {
      id: 3,
      name: "France",
      flag: icons.france,
      rate: "1$:0.92Euro",
    },
  ];
  useEffect(() => {
    if (amount1 && selectedTransferType1 && selectedTransferType2) {
      handleConversion();
    }
  }, [amount1, selectedTransferType1, selectedTransferType2]);

  const handleConversion = () => {
    let convertedValue = parseFloat(amount1);
    if (!isNaN(convertedValue)) {
      if (
        selectedTransferType1.name === "Bank" &&
        selectedTransferType2.name === "Bank" &&
        selectedTransferType3
      ) {
        convertedValue *= selectedTransferType3.rate;
      }
      // Add more conversion logic for different types if needed
      setAmount2(convertedValue.toString());
    }
  };

  const handleNext = () => {
    if (
      !selectedTransferType1 ||
      !selectedTransferType2 ||
      !amount1 ||
      !amount2
    ) {
      setErrorMessage("Please select both transfer types and enter an amount.");
    } else {
      setErrorMessage("");
      navigation.navigate("AddRecepientScreen", {
        transferType1,
        transferType2,
        amount1,
        amount2,
      });
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
            title="Convert"
            onpress={() => {
              navigation.navigate("HomeScreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {transferType1 ? transferType1.name : "Not Selected"}
        </Text>
        <Text style={styles.text}>to</Text>
        <Text style={styles.text}>
          {transferType2 ? transferType2.name : "Not Selected"}
        </Text>
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      {/* coverter */}
      <View style={styles.transferContainer}>
        {/* First Dropdown */}
        <View style={{ width: "45%" }}>
          <View style={styles.dropdownToggle}>
            <View
              style={{
                position: "absolute",
                right: RFPercentage(2),
                top: RFPercentage(0.5),
              }}
            >
              <View
                style={{
                  width: "100%",
                  padding: RFPercentage(0.5),
                  borderRadius: RFPercentage(0.5),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(0.5),
                  backgroundColor: Colors.secondary,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: RFPercentage(1.5),
                    fontFamily: FontFamily.semiBold,
                  }}
                >
                  {selectedTransferType1
                    ? selectedTransferType1.name
                    : transferType1.name}
                </Text>

                {dropdown1 ? (
                  <TouchableOpacity onPress={() => setDropdown1(false)}>
                    <Entypo name="chevron-up" color={Colors.white} size={22} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDropdown1(true)}>
                    <Entypo
                      name="chevron-down"
                      color={Colors.white}
                      size={22}
                    />
                  </TouchableOpacity>
                )}
              </View>

              {dropdown1 && (
                <View style={styles.dropdown}>
                  {transferType1.name === "Crypto"
                    ? CryptoName.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setSelectedTransferType1(item);
                            setDropdown1(false);
                          }}
                        >
                          <Text style={styles.dropdownText}>{item.name}</Text>
                        </TouchableOpacity>
                      ))
                    : bankCrpto.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setSelectedTransferType1(item);
                            setDropdown1(false);
                          }}
                        >
                          <Text style={styles.dropdownText}>{item.name}</Text>
                        </TouchableOpacity>
                      ))}
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              width: "90%",
              position: "absolute",
              bottom: RFPercentage(2),
              left: RFPercentage(2),
            }}
          >
            <TextInput
              style={{ width: "90%", fontSize: RFPercentage(2.5) }}
              keyboardType="numeric"
              onChangeText={setAmount1}
              value={amount1}
              placeholder="$0.00"
              placeholderTextColor={Colors.grey}
            />
          </View>
        </View>

        <View style={styles.swapIconContainer}>
          <Fontisto name="arrow-swap" color={Colors.darkgrey} size={22} />
        </View>

        {/* Second Dropdown */}
        <View style={{ width: "45%" }}>
          <View style={styles.dropdownToggle}>
            <View
              style={{
                position: "absolute",
                right: RFPercentage(2),
                top: RFPercentage(0.5),
              }}
            >
              <View
                style={{
                  width: "100%",
                  padding: RFPercentage(0.5),
                  borderRadius: RFPercentage(0.5),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(0.5),
                  backgroundColor: Colors.secondary,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: RFPercentage(1.5),
                    fontFamily: FontFamily.semiBold,
                  }}
                >
                  {selectedTransferType2
                    ? selectedTransferType2.name
                    : transferType2.name}
                </Text>

                {dropdown2 ? (
                  <TouchableOpacity onPress={() => setDropdown2(false)}>
                    <Entypo name="chevron-up" color={Colors.white} size={22} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDropdown2(true)}>
                    <Entypo
                      name="chevron-down"
                      color={Colors.white}
                      size={22}
                    />
                  </TouchableOpacity>
                )}
              </View>

              {dropdown2 && (
                <View style={styles.dropdown}>
                  {transferType2.name === "Crypto"
                    ? CryptoName.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setSelectedTransferType2(item);
                            setDropdown2(false);
                          }}
                        >
                          <Text style={styles.dropdownText}>{item.name}</Text>
                        </TouchableOpacity>
                      ))
                    : bankCrpto.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setSelectedTransferType2(item);
                            setDropdown2(false);
                          }}
                        >
                          <Text style={styles.dropdownText}>{item.name}</Text>
                        </TouchableOpacity>
                      ))}
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              width: "90%",
              position: "absolute",
              bottom: RFPercentage(2),
              left: RFPercentage(2),
            }}
          >
            <TextInput
              style={{ width: "90%", fontSize: RFPercentage(2.5) }}
              keyboardType="numeric"
              onChangeText={setAmount2}
              value={amount2}
              placeholder="$0.00"
              placeholderTextColor={Colors.grey}
            />
          </View>
        </View>
      </View>

      {/* bank dropdown */}
      {transferType2.name === "Bank" ? (
        <>
          <View
            style={{
              backgroundColor: Colors.fieldcolor,
              width: "90%",
              borderRadius: RFPercentage(0.5),
              height: RFPercentage(7),
              justifyContent: "center",
              marginTop: RFPercentage(3),
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: RFPercentage(2),
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                  }}
                  source={
                    selectedTransferType3
                      ? selectedTransferType3.flag
                      : icons.bank
                  }
                />
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(1.7),
                    marginLeft: RFPercentage(1.5),
                    color: Colors.blacky,
                  }}
                >
                  {selectedTransferType3
                    ? selectedTransferType3.name
                    : "Pleae Select the rates"}
                </Text>
                <Text
                  style={{
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.5),
                    marginLeft: RFPercentage(3),
                    color: Colors.grey,
                  }}
                >
                  {selectedTransferType3 ? selectedTransferType3.rate : null}
                </Text>
              </View>
              {dropdown3 ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setDropdown3(false);
                  }}
                  style={{
                    position: "absolute",
                    right: RFPercentage(3.4),
                  }}
                >
                  <Image
                    style={{
                      width: RFPercentage(4),
                      height: RFPercentage(4),
                    }}
                    source={icons.downarrow}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setDropdown3(true);
                  }}
                  style={{
                    position: "absolute",
                    right: RFPercentage(3),
                  }}
                >
                  <Image
                    style={{
                      width: RFPercentage(4),
                      height: RFPercentage(4),
                    }}
                    source={icons.uparrow}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* dropdown */}
          {dropdown3 ? (
            <View
              style={{
                backgroundColor: Colors.fieldcolor,
                width: "90%",
                paddingHorizontal: RFPercentage(1),
                paddingBottom: RFPercentage(1),
              }}
            >
              {banktransferRate.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedTransferType3(item);
                    setDropdown3(false);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: RFPercentage(2),
                    }}
                  >
                    <Image
                      style={{
                        width: RFPercentage(4),
                        height: RFPercentage(4),
                      }}
                      source={item.flag}
                    />
                    <Text
                      style={{
                        fontFamily: FontFamily.medium,
                        fontSize: RFPercentage(1.7),
                        marginLeft: RFPercentage(1.5),
                        color: Colors.blacky,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.5),
                        marginLeft: RFPercentage(3),
                        color: Colors.grey,
                      }}
                    >
                      {item.rate}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </>
      ) : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
        <AppButton title="Next" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: RFPercentage(3),
    width: "90%",
    padding: RFPercentage(1.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    flexDirection: "row",
    borderRadius: RFPercentage(1),
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.medium,
    color: Colors.white,
    marginHorizontal: RFPercentage(0.5),
  },
  transferContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  buttonText: {
    color: Colors.darkgrey,
    fontSize: RFPercentage(2.5),
    fontFamily: FontFamily.semiBold,
  },
  swapIconContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.5),
  },
  dropdownToggle: {
    height: RFPercentage(12),
    width: "100%",
    padding: RFPercentage(2),
    borderRadius: RFPercentage(1),
    marginTop: RFPercentage(2),
    backgroundColor: "#EDEDED",
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
    marginTop: RFPercentage(1.5),
  },
  dropdownIcon: {
    width: RFPercentage(1.5),
    height: RFPercentage(1.5),
  },
  dropdownText: {
    marginLeft: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.2),
    color: Colors.grey,
  },
  loginButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  errorText: {
    color: Colors.red,
    marginTop: RFPercentage(1),
  },
});
