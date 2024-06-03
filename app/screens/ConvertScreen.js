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
  const [selectedTransferType1, setSelectedTransferType1] = useState(null);
  const [selectedTransferType2, setSelectedTransferType2] = useState(null);
  const [Name, onChangeName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Name2, onChangeName2] = useState("");

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
  const handleNext = () => {
    if (!selectedTransferType1 || !selectedTransferType2) {
      setErrorMessage("Please select both transfer types.");
    } else {
      setErrorMessage("");
      navigation.navigate("AddRecepientScreen", {
        transferType1,
        transferType2,
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
                  {bankCrpto.map((item) => (
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
              onChangeText={onChangeName}
              value={Name}
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
                  {bankCrpto.map((item) => (
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
              onChangeText={onChangeName2}
              value={Name2}
              placeholder="$0.00"
              placeholderTextColor={Colors.grey}
            />
          </View>
        </View>
      </View>
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
    marginTop: RFPercentage(1),
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
});
